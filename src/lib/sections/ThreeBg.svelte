<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Vector2,
		Vector3,
		PerspectiveCamera,
		Scene,
		WebGLRenderer,
		SphereGeometry,
		MeshBasicMaterial,
		TextureLoader,
		Mesh,
		LineBasicMaterial,
		LineSegments,
		BufferAttribute,
		BufferGeometry
	} from 'three';

	let canvasEl: HTMLCanvasElement;
	onMount(() => {
		let camera,
			scene,
			renderer,
			stars = [];

		let LINE_COUNT = 20;
		let geom = new BufferGeometry();
		geom.setAttribute('position', new BufferAttribute(new Float32Array(6 * LINE_COUNT), 3));
		geom.setAttribute('velocity', new BufferAttribute(new Float32Array(2 * LINE_COUNT), 1));
		let pos = geom.getAttribute('position');
		let pa = pos.array;
		let vel = geom.getAttribute('velocity');
		let va = vel.array;

		const mouse = new Vector2();
		const target = new Vector2();

		const resize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		const init = () => {
			camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
			camera.position.z = innerWidth > 750 ? 100 : 500;

			scene = new Scene();

			renderer = new WebGLRenderer({ antialias: true, canvas: canvasEl, alpha: true });
			renderer.setClearColor(0x000000, 0);

			resize();
		};

		const addSphere = () => {
			let geometry = new SphereGeometry(0.5, 5, 5);
			let material = new MeshBasicMaterial({ color: 0xa2a2a2 });
			const textureLoader = new TextureLoader();
			const texture = textureLoader.load('/star.png');
			material.alphaMap = texture;

			for (let z = -1000; z < 2000; z += 20) {
				let sphere = new Mesh(geometry, material);

				sphere.position.x = Math.random() * 1000 - 500;
				sphere.position.y = Math.random() * 1000 - 500;
				sphere.position.z = z;
				sphere.scale.x = sphere.scale.y = 2;

				scene.add(sphere);
				stars.push(sphere);
			}
		};

		const addLines = () => {
			for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
				var x = Math.random() * 200 - 100;
				var y = Math.random() * 100 - 50;
				var z = Math.random() * 200 - 100;
				var xx = x;
				var yy = y;
				var zz = z;
				//line start
				pa[6 * line_index] = x;
				pa[6 * line_index + 1] = y;
				pa[6 * line_index + 2] = z;
				//line end
				pa[6 * line_index + 3] = xx;
				pa[6 * line_index + 4] = yy;
				pa[6 * line_index + 5] = zz;

				va[2 * line_index] = va[2 * line_index + 1] = 0;
			}

			let mat = new LineBasicMaterial({ color: 0xa2a2a2 });
			let lines = new LineSegments(geom, mat);
			scene.add(lines);
		};

		const animateStars = () => {
			for (let i = 0; i < stars.length; i++) {
				let star = stars[i];
				star.position.z += i / 30;
				if (star.position.z > 1000) star.position.z -= 2000;
			}
		};

		const onMouseMove = (event) => {
			mouse.x = event.clientX - innerWidth / 2;
			mouse.y = event.clientY - innerHeight / 2;
		};

		const render = () => {
			requestAnimationFrame(render);

			target.x = (1 - mouse.x) * 0.0002;
			target.y = (1 - mouse.y) * 0.0002;

			camera.rotation.x += 0.04 * (target.y - camera.rotation.x);
			camera.rotation.y += 0.04 * (target.x - camera.rotation.y);
			camera.position.x += 0.1 * ((1 - mouse.x) * 0.01 - camera.position.x);
			camera.position.y += 0.1 * ((1 - mouse.y) * 0.01 - camera.position.y);
			camera.lookAt(new Vector3());

			renderer.render(scene, camera);

			for (let line_index = 0; line_index < LINE_COUNT; line_index++) {
				va[2 * line_index] += 0.05;
				va[2 * line_index + 1] += 0.025;

				pa[6 * line_index + 2] += va[2 * line_index];
				pa[6 * line_index + 5] += va[2 * line_index + 1];

				if (pa[6 * line_index + 5] > 200) {
					var z = Math.random() * 200 - 100;
					pa[6 * line_index + 2] = z;
					pa[6 * line_index + 5] = z;
					va[2 * line_index] = 0;
					va[2 * line_index + 1] = 0;
				}
			}
			pos.needsUpdate = true;

			animateStars();
		};

		init();
		addSphere();
		addLines();
		render();

		addEventListener('resize', resize);
		addEventListener('mousemove', onMouseMove, false);
	});
</script>

<canvas bind:this={canvasEl}></canvas>

<style lang="postcss">
	canvas {
		height: 100vh;
		width: 100vw;
		@apply fixed inset-0 z-[-10] pointer-events-none;
	}
</style>

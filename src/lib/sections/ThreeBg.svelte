<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Vector2,
		PerspectiveCamera,
		Scene,
		WebGLRenderer,
		SphereGeometry,
		MeshBasicMaterial,
		TextureLoader,
		Mesh,
	} from 'three';

	let canvasEl: HTMLCanvasElement;
	onMount(() => {
		let camera,
			scene,
			renderer,
			stars = [];

		const mouse = new Vector2();
		const target = new Vector2();

		const resize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		function init() {
			camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
			camera.position.z = 5;

			scene = new Scene();

			renderer = new WebGLRenderer({ antialias: true, canvas: canvasEl, alpha: true });
			renderer.setClearColor(0x000000, 0);

			resize();
		}

		function addSphere() {
			let geometry = new SphereGeometry(0.5, 32, 32);
			let material = new MeshBasicMaterial({ color: 0xa2a2a2 });
			const textureLoader = new TextureLoader();
			const texture = textureLoader.load('/star.png');
			material.alphaMap = texture;

			for (let z = -1000; z < 1000; z += 20) {
				let sphere = new Mesh(geometry, material);

				sphere.position.x = Math.random() * 1000 - 500;
				sphere.position.y = Math.random() * 1000 - 500;
				sphere.position.z = z;
				sphere.scale.x = sphere.scale.y = 2;

				scene.add(sphere);
				stars.push(sphere);
			}
		}

		function animateStars() {
			for (let i = 0; i < stars.length; i++) {
				let star = stars[i];
				star.position.z += i / 30;
				if (star.position.z > 1000) star.position.z -= 2000;
			}
		}

		function onMouseMove(event) {
			mouse.x = event.clientX - innerWidth / 2;
			mouse.y = event.clientY - innerHeight / 2;
		}

		function render() {
			requestAnimationFrame(render);
			target.x = (1 - mouse.x) * 0.0002;
			target.y = (1 - mouse.y) * 0.0002;

			camera.rotation.x += 0.04 * (target.y - camera.rotation.x);
			camera.rotation.y += 0.04 * (target.x - camera.rotation.y);
			renderer.render(scene, camera);

			animateStars();
		}

		init();
		addSphere();
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

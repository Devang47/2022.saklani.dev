<script lang="ts">
	import P5 from 'p5-svelte';

	let points = [];
	let mult = 0.05;
	
	let r1, r2, g1, g2, b1, b2;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(600, 600);
			p5.background('#040407');
			p5.angleMode(p5.DEGREES);
			p5.noiseDetail(1.5);

			let density = 20;
			let space = p5.width / density;

			for (let x = 0; x < p5.width; x += space) {
				for (let y = 0; y < p5.height; y += space) {
					points.push(p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10)));
				}
			}

			p5.shuffle(points, true);

			r1 = p5.random(255);
			r2 = p5.random(255);
			g1 = p5.random(255);
			g2 = p5.random(255);
			b1 = p5.random(255);
			b2 = p5.random(255);
			mult = p5.random(0.001, 0.06);
		};

		p5.draw = () => {
			p5.noStroke();
			let max;

			if (p5.frameCount * 2 <= points.length) {
				max = p5.frameCount;
			} else {
				max = points.length;
			}

			for (let i = 0; i < max; i++) {
				let r = p5.map(points[i].x, 0, p5.width, r1, r2);
				let g = p5.map(points[i].y, 0, p5.height, g1, g2);
				let b = p5.map(points[i].x, 0, p5.width, b1, b2);
				let alpha = p5.map(
					p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y),
					0,
					300,
					205,
					0
				);

				p5.fill(r, g, b, alpha);

				let angle = p5.map(p5.noise(points[i].x * mult, points[i].y * mult), 0, 1, 100, 720);

				points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

				if (p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y) < 400) {
					p5.ellipse(points[i].x, points[i].y, 1.8);
				}
			}
		};
	};
</script>

<div class="art">
	<P5 {sketch} />
</div>

<style lang="postcss">
	.art {
		@apply -z-10;
	}
</style>

<script>
	import P5 from 'p5-svelte';

	var particles = [];
	var colors = ['#3DB2FF', '#FFB830', '#FF2442', '#FF7600', '#185ADB', '#0A1931', '#99154E'];
	var n, s, maxR;
	function sketch(p5) {
		p5.setup = () => {
			p5.createCanvas(600, 600);
			p5.background('#040407');
			p5.smooth();

			n = 100;
			s = 20;
			maxR = p5.height / 2 - p5.height / 10;
		};

		p5.draw = () => {
			p5.translate(p5.width / 2, p5.height / 2);
			p5.noStroke();

			if (s > 1) {
				if (particles.length != 0) {
					for (let i = 0; i < particles.length; i++) {
						var p = particles[i];
						p.show();
						p.move();

						if (p.isDead()) particles.splice(i, 1);
					}
				} else {
					s -= 2;
					initParticles();
				}
			}
		};

		function initParticles() {
			var c = colors[p5.int(p5.random(colors.length))];

			for (let i = 0; i < n; i++) {
				particles.push(new Particle(maxR, s, c));
			}
		}

		class Particle {
			constructor(maxR_, s_, c_) {
				this.s = s_;
				this.c = c_;
				this.maxR = maxR_;

				this.life = 100;

				this.init();
			}

			init() {
				this.pos = p5.Vector.random2D();
				this.pos.normalize();
				this.pos.mult(p5.random(2, maxR));

				this.vel = p5.createVector();
			}

			show() {
				p5.fill(this.c);
				p5.ellipse(this.pos.x, this.pos.y, this.s, this.s);
				this.life -= 1;
			}

			move() {
				var angle = p5.noise(this.pos.x / 400, this.pos.y / 400) * p5.TAU;

				this.vel.set(p5.cos(angle), p5.sin(angle));
				this.vel.mult(0.3);
				this.pos.add(this.vel);
			}

			isDead() {
				var d = p5.dist(this.pos.x, this.pos.y, 0, 0);

				if (d > this.maxR || this.life < 1) return true;
				else return false;
			}
		}
	};
</script>

<P5 {sketch} />

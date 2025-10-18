// Particle background
const canvas = document.getElementById('canvas3d');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if(this.x<0||this.x>canvas.width) this.vx*=-1;
    if(this.y<0||this.y>canvas.height) this.vy*=-1;
  }
  draw() {
    ctx.fillStyle='rgba(102,126,234,0.5)';
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

const particles = Array.from({length:80},()=>new Particle());
function animate() {
  ctx.fillStyle='rgba(0,0,0,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(animate);
}
animate();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    const target=document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Resize canvas
window.addEventListener('resize',()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', ()=>{
  navMenu.classList.toggle('active');
});

// Mobile dropdown toggle
document.querySelectorAll('.nav-item.dropdown > .nav-link').forEach(link=>{
  link.addEventListener('click', e=>{
    if(window.innerWidth<=768){
      e.preventDefault();
      const dropdown = link.nextElementSibling;
      dropdown.style.display = (dropdown.style.display==='block')?'none':'block';
    }
  });
});

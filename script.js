const SECRET = "REKHAMILAN2008";
const lockwrap = document.getElementById('lockwrap');
const openBtn = document.getElementById('openBtn');
const pw = document.getElementById('pw');
const err = document.getElementById('err');
const main = document.getElementById('main');

openBtn.addEventListener('click', ()=>{
  const val = (pw.value||'').trim();
  if(!val){ pw.focus(); return; }
  if(val === SECRET){
    lockwrap.style.display='none';
    main.classList.remove('hidden');
    addSparkles();
  } else {
    err.textContent = 'Wrong key — try again with love ❤️';
    pw.value=''; pw.focus();
    setTimeout(()=>err.textContent='',2800);
  }
});

pw.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ openBtn.click(); } });

function addSparkles(){
  const cards = document.querySelectorAll('.card');
  cards.forEach((card,i)=>{
    for(let s=0;s<10;s++){
      const span=document.createElement('span');
      span.className='sparkle';
      const size = Math.random()*8 + 4;
      span.style.width = size + 'px';
      span.style.height = size + 'px';
      span.style.position='absolute';
      span.style.left = (5 + Math.random()*90) + '%';
      span.style.top = (5 + Math.random()*90) + '%';
      span.style.borderRadius='50%';
      span.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,245,200,0.95), rgba(255,200,120,0.6))';
      span.style.opacity = 0;
      span.style.transform = 'scale(0.6)';
      span.style.transition = 'opacity 1s ease, transform 2s ease';
      card.appendChild(span);
      setTimeout(()=>{ span.style.opacity = 1; span.style.transform='scale(1.2)'; }, 400 + s*160 + i*200);
      setInterval(()=>{ span.style.opacity = 0; span.style.transform='scale(0.6)'; setTimeout(()=>{ span.style.opacity = 1; span.style.transform='scale(1.1)'; }, 800 + Math.random()*1200); }, 3000 + Math.random()*3000);
    }
  });
}
pw.focus();

// --- Classic Anniversary Animations ---
window.addEventListener('load', () => {
  const fadeEls = document.querySelectorAll('.classic-fade');
  fadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.style.animationDelay = i * 0.3 + 's';
      el.classList.add('animated');
    }, i * 300);
  });
});


// --- Floating Hearts Animation ---
document.addEventListener('DOMContentLoaded', () => {
  const heartsContainer = document.createElement('div');
  heartsContainer.classList.add('hearts-container');
  document.body.appendChild(heartsContainer);

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 6 + Math.random() * 4 + 's';
    heart.style.width = heart.style.height = 10 + Math.random() * 20 + 'px';
    heart.style.backgroundColor = `rgba(255, ${100 + Math.random() * 50}, ${150 + Math.random() * 50}, 0.6)`;
    heartsContainer.appendChild(heart);
  }
});

// --- First Page Animation ---
window.addEventListener('load', () => {
  const firstPage = document.querySelector('.first-page');
  if (firstPage) {
    firstPage.classList.add('animated');
  }
});

const menuButton=document.querySelector('[data-menu-button]');
const menu=document.querySelector('[data-menu]');
const header=document.querySelector('.site-header .header-inner');
const cta=document.querySelector('.site-header .header-cta');
function closeMenu(){if(!menuButton||!menu)return;menuButton.setAttribute('aria-expanded','false');menu.classList.remove('is-open');document.body.classList.remove('menu-open');}
if(header){const be=document.documentElement.lang==='be';const nav=document.createElement('nav');nav.className='language-switch';nav.setAttribute('aria-label',be?'Выбар мовы':'Выбор языка');nav.innerHTML='<a class="language-choice '+(!be?'is-active':'')+'" href="/" lang="ru" '+(!be?'aria-current="page"':'')+'>Русский</a><a class="language-choice '+(be?'is-active':'')+'" href="/be/" lang="be" '+(be?'aria-current="page"':'')+'>Беларуская</a>';header.insertBefore(nav,cta||null);}
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menu.classList.toggle('is-open',!open);document.body.classList.toggle('menu-open',!open);});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});}
document.querySelectorAll('[data-current-year]').forEach(e=>{e.textContent=String(new Date().getFullYear());});

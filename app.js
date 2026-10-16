const toggle=document.querySelector('.menu-toggle');
const mobile=document.getElementById('mobile-nav');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');mobile.hidden=true;}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobile.hidden=!open;});
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'){const open=!mobile.hidden;closeMenu();if(open)toggle.focus();}});window.matchMedia('(min-width:481px)').addEventListener('change',e=>{if(e.matches)closeMenu();});document.getElementById('year').textContent=new Date().getFullYear();

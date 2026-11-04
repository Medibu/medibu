/* Parallax del fondo de la previa */
(function(){
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  var capas=[].slice.call(document.querySelectorAll('[data-d]')),mx=0,my=0,pend=false;
  function pinta(){
    pend=false;var sy=window.scrollY||0;
    capas.forEach(function(c){
      var d=parseFloat(c.dataset.d),y=Math.max(-170,-sy*d*.3-my*d*22);
      c.style.transform='translate3d('+(-mx*d*34).toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
    });
  }
  function pide(){if(!pend){pend=true;requestAnimationFrame(pinta)}}
  addEventListener('scroll',pide,{passive:true});
  addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;pide()},{passive:true});
  pinta();
})();

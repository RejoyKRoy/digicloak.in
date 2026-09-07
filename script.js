(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  if(b&&n){
    function set(open){
      b.setAttribute('aria-expanded',open?'true':'false');
      b.setAttribute('aria-label',open?'Close menu':'Open menu');
      n.setAttribute('data-open',open?'true':'false');
      document.body.setAttribute('data-lock',open?'true':'false');
    }
    b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true');});
    n.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
    window.addEventListener('resize',function(){if(window.innerWidth>860)set(false);});
  }

  var f=document.querySelector('.wa-float'),hero=document.querySelector('.hero');
  if(f&&hero&&'IntersectionObserver' in window){
    f.setAttribute('data-hide','true');
    new IntersectionObserver(function(en){
      f.setAttribute('data-hide',en[0].isIntersecting?'true':'false');
    },{threshold:0.18}).observe(hero);
  }
})();

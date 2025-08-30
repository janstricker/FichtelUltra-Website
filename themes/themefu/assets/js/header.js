(function(){
  function randomInRange(min,max,unit){return (Math.random()*(max-min)+min)+unit;}
  function init(){
    var root = document.documentElement;
    // Ensure CSS variables exist (critical CSS sets defaults)
    root.style.setProperty('--fu-logo-width', root.style.getPropertyValue('--fu-logo-width') || '200px');
    root.style.setProperty('--fu-logo-height', root.style.getPropertyValue('--fu-logo-height') || '60px');

    // Randomize decal position/size using transform-friendly vars (no layout shift)
    root.style.setProperty('--decalTop', randomInRange(-100, -30, '%'));
    root.style.setProperty('--decalLeft', randomInRange(-30, 30, '%'));
    root.style.setProperty('--decalWidth', randomInRange(80, 200, '%'));

    // Trigger a composited fade-in
    var decal = document.querySelector('.decal');
    if(decal){
      decal.style.opacity = '1';
    }

    // Hamburger / fullscreen menu interactions (safe-guarded)
    var hamburger = document.getElementById('hamburgerMenu');
    var menuContainer = document.getElementById('fullscreenMenuContainer');
    if(hamburger && menuContainer){
      hamburger.addEventListener('click', function(e){
        var isHidden = menuContainer.style.display === 'none' || menuContainer.style.display === '';
        menuContainer.style.display = isHidden ? 'block' : 'none';
      });
      // Close on outside click
      document.addEventListener('click', function(e){
        if(!menuContainer.contains(e.target) && !hamburger.contains(e.target)){
          menuContainer.style.display = 'none';
        }
      });
    }
  }

  if('requestIdleCallback' in window){
    requestIdleCallback(init, {timeout: 1500});
  } else {
    window.addEventListener('load', function(){ setTimeout(init, 200); });
  }
})();

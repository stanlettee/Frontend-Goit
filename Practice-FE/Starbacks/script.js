window.addEventListener('scroll', function() {
    var backgroundContainer = document.getElementById('aside');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 10) { // Change 100 to the scroll position where you want to switch to fixed background attachment
      backgroundContainer.style.backgroundAttachment = 'fixed';
    } else {
      backgroundContainer.style.backgroundAttachment = 'scroll';
    }
  });
feather.replace();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

jQuery(function($) {
    $(window).load(function() {
  
      var $gal = $("#home-card"),
        galW = $gal.outerWidth(true),
        galSW = $gal[0].scrollWidth,
        wDiff = (galSW / galW) - 1, // widths difference ratio
        mPadd = 60, // Padding do mouse
        damp = 20, // Suvavidade de movimento
        mX = 0, // Posição real do Mouse
        mX2 = 0, // Nova posição do Mouse
        posX = 0,
        mmAA = galW - (mPadd * 2), // Area do mouse
        mmAAr = (galW / mmAA); 
  
      $gal.mousemove(function(e) {
        mX = e.pageX - $(this).offset().left;
        mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
      });
  
      setInterval(function() {
        posX += (mX2 - posX) / damp; // Delay
        $gal.scrollLeft(posX * wDiff);
      }, 10);
  
    });
  });


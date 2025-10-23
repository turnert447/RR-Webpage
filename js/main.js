// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

        (function () {
            // Initialize accordion buttons
            var acc = document.querySelectorAll('.accordion');

            function closePanel(panel, btn) {
                panel.style.maxHeight = null;
                panel.classList.remove('open');
                if (btn) btn.classList.remove('active');
                if (btn) btn.setAttribute('aria-expanded', 'false');
                panel.setAttribute('aria-hidden', 'true');
            }

            function openPanel(panel, btn) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.classList.add('open');
                if (btn) btn.classList.add('active');
                if (btn) btn.setAttribute('aria-expanded', 'true');
                panel.setAttribute('aria-hidden', 'false');
            }

            acc.forEach(function (btn) {
                btn.setAttribute('role', 'button');
                btn.setAttribute('aria-expanded', 'false');
                var panel = btn.nextElementSibling;
                if (panel) {
                    panel.setAttribute('aria-hidden', 'true');
                }

                btn.addEventListener('click', function () {
                    var isOpen = btn.classList.contains('active');
                    acc.forEach(function (otherBtn) {
                        var otherPanel = otherBtn.nextElementSibling;
                        if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                            closePanel(otherPanel, otherBtn);
                        }
                    });

                    if (isOpen) {
                        closePanel(panel, btn);
                    } else {
                        openPanel(panel, btn);
                    }
                });

                if (panel) {
                    var imgs = panel.querySelectorAll('img');
                    imgs.forEach(function (img) {
                        if (!img.complete) {
                            img.addEventListener('load', function () {
                                if (panel.classList.contains('open')) {
                                    panel.style.maxHeight = panel.scrollHeight + 'px';
                                }
                            });
                        }
                    });
                }
            });

            // On window resize, update the maxHeight for any open panels
            window.addEventListener('resize', function () {
                acc.forEach(function (btn) {
                    var panel = btn.nextElementSibling;
                    if (btn.classList.contains('active') && panel) {
                        // Temporarily clear to get natural height, then reassign to animate to new height
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                    }
                });
            });
        })();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

       (function () {
            // Initialize accordion buttons
            var acc = document.querySelectorAll('.accordion');

            function closePanel(panel, btn) {
                panel.style.maxHeight = null;
                panel.classList.remove('open');
                if (btn) btn.classList.remove('active');
                if (btn) btn.setAttribute('aria-expanded', 'false');
                panel.setAttribute('aria-hidden', 'true');
            }

            function openPanel(panel, btn) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.classList.add('open');
                if (btn) btn.classList.add('active');
                if (btn) btn.setAttribute('aria-expanded', 'true');
                panel.setAttribute('aria-hidden', 'false');
            }

            acc.forEach(function (btn) {
                btn.setAttribute('role', 'button');
                btn.setAttribute('aria-expanded', 'false');
                var panel = btn.nextElementSibling;
                if (panel) {
                    panel.setAttribute('aria-hidden', 'true');
                }

                btn.addEventListener('click', function () {
                    var isOpen = btn.classList.contains('active');
                    acc.forEach(function (otherBtn) {
                        var otherPanel = otherBtn.nextElementSibling;
                        if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                            closePanel(otherPanel, otherBtn);
                        }
                    });

                    if (isOpen) {
                        closePanel(panel, btn);
                    } else {
                        openPanel(panel, btn);
                    }
                });

                if (panel) {
                    var imgs = panel.querySelectorAll('img');
                    imgs.forEach(function (img) {
                        if (!img.complete) {
                            img.addEventListener('load', function () {
                                if (panel.classList.contains('open')) {
                                    panel.style.maxHeight = panel.scrollHeight + 'px';
                                }
                            });
                        }
                    });
                }
            });

            window.addEventListener('resize', function () {
                acc.forEach(function (btn) {
                    var panel = btn.nextElementSibling;
                    if (btn.classList.contains('active') && panel) {
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                    }
                });
            });
        })();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
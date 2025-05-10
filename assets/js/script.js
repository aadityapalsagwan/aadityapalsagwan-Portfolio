const mobileMenu = document.getElementById('mobile-menu');
const leftNavbar = document.getElementById('left-navbar');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('div[id]'); // ✅ sirf id wale divs
const scrollToTopBtn = document.getElementById('scrollToTopBtn'); // Scroll to top button


// Mobile menu open
mobileMenu.addEventListener('click', () => {
    leftNavbar.classList.add('active');
});

// Mobile menu close button
closeBtn.addEventListener('click', () => {
    leftNavbar.classList.remove('active');
});

// Nav link click par menu band
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        leftNavbar.classList.remove('active');
    });
});

// Scroll ke time active link change
window.addEventListener('scroll', () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default action (jumping to the section instantly)
        
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Find the target section element
        
        window.scrollTo({
            top: targetElement.offsetTop, // Scroll to the top of the section
            behavior: 'smooth' // Smooth scroll effect
        });
        
        // Close the mobile menu after link is clicked
        leftNavbar.classList.remove('active');
    });
});


// Scroll to top button functionality
// Show the button when user scrolls down 200px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }
};

// When the button is clicked, scroll to top
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling to top
    });
});

// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable F12, Ctrl+U, Ctrl+Shift+I
document.addEventListener('keydown', function (e) {
  if (e.keyCode === 123) { // F12
      e.preventDefault();
  }
  if (e.ctrlKey && e.key.toLowerCase() === 'u') { // Ctrl+U
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') { // Ctrl+Shift+I
      e.preventDefault();
  }
});

// Detect Developer Tools Opening
(function() {
  const devtoolsDetector = new Image();
  Object.defineProperty(devtoolsDetector, 'id', {
      get: function () {
          alert('🚫 Developer tools are open!');
      }
  });

  console.log(devtoolsDetector);
})();
/*/ control u script end */

/*    hero slider start   */
const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1533612608997-212b06408bb9?auto=format&fit=crop&w=1600&q=80'
  ];
  
  let currentIndex = 0;
  const slider = document.querySelector('.slider-container');
  const dotsContainer = document.getElementById('dots');
  
  function createDots() {
    images.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateSlider();
        resetTimer();
      });
      dotsContainer.appendChild(dot);
    });
  }
  
  function updateSlider() {
    slider.style.backgroundImage = `url('${images[currentIndex]}')`;
    document.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
    resetTimer();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
    resetTimer();
  }
  
  let slideTimer = setInterval(nextSlide, 4000);
  
  function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(nextSlide, 4000);
  }
  
  createDots();
  updateSlider();
    

  
/*    hero slider end   */


/* education section start */

function showEducation(sectionId) {
  const allSections = document.querySelectorAll('.edu-detail');
  const allButtons = document.querySelectorAll('.edu-btn');

  allSections.forEach(section => {
    section.classList.remove('active');
  });

  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`[onclick="showEducation('${sectionId}')"]`).classList.add('active');
}




/* education section end */


// contact form 
// Form submit hone par alert aur fields empty karne ka function
//  document.getElementById('contactForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert("Message Sent Successfully! 🎉");
//   this.reset();
// });

// contact form end 


// ========================== car-rent script style   ========================

function updatePrice() {
  let carType = document.getElementById('car-type').value;
  let hours = parseInt(document.getElementById('duration').value);
  
  let baseRates = {
    sedan: 500,
    suv: 800,
    sports: 1500,
    luxury: 2500
  };

  let pricePerHour = baseRates[carType] || 500;
  let totalPrice = pricePerHour * hours;

  document.getElementById('price').innerText = totalPrice.toLocaleString();
}


// ================== achivement start ===========

function openModal(imgSrc) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = imgSrc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}



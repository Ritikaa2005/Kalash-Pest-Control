// Smooth Scroll (optional for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Form Handling (basic simulation for now)
  const contactForm = document.querySelector("form");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
  
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
      } else {
        alert("Thank you for contacting us! We’ll get back to you shortly.");
        this.reset();
      }
    });
  }
  
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.3
  };
  
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => appearOnScroll.observe(fader));
  
  // Fade-in on scroll (already included)
window.addEventListener("scroll", function () {
    document.querySelectorAll(".fade-in").forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  });
  
  // Optional form submit message
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    this.reset();
  });
  

  // WhatsApp Button click (optional enhancement)
  const whatsappBtn = document.querySelector(".whatsapp-float");
  
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      console.log("Opening WhatsApp chat...");
    });
  }

  // Show button after scrolling down 100px
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Smooth scroll to top
  document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
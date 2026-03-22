document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Active Link State Configuration
  const currentPath = window.location.pathname.split('/').pop() || 'Home.html';
  const navItems = document.querySelectorAll('.nav-links li a');
  
  navItems.forEach(item => {
    if (item.getAttribute('href') === currentPath) {
      item.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if(targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        // Close menu if open
        if(navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
});

// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Mobile Navbar Toggle
  const toggleBtn = document.getElementById('toggle-nav');
  const navLinks = document.querySelector('nav ul');
  
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  
  // Optional: Subscribe Form Handling (Basic)
  const subscribeForm = document.getElementById('subscribe-form');
  subscribeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with the email: ${email}`);
    subscribeForm.reset();
  });
  
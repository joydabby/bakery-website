/* ---------------------------
  main.js - menu filter, form validation, theme toggle
--------------------------- */

document.addEventListener('DOMContentLoaded', function() {
  // THEME TOGGLE (works on any page: toggles 'dark' on body)
  function setupThemeToggles() {
    const toggles = document.querySelectorAll('[id^=themeToggle]');
    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        // change icon quickly
        btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
      });
    });
  }
  setupThemeToggles();

  /* -----------------------
     MENU FILTER
     - Buttons: .filter-btn with data-filter
     - Items: .menu-item with data-category
  -------------------------*/
  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.menu-item');

    function setActiveButton(target) {
      buttons.forEach(b => b.classList.remove('active'));
      target.classList.add('active');
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');
        setActiveButton(btn);
        items.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (cat === 'all' || itemCat === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // default: make 'All' active on load
    const defaultBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (defaultBtn) defaultBtn.click();
  }

  /* -----------------------
     CONTACT FORM VALIDATION
  -------------------------*/
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      // simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) { alert('Please enter your name.'); return; }
      if (!email || !emailRegex.test(email)) { alert('Please enter a valid email.'); return; }
      if (!message) { alert('Please write a message.'); return; }

      // simulated submission
      alert(`Thanks ${name}! Your message has been sent. We'll reply to ${email} soon.`);
      form.reset();
    });
  }

});

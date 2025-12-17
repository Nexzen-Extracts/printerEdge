const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });

  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  document.addEventListener("click", function (e) {
    const target = e.target.closest("a, button");
    if (!target) return;

    const href = target.getAttribute("href");

    if (href === "#" || href === "" || href === null) {
      e.preventDefault();

      if (window.jivo_api) {
        jivo_api.open();
      } else {
        const script = document.createElement("script");
        script.src = "//code.jivosite.com/widget/XIBgC2jM7P";
        script.async = true;
        document.body.appendChild(script);

        script.onload = function () {
          if (window.jivo_api) {
            jivo_api.open();
          }
        };
      }
    }
  });
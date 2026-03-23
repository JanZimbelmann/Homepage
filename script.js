// fetch navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.toggle("show-mobile-menu");
    });
    menuCloseButton.addEventListener("click", () => menuOpenButton.click());
    const dropdownLinks = document.querySelectorAll(".dropdown > .nav-link");
    dropdownLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("show-dropdown");
        }
      });
    });
    const dropdownMenuLinks = document.querySelectorAll(".dropdown-menu a");
    dropdownMenuLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          document.body.classList.remove("show-mobile-menu");
        }
      });
    });
  });

// Certificate modal
const openCertBtn = document.getElementById("open-certificate");
const closeCertBtn = document.getElementById("close-certificate");
const certModal = document.getElementById("certificate-modal");
if (openCertBtn && closeCertBtn && certModal) {
  openCertBtn.addEventListener("click", () => {
    certModal.style.display = "block";
    document.body.classList.add("modal-open");
});

closeCertBtn.addEventListener("click", () => {
    certModal.style.display = "none";
    document.body.classList.remove("modal-open");
});

document.getElementById("certificate-overlay").addEventListener("click", () => {
    certModal.style.display = "none";
    document.body.classList.remove("modal-open");
});
}

// Copy button
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const code = e.target.parentElement.querySelector("code").innerText;
    navigator.clipboard.writeText(code);
    e.target.innerText = "Copied!";
    setTimeout(() => e.target.innerText = "Copy", 1500);
  }
});

// Swiper
if (document.querySelector(".pedalSwiper")) {
  new Swiper(".pedalSwiper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".pedalSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".pedalSwiper .swiper-button-next",
      prevEl: ".pedalSwiper .swiper-button-prev",
    },
    grabCursor: true,
  });
}


// Email obfuscation
const u = "janzimbelmann";
const d = "gmail.com";
const el = document.getElementById("contact-email-text");
const link = document.getElementById("contact-email-link");
if (el && link) {
    el.innerText = u + "@" + d;
    link.href = "mailto:" + u + "@" + d;
}
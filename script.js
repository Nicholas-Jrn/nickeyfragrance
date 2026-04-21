document.addEventListener("DOMContentLoaded", () => {

  // NAV SCROLL
  document.querySelectorAll(".nav-center li").forEach(item => {
    item.addEventListener("click", () => {
      const target = document.getElementById(item.dataset.target);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // SHOP BUTTON
  document.getElementById("shopBtn").onclick = () => {
    document.getElementById("product").scrollIntoView({
      behavior: "smooth"
    });
  };

  // MARKETPLACE LINK
  window.openLink = function(url) {
    window.open(url, "_blank");
  };

  // EMAIL
  document.getElementById("emailBtn").onclick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=tokodesainer@gmail.com&su=Order%20Parfum&body=Halo,%20saya%20tertarik",
      "_blank"
    );
  };

  // WHATSAPP
  document.getElementById("waBtn").onclick = () => {
    window.open(
      "https://wa.me/6289528329189?text=Halo%20saya%20tertarik%20dengan%20produk",
      "_blank"
    );
  };

  // BACK TO TOP
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.7) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // 🔥 INI YANG LO BELUM ADA
  backToTop.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({
      behavior: "smooth"
    });
  });

})

const category = document.querySelector('.category-grid');

/* start */
infiniteScroll();

/* pause kalau user interaksi */
category.addEventListener('touchstart', () => isPaused = true);
category.addEventListener('mousedown', () => isPaused = true);

/* lanjut lagi */
category.addEventListener('touchend', () => {
  setTimeout(() => isPaused = false, 1500);
});

category.addEventListener('mouseup', () => {
  setTimeout(() => isPaused = false, 1500);
});
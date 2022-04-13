function handleMobileNAv() {
  const ulNav = document.getElementById("menu");
  const openNavBtn = document.getElementById("openNav");
  const closeNavBtn = document.getElementById("closeNav");
  const body = document.body;

  // attach event open btn
  if (openNavBtn) {
    openNavBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      ulNav.classList.add("active");
      openNavBtn.style.display = "none";
      closeNavBtn.style.display = "block";
    });
  }

  // attach event close btn
  if (closeNavBtn) {
    openNavBtn.hidden = true;
    closeNavBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      ulNav.classList.remove("active");
      closeNavBtn.style.display = "none";
      openNavBtn.style.display = "block";
    });
  }

  if (body) {
    body.addEventListener("click", () => {
      ulNav.classList.remove("active");
      closeNavBtn.style.display = "none";
      openNavBtn.style.display = "block";
    });
  }
}

function scrollToTop() {
  const toTop = document.getElementById("scrollTop");
  if (toTop) {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        toTop.style.opacity = "1";
      } else {
        toTop.style.opacity = "0";
      }
    }

    toTop.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
}

(() => {
  handleMobileNAv();
  scrollToTop();
})();

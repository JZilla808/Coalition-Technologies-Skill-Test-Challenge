document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentItem = 0;

  function nextCarouselItem() {
    carouselItems[currentItem].classList.remove("active");
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems[currentItem].classList.add("active");
  }

  setInterval(nextCarouselItem, 3000);

  // Accordion for mobile
  if (window.innerWidth < 768) {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.addEventListener("click", function () {
        this.classList.toggle("accordion");
      });
    });
  }
});

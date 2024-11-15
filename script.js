document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  const onScroll = () => {
    boxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        box.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", onScroll);

  onScroll();
});




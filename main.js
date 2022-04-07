const p = document.querySelectorAll("#paraf");
const spans = document.querySelectorAll(".bottom-card-paraf");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    p.forEach((item, i) => {
      if (span.id == i) {
        let isRead = item.classList.toggle("toggle");
        if (isRead) {
          return (span.innerHTML = "Daha Fazla");
        }
        return (span.innerHTML = "Daha Az");
      }
    });
  });
});

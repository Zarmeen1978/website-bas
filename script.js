
  document.addEventListener("DOMContentLoaded", function () {
    const scrollTrack = document.getElementById("scrollTrack");
    const cards = Array.from(scrollTrack.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      scrollTrack.appendChild(clone);
    });
  });

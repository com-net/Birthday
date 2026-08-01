// mombirthday.com — gallery snap effect
// Each photo sits in its own snap-scroll slot. As it becomes the visible
// one, it grows and fades in; the one before it fades out — so scrolling
// one notch swaps straight to the next picture instead of needing a long
// scroll per photo. Works in reverse too since it's just visibility-based.

(function () {
  const track = document.getElementById("galleryTrack");
  if (!track) return;

  const items = track.querySelectorAll(".gallery-item");
  if (!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    items.forEach((item) => item.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    },
    { root: track, threshold: 0.6 }
  );

  items.forEach((item) => observer.observe(item));
})();

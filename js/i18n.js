document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lang-switch button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const lang = btn.dataset.lang;
      console.log("Language switched to:", lang);
    });
  });
});

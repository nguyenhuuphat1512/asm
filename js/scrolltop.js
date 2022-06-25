window.addEventListener("scroll", () => {
  const scrollBtn = document.querySelector(".toup");
  if (window.scrollY >= 1000) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

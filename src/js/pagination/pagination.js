function hideAnother() {
  for (let i = 0; i <= 299; i++) {
    document.querySelector(`.item-${i}`).style.display = "none";
  }
}

function deleteActiveCLass() {
  document.querySelectorAll("a").forEach((e) => {
    e.parentNode.classList.remove("active");
  });
}

function pagination() {
  const pages = document.querySelectorAll("a");
  pages.forEach((e) => {
    e.addEventListener("click", () => {
      deleteActiveCLass();
      e.parentNode.classList.add("active");
      hideAnother();
      let number = e.innerHTML * 10;
      let limit = number + 20;
      for (let i = number; i < limit; i++) {
        document.querySelector(`.item-${i}`).style.display = "table-row";
      }
    });
  });
}

export { pagination };

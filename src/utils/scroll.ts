function scrollHeader() {
  const nav = document.getElementById("header");

  if (window.scrollY >= 200) nav?.classList.add("scroll-header");
  else nav?.classList.remove("scroll-header");
}

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (window.scrollY >= 560) scrollTop?.classList.add("scroll-top");
  else scrollTop?.classList.remove("scroll-top");
}

export { scrollHeader, scrollTop };

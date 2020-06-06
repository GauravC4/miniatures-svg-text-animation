const paths = document.querySelectorAll("svg path");

paths.forEach((path, index) => {
  path.style.strokeDasharray = path.getTotalLength();
  path.style.strokeDashoffset = path.getTotalLength();
  path.animate([{ strokeDashoffset: 0, stroke: "white" }], {
    duration: 3000 + index * 100,
    easing: "ease",
    fill: "forwards",
    delay: index * 150,
  });
});

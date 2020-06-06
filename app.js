const paths = document.querySelectorAll("svg path");

window.setTimeout(render, 1000);

function render() {
  paths.forEach((path, index) => {
    let pathLen = path.getTotalLength();
    path.style.strokeDasharray = pathLen;
    path.style.strokeDashoffset = pathLen;
    path.animate(
      [
        {
          strokeDashoffset: pathLen,
          stroke: "transparent",
        },
        {
          strokeDashoffset: 0,
          stroke: "white",
        },
      ],
      {
        duration: 3000 + index * 100,
        easing: "ease",
        fill: "forwards",
        delay: index * 150,
      }
    );
  });
}

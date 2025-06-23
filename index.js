// Project manipulation

const projects = document.getElementsByClassName("project");

Array.from(projects).forEach((project) => {
  const image = project.children[1];
  const closeBtn = project.querySelector(".project__close");

  // Function to move images on hover

  const handleMove = (event) => {
    let dimensions = project.getBoundingClientRect();

    const height = dimensions.height;
    const width = dimensions.width;

    // Get position of cursor on mouseover
    const x = event.clientX;
    const y = event.clientY;

    // Calculate position of cursor relative to the project, in pixels
    const localX = x - dimensions.left;
    const localY = y - dimensions.top;

    // Calculate rotation value for x and y axes (value between -1 and 1)
    const xRotation = 2 * ((localX - height / 2) / height);
    const yRotation = 2 * ((localY - width / 2) / width);

    image.style.setProperty("--mouse-x", String(xRotation));
    image.style.setProperty("--mouse-y", String(yRotation));
  };

  // Project click: select this, deselect others
  project.addEventListener("click", function (e) {
    // Prevent click on close button from bubbling up
    if (e.target === closeBtn) return;

    Array.from(projects).forEach((p) => p.classList.remove("selected"));
    project.classList.add("selected");
    project.scrollIntoView({ behavior: "instant", block: "start" });
  });

  // Close button click: deselect this project
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    project.classList.remove("selected");
  });
});

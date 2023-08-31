const projects = document.getElementsByClassName("project");

Array.from(projects).forEach((project) => {
  const x = project.children[0];
  const image = project.children[1];

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

  // When project is clicked, add selected class and remove click listener

  const projectClick = (event) => {
    project.classList.add("selected");
    project.removeEventListener("click", projectClick);
  };

  // When x is clicked, remove selected class, and re-add click listener after timeout

  const xClick = (event) => {
    project.classList.remove("selected");
    setTimeout(() => {
      project.addEventListener("click", projectClick);
    }, 100);
  };

  project.addEventListener("mousemove", handleMove);
  project.addEventListener("click", projectClick);
  x.addEventListener("click", xClick);
});

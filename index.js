const projects = document.getElementsByClassName("project");

Array.from(projects).forEach((project) => {

  const image = project.children[0];
  
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
    
    image.style.setProperty('--mouse-x', String(xRotation));
    image.style.setProperty('--mouse-y', String(yRotation));
  };

  project.addEventListener("mousemove", handleMove);

});

Array.from(projects).forEach(project => {

    const handleClick = event => {
        project
    }



    project.addEventListener('click', handleClick);
})

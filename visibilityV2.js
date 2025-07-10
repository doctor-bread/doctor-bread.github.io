// SHOUTOUT TO LEMON (profiley.) FROM DISCORD FOR HELPING WITH THIS OH MY GOD
// https://github.com/BludIsAnLemon
// made for a future project (Department Store 2)
function displayItem(parentID, childClass) {
  try {
    const element = document.querySelector(parentID);

    if (!(element instanceof Node))
      throw new TypeError(`${parentID} is not a valid Node!`);

    const children = element.childNodes;
    let validChildren = Array.from(children).filter(
      (node) => node.nodeType === Node.ELEMENT_NODE
    );

    validChildren.forEach((node) => {
      node.classList.remove("visible");
      if (!node.classList.contains("hidden")) {
        node.classList.add("hidden");
      }
    });

    validChildren.forEach((node) => {
      if (node.classList.contains(childClass)) {
        node.classList.remove("hidden");
        if (!node.classList.contains("visible")) {
          node.classList.add("visible");
        }
      }
    });
  } catch (error) {
    throw error;
  }
}

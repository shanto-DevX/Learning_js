/* function customRender(reElment, container) {
  const createDom = document.createElement(reElment.type);

  createDom.innerHTML = reElment.children;
  createDom.setAttribute("href", reElment.props.href);
  createDom.setAttribute("target", reElment.props.target);

  container.append(createDom);
} */

/* function customRender(reElment, container) {
  const createDom = document.createElement(reElment.type);

  createDom.innerHTML = reElment.children;

  for (const prop in reElment.props) {
    if (prop === "children") continue;
    createDom.setAttribute(prop, reElment.props[prop]);
  }

  container.appendChild(createDom);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to Visit Google",
};

const mainCOntainer = document.querySelector("#root");

customRender(reactElement, mainCOntainer);
 */

function renderReacts(ReElement, container) {
  // -> Create Element
  const createElements = document.createElement(ReElement.type);

  // -> Add Element
  createElements.textContent = ReElement.children;

  // -> Check Props in Element
  for (const prop in ReElement.props) {
    if (prop === "children") continue;
    createElements.setAttribute(prop, ReElement.props[prop]);
  }

  // -> Appen Element Element
  container.appendChild(createElements);
}

const customReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },

  children: "Link From Custom React",
};
const mains = document.querySelector("#root");

renderReacts(customReactElement, mains);

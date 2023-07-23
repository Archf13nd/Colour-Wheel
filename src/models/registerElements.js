// Add new element here. Nowhere else.
// The rest of the module handles attaching click event listener
const validElements = ['cw-complementary-btn', 'cw-triad-btn', 'cw-palette']

const getElement = (elementName) => {
  return document.getElementById(elementName)
}

const registerElements = () => {
  const elements = []
  validElements.forEach((el) => {
    const element = getElement(el)
    if (element) elements.push(element)
  })

  return elements
}

export default registerElements

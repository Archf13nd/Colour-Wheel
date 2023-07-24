import core from '../../src/index.js'
import createTemplate from './template.js'
export default () => {
  const template = document.createElement('template')
  template.innerHTML = createTemplate()
  customElements.define(
    'color-wheel',
    class extends HTMLElement {
      constructor() {
        super()

        let templateContent = template.content
        this.attachShadow({ mode: 'open' })

        this.shadowRoot.appendChild(templateContent.cloneNode(true))
      }
      connectedCallback() {
        core(this.shadowRoot)
      }
    }
  )
}

import core from '../../src/index.js'
import customSelect from './customSelect.js'
import styles from './styles.css'
import HTMLTemplate from './template.html'

export default () => {
  customElements.define(
    'color-wheel',
    class extends HTMLElement {
      constructor() {
        super()

        const template = document.createElement('template')
        template.innerHTML = HTMLTemplate

        let templateContent = template.content
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(templateContent)
        const styleEl = document.createElement('style')
        styleEl.textContent = styles
        this.shadowRoot.appendChild(styleEl)
      }
      connectedCallback() {
        customSelect(this.shadowRoot)
        core(this.shadowRoot)
      }
    }
  )
}

export default (root) => {
  const customSelect = root.getElementById('cw-select-custom')
  const nativeSelect = root.getElementById('cw-select-harmony')

  const handleSelectOpen = () => {
    customSelect.classList.add('isActive')
    customSelect.setAttribute('aria-hidden', false)
  }

  const handleSelectClose = () => {}

  nativeSelect.addEventListener('change', (e) => {
    const value = e.target.value
    customSelect.value = value
    customSelect.querySelector('div').innerText = value
  })

  root.addEventListener('click', (e) => {
    const isCustomCustomSelect = e.target.closest('#cw-select-custom')

    // return if target is not custom select element
    if (!isCustomCustomSelect) {
      handleSelectClose()
      return
    }
    handleSelectOpen()
    const option = e.target.closest('.select-custom__option')

    // return if target isn't select option
    if (!option) return

    const value = option.getAttribute('value')
    customSelect.value = value
    customSelect.querySelector('div').innerText = value
    nativeSelect.value = value
    nativeSelect.dispatchEvent(new Event('change', { view: window, bubbles: true }))
    customSelect.classList.remove('isActive')
  })

  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'COLOR-WHEEL') {
      customSelect.classList.remove('isActive')
    }
  })
}

export default (root) => {
  const customSelect = root.getElementById('cw-select-harmony')

  root.addEventListener('click', (e) => {
    const isCustomCustomSelect = e.target.closest('#cw-select-harmony')

    // return if target is not custom select element
    if (!isCustomCustomSelect) {
      customSelect.classList.remove('isActive')
      return
    }
    customSelect.classList.add('isActive')
    const option = e.target.closest('.select-custom__option')

    // return if target isn't select option
    if (!option) return

    const value = option.getAttribute('value')
    customSelect.value = value
    customSelect.querySelector('div').innerText = value
    customSelect.classList.remove('isActive')
  })

  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'COLOR-WHEEL') {
      customSelect.classList.remove('isActive')
    }
  })
}

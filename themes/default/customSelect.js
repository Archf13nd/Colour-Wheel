export default (root) => {
  const customSelect = root.getElementById('cw-select-custom')
  const nativeSelect = root.getElementById('cw-select-harmony')

  const handleSelectOpen = () => {
    customSelect.classList.add('isActive')
    customSelect.setAttribute('aria-hidden', false)
  }

  const handleSelectClose = () => {
    customSelect.classList.remove('isActive')
    customSelect.setAttribute('aria-hidden', true)
  }

  const handleValueChange = (newVal) => {
    nativeSelect.value = newVal
    nativeSelect.dispatchEvent(new Event('change', { view: window, bubbles: true }))
  }

  nativeSelect.addEventListener('change', (e) => {
    const newVal = e.target.value
    customSelect.value = newVal
    customSelect.querySelector('.select-custom__display-text').innerText = newVal
  })

  root.addEventListener('click', (e) => {
    const isTargetCustomSelect = e.target.closest('#cw-select-custom')
    // If click isn't on custom select, don't do anything
    if (!isTargetCustomSelect) {
      handleSelectClose()
      return
    }

    const isActive = customSelect.classList.contains('isActive')
    if (!isActive) {
      handleSelectOpen()
    } else {
      handleSelectClose()
    }
    // If target is target options get value of option and pass it onto handler function
    const isTargetOptions = e.target.closest('.select-custom__options')
    if (isTargetOptions) {
      const value = e.target.closest('.select-custom__option').getAttribute('value').toLowerCase()
      handleValueChange(value)
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'COLOR-WHEEL') {
      handleSelectClose()
    }
  })
}

// root.addEventListener('click', (e) => {
//   const isCustomCustomSelect = e.target.closest('#cw-select-custom')

//   // return if target is not custom select element
//   if (!isCustomCustomSelect) {
//     handleSelectClose()
//     return
//   }
//   handleSelectOpen()
//   const option = e.target.closest('.select-custom__option')

//   // return if target isn't select option
//   if (!option) return

//   const value = option.getAttribute('value')
//   customSelect.value = value
//   customSelect.querySelector('div').innerText = value
//   nativeSelect.value = value
//   nativeSelect.dispatchEvent(new Event('change', { view: window, bubbles: true }))
//   customSelect.classList.remove('isActive')
// })

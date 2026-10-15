function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${event.key}`
}

function displayUserInput(event) {
  const input = document.getElementById('textInput')
  const value = event && event.target && event.target.value !== undefined
    ? event.target.value
    : input.value
  document.getElementById('textInputDisplay').textContent = `You typed: ${value}`
}

function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  document.body.addEventListener('dblclick', resetBackgroundColor)

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput)
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
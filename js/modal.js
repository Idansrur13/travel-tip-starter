export function closeModal() {
  const bgModal = document.querySelector('.modal-bg')
  bgModal.style.opacity = 0
  bgModal.style.zIndex = -1
}

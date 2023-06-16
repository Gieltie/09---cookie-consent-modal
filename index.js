const modalBox = document.getElementById('modal')
const modalBoxBtn = document.getElementById('modal-close-btn')

setTimeout(() => {
    modalBox.style.display = 'inline'
}, 1500)


modalBoxBtn.addEventListener("click", () => {
    modalBox.style.display = 'none'
})

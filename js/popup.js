//Advertisement Popup

const closePopup = document.querySelectorAll('[data-close-button]');
const overlayPopup = document.getElementById('overlay');

closePopup.forEach(button => {
    button.addEventListener('click', () => {
        const closePopupButton = button.closest('.advertisement-popup');
        closeModal(closePopupButton);
    })
})

function closeModal(closePopupButton){
    if(closePopupButton == null)return;
    closePopupButton.classList.remove('popup-active');
    overlayPopup.classList.remove('popup-active');
}

//"Buy a drink" Popup
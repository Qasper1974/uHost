const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan .button");
const noButton = document.querySelector('.modal__action--negative')
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const openModal = () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', openModal)
}

backdrop.addEventListener('click', function() {
    closeModal;
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
    });
noButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
        mobileNav.style.display = 'block';
        backdrop.style.display = 'block';
})


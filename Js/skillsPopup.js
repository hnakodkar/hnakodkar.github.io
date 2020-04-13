const skillsButton = document.querySelector('.button');
const skillsPopup = document.querySelector('.skillsPopup-wrapper')
const skillsPopupClose = document.querySelector('.popup-close')


skillsButton.addEventListener('click', () =>{
    skillsPopup.style.display='block';
    
});

skillsPopupClose.addEventListener('click', () =>{
    skillsPopup.style.display='none';
});

skillsPopup.addEventListener('click', () =>{
    skillsPopup.style.display='none';
    
});
const myBio = document.querySelector('.bio');
const bioPopup = document.querySelector('.popup-wrapper')
const popupClose = document.querySelector('.popup-close')


myBio.addEventListener('click', () =>{
    bioPopup.style.display='block';
    
});

popupClose.addEventListener('click', () =>{
    bioPopup.style.display='none';
});
bioPopup.addEventListener('click', () =>{
    bioPopup.style.display='none';
    
});
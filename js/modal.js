const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');
//console.log(modalElem);

const openModal = () => {
    modalElem.classList.remove('hidden');
    document.body.style.position = 'fixed';
};

const closeModal = () => {
     modalElem.classList.add('hidden');
     document.body.style.position = '';
   //  console.log('good');
};

for (let i=0; i<moreElems.length; i++ ) { 
    moreElems[i].addEventListener('click', openModal); 
}



 modalElem.addEventListener('click', (event) => {
       const target = event.target;
      // console.log('ddd');
       if (target.classList.contains('overlay') ||
        target.classList.contains('modal__close')) {closeModal()};
    }) 



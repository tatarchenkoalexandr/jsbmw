const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub');

/*
for (let i=0; i<featureLinkElems.length; i++) {
    featureLinkElems[i].addEventListener('click', () => {
        featureSubElems[i].classList.toggle('hidden')
        featureLinkElems[i].classList.toggle('feature__link_active')
    })
}
*/

featureLinkElems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        featureLinkElems.forEach((nobut,i1) => {
            //удалить ненужные
            if (i1!=index) {nobut.classList.remove('feature__link_active')}
        });
        featureSubElems.forEach((nosub,i2) => {
            //удалить ненужные
            if (i2!=index) {nosub.classList.add('hidden')}
        });
        featureSubElems[index].classList.toggle('hidden');
        btn.classList.toggle('feature__link_active');
    }) 

})
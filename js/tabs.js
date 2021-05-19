const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const hDesignElems = document.querySelectorAll('[data-tabs-title]');
//console.log(hDesignElems);
for (const tab of tabsHandlerElems) {
    tab.addEventListener('click', () => {
        tabsHandlerElems.forEach(item =>{
            if (tab === item) {
                item.classList.add('design-list__item_active');
            } else {
                item.classList.remove('design-list__item_active');    
            }
        })
        tabsFieldElems.forEach(item => {
            if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden')
            } else {
                item.classList.add('hidden')
            }
        })
       /* чтоб не менять верстку
        hDesignElems.forEach(h => {
            h.classList.toggle('hidden')
        }) 
       */
      //вариант с модификацией index.html
        hDesignElems.forEach(tit => {
            if (tit.dataset.tabsTitle === tab.dataset.tabsHandler) {
                tit.classList.remove('hidden')
            } else {
                tit.classList.add('hidden')
            }
        })


    })
}
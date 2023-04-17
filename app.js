const active = document.querySelectorAll('.faq');
const buttonShow = document.querySelectorAll('.faq__question');

buttonShow.forEach(btn => {
    btn.addEventListener('click', ()=> {

        active.forEach(page => {
            page.classList.remove('active')
        })

        const header = btn.parentElement;
        header.classList.add('active');
    })
})

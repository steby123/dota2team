const btn = document.querySelector('.read-more-btn1');
const text = document.querySelector('.card__read-more');
const cardHolder = document.querySelector('.card-holder');

cardHolder.addEventListener('click', e =>{
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn1');

    if (!isReadMoreBtn)
    return;

    const currentText = e.target.parentNode.querySelector('.card__read-more');
    
    currentText.classList.toggle('card__read-more--open');

    current.textContent = current.textContent.includes('Read more...') ? 'Read Less...' : 'Read More...'
})
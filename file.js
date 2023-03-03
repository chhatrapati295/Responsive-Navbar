const openBtn = document.querySelector('.open')
const closeBtn =document.querySelector('.close')
const slide = document.querySelector('.slide')

openBtn.addEventListener('click',()=>{
    slide.classList.add('active')
})
closeBtn.addEventListener('click',()=>{
    slide.classList.remove('active')
})
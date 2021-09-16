const titles = document.querySelectorAll('.text dt')
const texts = document.querySelectorAll('.text dd')


titles.forEach((title) => {
  title.addEventListener('click', ()=> {
    title.classList.toggle('ativo')
    title.nextElementSibling.classList.toggle('ativo')
  })
})
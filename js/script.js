let div = document.querySelector('#div')
let img1 = document.querySelector('.img_1')
let img2 = document.querySelector('.img_2')
img2.style.display = 'none'

img1.addEventListener('mouseover', () => {
    img1.style.display = 'none'
    img2.style.display = 'block'
})

img2.addEventListener('mouseout', () => {
    img1.style.display = 'block'
    img2.style.display = 'none'
})


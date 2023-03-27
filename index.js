const skrollTopButton = document.getElementById('skrollTopButton')
const menu = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
const home = document.getElementById('home')
const aboutMe = document.getElementById('aboutMe')
const portfolio = document.getElementById('portfolioLink')
const contact = document.getElementById('contact')
const title = document.getElementById('title')
const titleInfo = ['Landing Foodieland', 'Sprav.uz']
const portfolioImg = document.getElementById('portfolio-img')
const rightSide = document.getElementById('rightSide')
const leftSide = document.getElementById('leftSide')
const imgs = ['./assets/images/portfolio-1.png', './assets/images/portfolio-2.png'];
const link = document.getElementById('link')
const linkInfo = ['https://foodieland-portfolio.netlify.app/', 'https://bakhtjan05.github.io/sprav.uz/']

let active = 0;


window.addEventListener('scroll', () => {
    skrollTopButton.classList.toggle('active', window.scrollY > 500)
})

skrollTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

const openSidebar = () => {
    sidebar.style.display = 'flex'


}

const closeSidebar = () => {
    sidebar.style.display = 'none'
}

const toRight = () => {
    active++;
    if(active >= imgs.length) active = 0
    portfolioImg.src = imgs[active]
    title.innerHTML = titleInfo[active]
    link.href = linkInfo[active]

}

const toLeft = () => {
    active--;
    if(active = -1) active = 0
    portfolioImg.src = imgs[active]
    title.innerHTML = titleInfo[active]
    link.href = linkInfo[active]


}
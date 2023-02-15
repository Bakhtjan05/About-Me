const skrollTopButton = document.getElementById('skrollTopButton')
const menu = document.getElementById('menu')
const sidebar = document.getElementById('sidebar')
const home = document.getElementById('home')
const aboutMe = document.getElementById('aboutMe')
const portfolio = document.getElementById('portfolioLink')
const contact = document.getElementById('contact')





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

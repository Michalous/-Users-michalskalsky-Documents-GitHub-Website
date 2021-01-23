// day of week
const day = document.querySelector('#day')
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var newDate = new Date()
var dayOfWeek = newDate.getDay()
var dayDate = newDate.getDate()
var monthOfYear = newDate.getMonth()


document.getElementById('day').innerHTML = daysOfWeek[dayOfWeek]
document.getElementById('month').innerHTML = monthsOfYear[monthOfYear]
document.getElementById('date').innerHTML = dayDate



// mobile navbar
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
    open_btn.style.display = 'none'
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
    open_btn.style.display = 'block'
})

// sticky navbar
const navi = document.querySelectorAll('.navi')
const scrolled = document.querySelector('#scrolled')
window.addEventListener('scroll', fixNav)


function fixNav() {
    if(window.scrollY > navi[0].offsetHeight +250) {
        navi.forEach(function(elem) { 
            elem.classList.add('active')
            scrolled.classList.add('active')
        })
    } else {
        navi.forEach(elem => elem.classList.remove('active'))
        scrolled.classList.remove('active')
    }
}

// Domestic box slide in
const dwcbox = document.querySelector('.dwcbox')
setInterval(function() {dwcbox.classList.add('show')}, 300)


// Image carousel
const slide = document.querySelectorAll('.slide')
let idx = 0

setInterval(slider, 6000)

function slider() {
    setInterval(function() {slide[idx].classList.add('active')
    console.log('added', idx)}, 3000)
    slide[idx].classList.remove('active')
    console.log('removed', idx)
    if (idx >=2) {
        idx = 0
    } else {
        idx++
        
    }
}


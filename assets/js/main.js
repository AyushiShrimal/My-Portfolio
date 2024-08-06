const navMenu=document.getElementById('nav-menu'),
navToggle= document.getElementById('nav-toggle'),
navClose= document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink= document.querySelectorAll('.nav__link')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction ))

const blurHeader =()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('scroll-header')
                       :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

 const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_bstu8x4','template_of1s2ut','#contact-form','1D-Aasm5_E3LVeARQ')
    .then(()=>{
         
        contactMessage.textContent = 'Message sent successfully..'

        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, ()=>{
        contactMessage.textContent = 'Message not sent (service error)'
    })
 }
 contactForm.addEventListener('submit', sendEmail)

 const scrollUp =()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
 }
 window.addEventListener('scroll', scrollUp)

 const scrollActive=()=>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

       if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
       }else{
        sectionsClass.classList.remove('active-link')
       }      
    }) 
}
window.addEventListener('scroll', scrollActive)


const  sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})
sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`,{delay:600})
sr.reveal(`.home__scroll`,{delay:800})
sr.reveal(`.home__card, .services__card`,{interval:100})
sr.reveal(`.home__content`,{origin:'right'})
sr.reveal(`.home__img`,{origin:'left'})

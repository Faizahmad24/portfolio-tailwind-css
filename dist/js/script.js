// const { check } = require("prettier")

// Hamburger
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Navbar Fixed
window.onscroll= function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    const toTop = document.getElementById('to-top');

    if (window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// Click everywhere
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Dark Mode
const darkToggle = document.getElementById('dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

// move toogle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }

//   Send Form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyZZ97FyP5RYijR7yQLT6anv4k990t1T32R4Z21mOPJ_Y6A7F2A52AbiJVGaaA7UicJqg/exec'
  const form = document.forms['faiz-contact-form']
  const btnSend = document.querySelector('.btn-kirim')
  const btnLoading = document.querySelector('.btn-loading')
  const myAlert = document.querySelector('.my-alert')

  form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika submit diklik
    // tampilkan tombol loading dan hilangkan tombol kirim

    btnLoading.classList.remove('hidden')
    btnLoading.classList.add('flex')
    btnSend.classList.toggle('hidden')
    // btnSend.classList.add('flex')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // menampilkan tobol kirim dan menghilangkan tombol loading
        btnLoading.classList.remove('flex')
        btnLoading.classList.add('hidden')
        btnSend.classList.toggle('hidden')

        // Menampilkan alert
        myAlert.classList.toggle('hidden')

        // form reset
        form.reset();
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })

  const closeAlert = document.querySelector('.close');
  closeAlert.addEventListener('click', function(){
    myAlert.classList.add('hidden')
  })

  
  gsap.registerPlugin(TextPlugin)
  gsap.to('.show-text', {duration: 5, text: 'Software Engineer | Web Developer | Front End Web Developer'})
  

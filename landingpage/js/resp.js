burger= document.querySelector('.burger');
navbar= document.querySelector('.navbar');
rightnav= document.querySelector('.rightnav');
navlist= document.querySelector('.navlist');

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('vclass');
    rightnav.classList.toggle('vclass');
    navbar.classList.toggle('hnav');
})

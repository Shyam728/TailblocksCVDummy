let contact = document.querySelector('#contact');
let hiddenContact = contact.style.display = 'none';

const heroLink = document.querySelector('#hero-link')
const blogLink = document.querySelector('#blog-link')
const contactLink = document.querySelector("#contact-link");

const hero = document.querySelector('#hero');
const blog = document.querySelector('#blog');


// Live Contact onClick 

contactLink.addEventListener('click', function () {
    hero.style.display = 'none';
    blog.style.display = 'none';
    contact.style.display = 'block';
})

blogLink.addEventListener('click', () => {

    hero.style.display = 'block';
    blog.style.display = 'block';
    contact.style.display = 'none';
})
heroLink.addEventListener('click', function () {

    hero.style.display = 'block';
    blog.style.display = 'block';
    contact.style.display = 'none';
});


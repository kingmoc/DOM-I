const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Updating the NavMenu
let navMenu = document.querySelectorAll('a');

navMenu.forEach((value, index) => value.textContent = siteContent["nav"][`nav-item-${index+1}`])

// Updating CTA

let ctaHeader = document.querySelector('.cta-text h1')
ctaHeader.textContent = siteContent['cta']['h1']

let buttonText = document.querySelector('.cta-text button')
buttonText.textContent = siteContent['cta']['button']

// Updating top Content Headers

let topTextHeaders = document.querySelectorAll('.top-content .text-content h4')
topTextHeaders[0].textContent = siteContent['main-content']['features-h4']
topTextHeaders[1].textContent = siteContent['main-content']['about-h4']

// Updating top Content  Text
let topText = document.querySelectorAll('.top-content .text-content p')
topText[0].textContent = siteContent['main-content']['features-content']
topText[1].textContent = siteContent['main-content']['about-content']

// Updating Boittom Content Headers
let bottomTextHeaders = document.querySelectorAll('.bottom-content .text-content h4')
bottomTextHeaders[0].textContent = siteContent['main-content']['services-h4']
bottomTextHeaders[1].textContent = siteContent['main-content']['product-h4']
bottomTextHeaders[2].textContent = siteContent['main-content']['vision-h4']

// Updating Bottom Content  Text
let bottomText = document.querySelectorAll('.bottom-content .text-content p')
bottomText[0].textContent = siteContent['main-content']['services-content']
bottomText[1].textContent = siteContent['main-content']['product-content']
bottomText[2].textContent = siteContent['main-content']['vision-content']

//  Updating Contact
let contactInfoHeader = document.querySelector('.contact h4')
contactInfoHeader.textContent = siteContent['contact']['contact-h4']

let contactInfoPar = document.querySelectorAll('.contact p')
contactInfoPar[0].textContent = siteContent['contact']['address']
contactInfoPar[1].textContent = siteContent['contact']['phone']
contactInfoPar[2].textContent = siteContent['contact']['email']

//  Updating Footer
let footerInfo = document.querySelector('footer p')
footerInfo.textContent = siteContent['footer']['copyright']

// Updating Nav Item Color
let navTextColor = document.querySelectorAll('header nav a')
navTextColor.forEach((value, index) => value.style.color = "green")

// Adding Items to Nav Menu
let nav = document.querySelector('nav')

let newNavItem = document.createElement('a')
newNavItem.textContent = 'Home'
newNavItem.href = '#'
newNavItem.style.color = 'green'
nav.prepend(newNavItem)

let newNavItemTwo = document.createElement('a')
newNavItemTwo.textContent = 'Blog'
newNavItemTwo.href = '#'
newNavItemTwo.style.color = 'green'
nav.appendChild(newNavItemTwo)


// console.log(newNavItem)


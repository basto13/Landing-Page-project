/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


function createNavbar(sections, navigation) {
    for (const section of sections) {
        const sectionName = section.getAttribute("data-nav");
        const sectionLink = section.getAttribute("id");
        const item = document.createElement("li");
        // item.innerHTML = `<li><a class="menu__link" href="#${sectionLink}">${sectionName}</a></li>`;
        item.innerHTML = `<li><a class="menu__link" sectionLink="${sectionLink}">${sectionName}</a></li>`;
        item.addEventListener("click", findClick);
        navigation.appendChild(item);
    }
}
createNavbar(sections, navigation);

//add smooth scroll feature when clicked on the navbar section
function findClick(event) {
    event.preventDefault();
    if (event.target.getAttribute("sectionLink")) {
        document
            .getElementById(`${event.target.getAttribute("sectionLink")}`)
            .scrollIntoView({ behavior: 'smooth' });
    }
}

//function to add active class to section
function addActiveClass(section) {
    section.classList.add('your-active-class')
}

//function to remove active class to section
function removeActiveClass(section) {
    section.classList.remove('your-active-class')
}

// function to change active status of the section
function changeActiveStatus(sections) {
    sections.forEach((section) => {
        // check-up if section is in the view port
        var isInViewportSection = section.getBoundingClientRect();
        if (isInViewportSection.top <= 150 && isInViewportSection.bottom >= 150) {
            addActiveClass(section);
        } else {
            removeActiveClass(section);
        }
    });
}

window.addEventListener('scroll', () => changeActiveStatus(sections));


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


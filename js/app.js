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

//add smooth scroll feature

function findClick(event) {
    event.preventDefault();
    if (event.target.getAttribute("sectionLink")) {
        document
            .getElementById(`${event.target.getAttribute("sectionLink")}`)
            .scrollIntoView({ behavior: 'smooth' });
    }
}

// get function to check if section is in the view port

var isInViewport = function (section) {
    var bounding = section.getBoundingClientRect();
    console.log(bounding.top, section)
    return (
        bounding.top >= 100 &&
        bounding.top < (window.innerHeight - 100) 
        &&
        bounding.bottom >= 200
    );
};

// function to change active status of the section

const changeActiveStatus = (sections) => {
    for (const section of sections) {
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            console.log(section, "section activated");
        } else {
            section.classList.remove('your-active-class');
            console.log(section, "section deactivated");
        }
    }
}

//function to implement the change of active status of the section

window.addEventListener('scroll', () => changeActiveStatus(sections));


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


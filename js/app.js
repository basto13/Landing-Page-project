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
function findClick(event) {
    event.preventDefault();
    if (event.target.getAttribute("sectionLink")) {
        document
            .getElementById(`${event.target.getAttribute("sectionLink")}`)
            .scrollIntoView({ behavior: 'smooth' });
    }
}

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




// Add class 'active' to section when near top of viewport

// get function to check if section is in the view port

var isInViewport = function (section) {
    var bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// function to change active status of the section

const changeActiveStatus = (sections) => {
    for (const section of sections) {
        if (isInViewport(section)) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    }
}

//function to implement the change of active status of the section

window.addEventListener('scroll', () => changeActiveStatus(sections));


// Scroll to anchor ID using scrollTO event



//     // findClick('click');

//     const scrolling = () => {
//         const links = document.querySelectorAll('.navbar__menu a');
//         links.forEach(link => {
//             link.addEventListener('click', () => {
//                 for (i = 0; i < sections; i++) {
//                     sections[i].addEventListener('click', sectionScroll(link))
//                 }
//             })
//         })

//     }
// }
// window.addEventListener('click', () => scrolling());

// function scrollToElement(event){
//     if(event.target.nodeName === 'A'){
//         const sectionId = event.target.getAttribute('data-id');
//         const section = document.getElementById(sectionId);
//         section.scrollIntoView({behavior: "smooth"});
//     }
// }

// const navBarList = document.getElementById('navbar__list')
// navBarList.addEventListener('click', function(event){
//     scrollToElement(event)
// })

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


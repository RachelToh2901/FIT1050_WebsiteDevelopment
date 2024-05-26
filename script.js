// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            

// This function is to set "Main Course" as default when document load
// It will automatically select (click) the "Main Course" item
$(document).ready(function() {
    $('.cs-item-services[data-filter="main-course"]').trigger('click');
})

// Show and hide photos and texts according to the button selected
$('.cs-item-services').on('click', function() {
    var category = $(this).data('filter');
    
    // Check for each item in cs-image show only the same category photos
    $('.cs-image').each(function() {
        if ($(this).data('filter') === category) {
            $(this).show(400);
        } else {
            $(this).hide();
        }
    });

    // Check for each item in cs-sub-title show only the same category text
    $('.cs-sub-title').each(function() {
        if ($(this).data('filter') === category){
            $(this).show(300);
        } else {
            $(this).hide();
        }
    })
});

// Reference: https://medium.com/@sharnellgrant/how-i-created-a-sort-button-in-my-javascript-project-eb7a6b93148c
document.addEventListener("DOMContentLoaded", function() {
    const sortCriteria = document.getElementById("sort-criteria");
    const sortOrder = document.getElementById("sort-order");
    const reviewsList = document.querySelector("#reviews-1672 .cs-card-group");

    sortReviews(sortCriteria.value, sortOrder.value);

    sortCriteria.addEventListener("click", function() {
        sortReviews(sortCriteria.value, sortOrder.value);
    });

    sortOrder.addEventListener("click", function() {
        sortReviews(sortCriteria.value, sortOrder.value);
    });

    function sortReviews(criteria, order) {
        const reviews = Array.from(reviewsList.children);

        reviews.sort((a, b) => {
            let comparison = 0;

            if (criteria === "stars") {
                comparison = parseInt(a.dataset.stars) - parseInt(b.dataset.stars);
            } else if (criteria === "date") {
                comparison = new Date(a.dataset.date) - new Date(b.dataset.date);
            }

            return order === "asc" ? comparison : -comparison;
        });

        reviews.forEach(review => reviewsList.appendChild(review));
    }
});








    
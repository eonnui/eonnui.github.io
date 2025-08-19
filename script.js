// This file contains the JavaScript for the portfolio website's interactive elements.

document.addEventListener('DOMContentLoaded', () => {

    // --- Modal Functionality ---

    // Get the modal element
    const modal = document.getElementById("project-modal");

    // Get the <span> element that closes the modal
    const closeBtn = document.getElementsByClassName("close-btn")[0];

    // Get all elements with the class 'view-project-btn'
    const viewProjectBtns = document.querySelectorAll(".view-project-btn");

    // Function to open the modal and populate with project details
    function openModal(title, description) {
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Add click event listeners to all 'View Project' buttons
    viewProjectBtns.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            openModal(title, description);
        });
    });


    // --- Navigation Functionality ---

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Function to handle the mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    // Function to close the mobile menu after clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    });

    // Function to add 'active' class to nav links based on scroll position
    const addActiveClass = () => {
        let current = '';

        sections.forEach(section => {
            // Get the top position of the section relative to the viewport
            const sectionTop = section.offsetTop;
            // A small offset of 150px is used to activate the link slightly before the section is fully in view
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-emerald-400'); // Remove active color
            link.classList.add('text-white'); // Add default color

            if (link.href.includes(current)) {
                link.classList.remove('text-white');
                link.classList.add('text-emerald-400'); // Add active color
            }
        });
    };

    // Listen for scroll events to update the active navigation link
    window.addEventListener('scroll', addActiveClass);

    // Initial call to set the active link on page load
    addActiveClass();
});

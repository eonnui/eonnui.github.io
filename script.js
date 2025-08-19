document.addEventListener('DOMContentLoaded', () => {


    const modal = document.getElementById("project-modal");

    const closeBtn = document.getElementsByClassName("close-btn")[0];

    const viewProjectBtns = document.querySelectorAll(".view-project-btn");

    function openModal(title, description) {
        document.getElementById("modal-title").innerText = title;
        document.getElementById("modal-description").innerText = description;
        modal.style.display = "block";
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    viewProjectBtns.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const title = this.getAttribute("data-title");
            const description = this.getAttribute("data-description");
            openModal(title, description);
        });
    });



    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
        });
    });

    const addActiveClass = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-emerald-400'); 
            link.classList.add('text-white');

            if (link.href.includes(current)) {
                link.classList.remove('text-white');
                link.classList.add('text-emerald-400'); 
            }
        });
    };

    window.addEventListener('scroll', addActiveClass);

    addActiveClass();
});


// PP Fitness Institute | Site interaction scripts
// Handles programme search, form validation, modals, lightbox, animations, and interactive elements.

// ===============================
// 1. PROGRAMME SEARCH FILTER
// ===============================
const searchInput = document.getElementById("programme-search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const programmes = document.querySelectorAll(".programme-item");

        programmes.forEach(function (item) {
            const text = item.textContent.toLowerCase();

            if (text.includes(filter)) {
                item.style.display = "block";
                item.classList.add("fade-in");
            } else {
                item.style.display = "none";
            }
        });
    });
}

// ===============================
// 2. FORM VALIDATION (ENQUIRY + CONTACT)
// ===============================
const forms = document.querySelectorAll("form");

forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
        let valid = true;

        const requiredFields = form.querySelectorAll("[required]");

        requiredFields.forEach(function (field) {
            if (field.value.trim() === "") {
                valid = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "1px solid #ccc";
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill in all required fields.");
        } else {
            alert("Form submitted successfully!");
            // Reset form after successful submission
            form.reset();
        }
    });
});

// ===============================
// 3. SIMPLE NAV ACTIVE LINK
// ===============================
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.background = "#ff6600";
        link.style.borderRadius = "5px";
        link.style.padding = "0.5rem";
    }
});

// ===============================
// 4. MODAL FUNCTIONALITY
// ===============================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
        modal.classList.add("fade-in");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("fade-in");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

// Close modal when clicking outside content
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});

// ===============================
// 5. LIGHTBOX GALLERY
// ===============================
function initLightbox() {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");
    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");
    let currentIndex = 0;

    if (!lightbox || !galleryImages.length) return;

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", function () {
            currentIndex = index;
            lightboxImg.src = this.src;
            lightbox.style.display = "flex";
            lightbox.classList.add("fade-in");
        });
    });

    lightboxClose.addEventListener("click", () => {
        lightbox.classList.remove("fade-in");
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 300);
    });

    lightboxPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    });

    lightboxNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentIndex].src;
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.classList.remove("fade-in");
            setTimeout(() => {
                lightbox.style.display = "none";
            }, 300);
        }
    });
}

initLightbox();

// ===============================
// 6. TABS/ACCORDION FUNCTIONALITY
// ===============================
function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");
            
            // Hide all tabs
            tabContents.forEach(content => {
                content.classList.remove("active");
                content.style.display = "none";
            });

            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Show selected tab
            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                activeTab.style.display = "block";
                activeTab.classList.add("active");
                this.classList.add("active");
            }
        });
    });
}

initTabs();

function initAccordion() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const accordionBody = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            // Close all accordion items
            document.querySelectorAll(".accordion-header").forEach(h => {
                h.classList.remove("active");
                h.nextElementSibling.style.display = "none";
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                this.classList.add("active");
                accordionBody.style.display = "block";
                accordionBody.classList.add("fade-in");
            }
        });
    });
}

initAccordion();

// ===============================
// 7. SMOOTH SCROLLING
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#") {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

// ===============================
// 8. SCROLL ANIMATIONS
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(".programme-item").forEach(item => {
    observer.observe(item);
});

// ===============================
// 9. MOBILE MENU TOGGLE
// ===============================
function initMobileMenu() {
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            this.classList.toggle("active");
        });
    }
}

initMobileMenu();

// ===============================
// 10. FORM FIELD VALIDATION HELPERS
// ===============================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// Add real-time validation for email fields
document.querySelectorAll("input[type='email']").forEach(input => {
    input.addEventListener("blur", function () {
        if (this.value && !validateEmail(this.value)) {
            this.style.border = "2px solid red";
        } else {
            this.style.border = "1px solid #ccc";
        }
    });
});

// ===============================
// 11. PAGE LOAD ANIMATION
// ===============================
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
    console.log("PP Fitness Institute website loaded successfully");
});
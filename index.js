

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    
    function closeActiveSections() {
        const activeSections = document.querySelectorAll('.overlay.active');
        activeSections.forEach(section => {
            section.classList.remove('active');
        });
    }

    document.getElementById("planets-info-btn").addEventListener("click", function() {
        closeActiveSections(); // Close any open section
        menuToggle.checked = false; // Hide menu
        document.getElementById("planets-info").classList.add("active");
    });

    document.getElementById("creator-btn").addEventListener("click", function() {
        closeActiveSections(); // Close any open section
        menuToggle.checked = false; // Close menu
        document.getElementById("creator-section").classList.add("active");
    });

    document.getElementById("exit-planets-info").addEventListener("click", function() {
        document.getElementById("planets-info").classList.remove("active");
    });

    document.getElementById("exit-creator").addEventListener("click", function() {
        document.getElementById("creator-section").classList.remove("active");
    });
});

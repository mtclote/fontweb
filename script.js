document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault();
            let menu = this.nextElementSibling;
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    // Đóng menu khi click bên ngoài
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});

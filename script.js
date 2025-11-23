function showSection(sectionId) {
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(this.getAttribute("href").substring(1));
    });
});

showSection("home");

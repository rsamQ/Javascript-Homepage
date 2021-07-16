var MenuItems = [
    {
        title: 'About me',
        url: '#about'
    },
    {
        title: 'Lebenslauf',
        url: '#cv'
    },
    {
        title: 'Skills',
        url: '#skills'
    },
    {
        title: 'Kontakt',
        url: '#contact'
    }
];
window.onload = function () {
    var app = document.querySelector("#menu");
    app.innerHTML = MenuItems.map(function (item) {
        return "<li><a href=" + item.url + ">" + item.title + "</a></li>";
    }).join('');
};
function toggleMobileMenu(menuBtn) {
    var mobileMenu = document.getElementById("menu");
    if (menuBtn.className === "fas fa-times") {
        menuBtn.className = "fas fa-bars";
        mobileMenu.classList.toggle("active");
    }
    else {
        menuBtn.className = "fas fa-times";
        mobileMenu.classList.toggle("active");
    }
}

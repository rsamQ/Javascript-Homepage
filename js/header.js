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
        return "<li class=\"navbar-link\"><a class=\"nav-links\" href=" + item.url + ">" + item.title + "</a></li>";
    }).join('');
};
function toggleMobileMenu() {
    var element = document.getElementById("toggle-btn");
    element.classList.toggle("show");
}

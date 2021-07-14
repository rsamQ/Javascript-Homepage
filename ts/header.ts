interface Items {
    title: string,
    url: string
}

type itemsType = Items[];

var MenuItems : itemsType = [
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
        url: '#contact',
    }
]

window.onload = () => {
    var app = document.querySelector("#menu") as HTMLElement;
    
    app.innerHTML = MenuItems.map((item) : string => {
        return `<li class="navbar-link"><a class="nav-links" href=${item.url}>${item.title}</a></li>`;
    }).join('');

}

function toggleMobileMenu() : void { 
    var element = document.getElementById("toggle-btn") as HTMLElement;
    element.classList.toggle("show");
}
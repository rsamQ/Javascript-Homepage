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
        return `<li><a href=${item.url}>${item.title}</a></li>`;
    }).join('');

}

function toggleMobileMenu(menuBtn : HTMLElement) : void { 
    var mobileMenu = document.getElementById("menu") as HTMLElement;
    if(menuBtn.className === "fas fa-times"){
        menuBtn.className = "fas fa-bars";
        mobileMenu.classList.toggle("active");
    }else{
        menuBtn.className = "fas fa-times";
        mobileMenu.classList.toggle("active");
    }
}
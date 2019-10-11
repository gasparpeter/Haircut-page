let manOption = document.getElementById('manOption');
let womanOption = document.getElementById('womanOption');

let home = document.getElementById('home');

let mansContainer = document.getElementById('mans');
let womansContainer = document.getElementById('womans');

let logo = document.getElementById('logo');

logo.addEventListener('click', function () {
   location.reload();
});

home.addEventListener('click', function () {
    location.reload();
});

function womans() {
    mansContainer.style.display = 'none';
    womansContainer.style.display = 'block';
    clearActiveMenuIcon();
    womanOption.classList.add('active');
}

function mans() {
    womansContainer.style.display = 'none';
    mansContainer.style.display = 'block';
    clearActiveMenuIcon();
    manOption.classList.add('active');
}

manOption.addEventListener('click', mans);
womanOption.addEventListener('click', womans);

function clearActiveMenuIcon() {
    const items = document.getElementsByClassName('menuIcon');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active')
    }
}
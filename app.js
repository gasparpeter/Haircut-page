let manOption = document.getElementById('manOption');
let womanOption = document.getElementById('womanOption');

let mansContainer = document.getElementById('mans');
let womansContainer = document.getElementById('womans');

function womans() {
    mansContainer.style.display = 'none';
    womansContainer.style.display = 'block';
}

function mans() {
    womansContainer.style.display = 'none';
    mansContainer.style.display = 'block';
}

manOption.addEventListener('click', mans);
womanOption.addEventListener('click', womans);

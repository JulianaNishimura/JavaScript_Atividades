function configurar() {
    let btn = document.getElementById("btnDropdown");
    if (btn) {
        btn.addEventListener('click', mostrardropdown);
    }
}

function mostrardropdown() {
    let dropdown = document.getElementById('menuDropdown');
    if (dropdown) {
        dropdown.classList.toggle('exibir');
    }
}

document.addEventListener('DOMContentLoaded', configurar);

//sweetalert
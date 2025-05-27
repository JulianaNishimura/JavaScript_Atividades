function configurar() {
    let btn = document.getElementById("btnDropdown");
    if (btn) {
        btn.addEventListener('click', mostrardropdown);
        document.addEventListener('click', fechardropdown);
    }
}

function mostrardropdown() {
    let dropdown = document.getElementById('menuDropdown');
    if (dropdown) {
        dropdown.classList.toggle('exibir');
    }
}

function fechardropdown(event) {
    let dropdown = document.getElementById('menuDropdown');
    let btn = document.getElementById('btnDropdown');
    if(btn){
        if (dropdown && !dropdown.contains(event.target) && !btn.contains(event.target)) {
            dropdown.classList.remove('exibir');
        }
    }
}

document.addEventListener('DOMContentLoaded', configurar);

//sweetalert
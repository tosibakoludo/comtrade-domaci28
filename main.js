var brPoseta = parseInt(uzmiIzLS());

function uzmiIzLS() {
    var stari = parseInt(localStorage.getItem("brojac"));
    if (isNaN(stari)) {
        localStorage.setItem("brojac", 1);
        return 1;
    } else {
        var novi = stari + 1;
        localStorage.setItem("brojac", novi);
        return novi;
    }
}

if (brPoseta > 2) {
    alert("Welcome back!");

    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    if (username != null) {
        let acUser = confirm("Do you want me to fill your username?");
        if (acUser) {
            document.getElementById("user").value = username;
        }
    }

    if (password != null) {
        let acPass = confirm("Do you want me to fill your password?");
        if (acPass) {
            document.getElementById("pass").value = password;
        }
    }
} else {
    alert("Welcome for the first time!")
}

const login = document.getElementById("login").addEventListener("click", ulogujSe);

function ulogujSe() {
    if (localStorage.getItem("username") != document.getElementById("user").value) {
        localStorage.setItem("username", document.getElementById("user").value);
    }
    if (localStorage.getItem("password") != document.getElementById("pass").value) {
        localStorage.setItem("password", document.getElementById("pass").value);
    }
}

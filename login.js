// ================================
// ELEMENTOS DEL FORMULARIO
// ================================

const formulario = document.getElementById("loginForm");

const usuario = document.getElementById("usuario");

const password = document.getElementById("password");

const mensaje = document.getElementById("mensaje");

const btnMostrar = document.getElementById("btnMostrar");


// ================================
// MOSTRAR / OCULTAR CONTRASEÑA
// ================================

btnMostrar.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        btnMostrar.textContent = "🙈";

    } else {

        password.type = "password";

        btnMostrar.textContent = "👁";

    }

});


// ================================
// LOGIN
// ================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    const usuarioIngresado = usuario.value.trim();

    const passwordIngresada = password.value.trim();


    // Limpiar mensaje anterior

    mensaje.textContent = "";


    // ================================
    // VALIDAR CAMPOS VACÍOS
    // ================================

    if (
        usuarioIngresado === "" ||
        passwordIngresada === ""
    ) {

        mensaje.textContent =
            "Complete todos los campos.";

        mensaje.style.color = "#dc2626";

        return;
    }


    // ================================
    // VALIDACIÓN TEMPORAL
    // ================================
    //
    // Esto posteriormente será reemplazado
    // por la autenticación mediante Java,
    // MVC, Singleton y MySQL.
    //

    if (
        usuarioIngresado === "admin" &&
        passwordIngresada === "123456"
    ) {

        mensaje.textContent =
            "Inicio de sesión correcto.";

        mensaje.style.color = "#16a34a";


        // Guardamos temporalmente el usuario

        sessionStorage.setItem(
            "usuario",
            usuarioIngresado
        );


        // Ir al panel

        setTimeout(function () {

            window.location.href = "panel.html";

        }, 800);


    } else {

        mensaje.textContent =
            "Usuario o contraseña incorrectos.";

        mensaje.style.color = "#dc2626";

    }

});

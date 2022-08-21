addEventListener('submit', (event) => {
    event.preventDefault();
});
const datos = JSON.parse(localStorage.getItem('registros'));
const entrar = () => {
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;
    console.log('asdasds');
    let llave = false;
    let resultados = datos.map((x) => {
        if (usuario == x.usuario && pass == x.pass) {
            llave = true;
            return;
        }
    })
    console.log(datos);
    if (llave) {
        alert('existe')
        window.location.href = "./taskproject/index.html";
    }
}
const registrarse = () => {
    const usuario = document.getElementById('usuarioRegistro').value;
    const pass = document.getElementById('passRegistro').value;
    // Obtener el valor de una cadena guardada en formato JSON
    let registro = {
        usuario,
        pass
    };

    if (localStorage.getItem('registros') === null) {
        let registros = [];
        registros.push(registro);
        localStorage.setItem('registros', JSON.stringify(registros));
    } else {
        let registros = JSON.parse(localStorage.getItem('registros'));
        registros.push(registro);
        localStorage.setItem('registros', JSON.stringify(registros));
    }


}
addEventListener('submit', (event) => {
    event.preventDefault();
});
const datos = JSON.parse(localStorage.getItem('registros'));
const entrar = () => {
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;
    let llave = false;
    if (datos) {
        let resultados = datos.map((x) => {
            if (usuario == x.usuario && pass == x.pass) {
                llave = true;
                return;
            }
        })
        if (llave) {
            alert('Usuarios encontrado')
            window.location.href = "./taskproject/index.html";
        } else {
            alert('Usuarios no encontrado')
        }
    } else {
        alert('No existen usuarios creados');
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
addEventListener('submit', (event) => {
    event.preventDefault();
});
const datos = [{ usuario: 'fidel', pass: 'fidel' }]
const entrar = () => {
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    let resultados = datos.map((x) => {
        if (usuario == x.usuario && pass == x.pass) {
            return true;
        }
    })
    if (resultados[0]) {
        window.location.href = "./taskproject/index.html";
    }
}

const welcome = () => {

    name = document.getElementById('nombre').value;
   gender = document.getElementById('genero').value;

   gender > 1 ? console.log(`Bienvenida ${name}`) : console.log(`Bienvenido ${name}`)
}

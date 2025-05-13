const InicioSesion = document.getElementById('InicioSesion');
const mensaje = document.getElementById('mensaje');

InicioSesion.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
     
  
    const response = await fetch(`http://localhost:3000/api/loginJJM`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert(' Tu mejor amigo en casa: Bienvenido')
      window.location = "main.html"
    } else{
       document.getElementById("mensaje").innerText = "Contraseña o Correo Incorrectos ✖️";
    }
  } catch (err) {
    alert('Server ERR_', err)
  }
});
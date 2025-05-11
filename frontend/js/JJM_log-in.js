const InicioSesion = document.getElementById('InicioSesion');
const mensaje = document.getElementById('mensaje');

InicioSesion.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
     const host = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "localhost"
      : "192.168.1.106"; 
  
    const response = await fetch(`http://${host}:3000/api/loginJJM`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Bienvenido')
      window.location = "main.html"
    } else{
       document.getElementById("mensaje").innerText = "Contraseña o Correo erroneos ✖️";
    }
  } catch (err) {
    alert('Server ERR_', err)
  }
});
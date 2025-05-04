document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
     alert("00q")
    try {
      const response = await fetch("http://localhost:3000/api/loginJJM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Aquí puedes guardar el token y redirigir
        localStorage.setItem("token", data.token);
        document.getElementById("mensaje").innerText = "Login exitoso";
        window.location.href = "main.html"; // Cambia según tu página destino
      } else {
        document.getElementById("mensaje").innerText = data.message;
      }
    } catch (err) {
      document.getElementById("mensaje").innerText = "Error al conectar con el servidor";
      console.error(err);
    }
  });
  
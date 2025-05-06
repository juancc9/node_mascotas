document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // alert("Login Exi")
    try {
      const host = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
      ? "localhost"
      : "192.168.1.106"; 
  
    const response = await fetch(`http://${host}:3000/api/loginJJM`, {
      method: "POST",        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "main.html"; 
      } else {
        document.getElementById("mensaje").innerText = data.message;
      }
    } catch (err) {
      document.getElementById("mensaje").innerText = "Error al conectar con el servidor";
      console.error(err);
    }
  });
  
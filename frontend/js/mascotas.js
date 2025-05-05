const RedirectAddicionar=()=>{
  window.location="adicionar.html"
}

const RedirectMain=()=>{
  window.location="main.html"
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("http://localhost:3000/api/mascotasJJM/");
      const mascotas = await response.json();
  
      const contenedor = document.getElementById("listaMascotas");

      mascotas.forEach((mascota) => {
        
        const h1 = document.createElement("h2");
        h1.textContent = `  Nombre: ${mascota.nombre}`;
        contenedor.appendChild(h1);
      });
    } catch (error) {
      console.error("Error al obtener las mascotas:", error);
    }
  });
  

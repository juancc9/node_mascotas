const RedirectAddicionar=()=>{
  window.location="adicionar.html"
}

const RedirectMain=()=>{
  window.location="main.html"
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const host = window.location.hostname === "localhost" ? "localhost" : "192.168.1.106";
    const response = await fetch(`http://${host}:3000/api/mascotasJJM/`);
    
    const mascotas = await response.json();

    const contenedor = document.getElementById("listaMascotas");

    mascotas.forEach((mascota) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta-mascota");

      const h1 = document.createElement("h2");
      h1.textContent = `Nombre: ${mascota.nombre}`;

      const p = document.createElement("p");
      p.textContent = `Raza: ${mascota.fk_raza?.nombre || "No especificada"}`;

      tarjeta.appendChild(h1);
      tarjeta.appendChild(p);

      contenedor.appendChild(tarjeta);

      const tarjeta2 = document.createElement("div");
      tarjeta2.classList.add("tarjeta-mascota2");

      const h1_2 = document.createElement("h2");
      h1_2.textContent = `Nombre: ${mascota.nombre}`;

      const p_2 = document.createElement("p");
      p_2.textContent = `Raza: ${mascota.fk_raza?.nombre || "No especificada"}`;

      tarjeta2.appendChild(h1_2);
      tarjeta2.appendChild(p_2);

      contenedor.appendChild(tarjeta2);
      contenedor.appendChild(tarjeta2);

    });
  } catch (error) {
    console.error("Error al obtener las mascotas:", error);
  }
});
  

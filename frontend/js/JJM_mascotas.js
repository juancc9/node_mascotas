// const sesion = localStorage.getItem("token")
// if(!sesion){
    

//   window.location ="index.html"  
// }

const RedirectAddicionar=()=>{
  window.location="adicionar.html"
}

const RedirectMain=()=>{
  window.location="main.html"
}

window.addEventListener("DOMContentLoaded", async () => {
try {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3000/api/mascotasJJM/`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
    
    const mascotas = await response.json();

    const contenedor = document.getElementById("listaMascotas");
    console.log("Cantidad de mascotas:", mascotas.length);
    contenedor.innerHTML = "";

mascotas.forEach((mascota) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta-mascota");

  const h1 = document.createElement("h2");
  h1.textContent = `${mascota.nombre}`;

  const p = document.createElement("p");
  p.textContent = `${mascota.fk_raza?.nombre || "No especificada"}`;

  h1.style.margin = "0";
  p.style.margin = "0";
  p.style.marginTop = "4px"; 


  const img = document.createElement("img");

  
  const rutaPublica = mascota.foto?.replace(/^public\//, "") || "img/default.jpg";
  img.src = `/${rutaPublica}`;
  img.alt = `Foto de ${mascota.nombre}`;
  img.style.width = "100px"; 
  img.style.height = "100px";
  img.style.objectFit = "cover";

  const textoContenedor = document.createElement("div");
  textoContenedor.appendChild(h1);
  textoContenedor.appendChild(p);

  tarjeta.appendChild(img);
  tarjeta.appendChild(textoContenedor);
  contenedor.appendChild(tarjeta);
  
});
  } catch (error) {
    console.error("Error al obtener las mascotas:", error);
  }
});
  

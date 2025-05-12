const sesion = localStorage.getItem("token")
if(!sesion){
    alert("no estas autenticado")

  window.location ="index.html"  
}

const RedirectAddicionar=()=>{
  window.location="adicionar.html"
}

const RedirectGraf=()=>{
  window.location="graficas.html"
}


const RedirectMain=()=>{
  window.location="main.html"
}

window.addEventListener("DOMContentLoaded", async () => {
try {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://10.4.20.54:3000/api/mascotasJJM/`, {
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
  
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
img1.src = "../assets/btn-delete.svg";
img2.src = "../assets/btn-edit.svg";
img3.src = "../assets/btn-show.svg";

[img1, img2, img3].forEach(img => {
  img.alt = `Foto de ${mascota.nombre}`;
  img.style.width = "30px";
  img.style.height = "30px";
});

const contenedorImagenes = document.createElement("div");
contenedorImagenes.style.display = "flex";
contenedorImagenes.style.justifyContent = "left";

contenedorImagenes.appendChild(img1);
contenedorImagenes.appendChild(img2);
contenedorImagenes.appendChild(img3);


  
  const rutaPublica = mascota.foto?.replace(/^public\//, "") || "img/default.jpg";
  img.src = `/${rutaPublica}`;
  img.alt = `Foto de ${mascota.nombre}`;
  img.style.width = "100px"; 
  img.style.height = "100px";
  img.style.objectFit = "cover";

  const textoContenedor = document.createElement("div");
  textoContenedor.appendChild(h1);
  textoContenedor.appendChild(p);

    tarjeta.appendChild(img1);
    tarjeta.appendChild(img2);
    tarjeta.appendChild(img3);
    tarjeta.appendChild(img);

  tarjeta.appendChild(textoContenedor);
  contenedor.appendChild(tarjeta);



  // FUNCION

 img2.addEventListener("click", () => {
  const id = mascota.id_mascota;
  
  window.location.href = `editar.html?id=${id}`;
});

 

img1.addEventListener("click", async () => {
  const id = img1.dataset.id = mascota.id_mascota;
;
  const token = localStorage.getItem("token"); // si usas token

  if (!confirm("¿Seguro que deseas eliminar esta mascota?")) return;

  try {
    const response = await fetch(`http://10.4.20.54:3000/api/mascotasJJM/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // si tu backend requiere token
      },
    });

    const result = await response.json();

    if (response.ok) {
      alert("Mascota eliminada correctamente.");
      location.reload(); 
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Error al eliminar la mascota:", error);
    alert("Error en el sistema.");
  }
});

  
});
  } catch (error) {
    console.error("Error al obtener las mascotas:", error);
  }

  
});
  

// const sesion = localStorage.getItem("token")
// if(!sesion){
//     alert("no estas autenticado")

//   window.location ="index.html"  
// }



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
  h1.textContent = `${mascota.nombre || "No especificada"}`;


  const p = document.createElement("p");
  p.textContent = `Longitud: ${mascota.longitud}`;

  const p_2 = document.createElement("p");
  p_2.textContent = `Latitud: ${mascota.latitud}`;

  h1.style.margin = "0";
  p.style.margin = "0";
  p.style.marginTop = "4px"; 
  p_2.style.margin = "0";
  p_2.style.marginTop = "4px"; 

const img = document.createElement("img");
  
const img01 = document.createElement("img");
const img02 = document.createElement("img");
img01.src = "../assets/btn-delete.svg";
img02.src = "../assets/btn-edit.svg";

[img01, img02].forEach(img => {
  img.alt = `Foto de ${mascota.nombre}`;
  img.style.width = "30px";
  img.style.height = "30px";
});

const contenedorImagenes = document.createElement("div");
contenedorImagenes.style.display = "flex";
contenedorImagenes.style.justifyContent = "left";

contenedorImagenes.appendChild(img01);
contenedorImagenes.appendChild(img02);


  
  const rutaPublica = mascota.foto?.replace(/^public\//, "") || "img/default.jpg";
  img.src = `/${rutaPublica}`;
  img.alt = `Foto de ${mascota.nombre}`;
  img.style.width = "100px"; 
  img.style.height = "100px";
  img.style.objectFit = "cover";
  img02.style.cursor = "pointer";

  const textoContenedor = document.createElement("div");
  textoContenedor.appendChild(h1);
  textoContenedor.appendChild(p);
  textoContenedor.appendChild(p_2);



  img02.addEventListener("click", () => {
    window.location.href = `IngresarCordenadas.html?id=${mascota.id_mascota}`;
  });



    tarjeta.appendChild(img01);
    tarjeta.appendChild(img02);
    tarjeta.appendChild(img);

  tarjeta.appendChild(textoContenedor);
  contenedor.appendChild(tarjeta);



  // FUNCION


img01.addEventListener("click", async () => {
  const id = img01.dataset.id = mascota.id_mascota;
;
  const token = localStorage.getItem("token"); // si usas token

  if (!confirm("¿Seguro que deseas eliminar esta mascota?")) return;

  try {
    const response = await fetch(`http://localhost:3000/api/mascotasJJM/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      },

      
    }
  
    
);

  


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
  

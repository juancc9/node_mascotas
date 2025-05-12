const sesion = localStorage.getItem("token")
if(!sesion){
    alert("no estas autenticado")

  window.location ="index.html"  
}

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    alert("ID de mascota no proporcionado");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/mascotasJJM/${id}/`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const mascota = await response.json();

    document.getElementById("nombre").value = mascota.nombre || "";
    document.getElementById("raza_id").value = mascota.raza_id || "";
    document.getElementById("categoria_id").value = mascota.categoria_id || "";
    document.getElementById("genero_id").value = mascota.genero_id || "";
    document.getElementById("estado").value = mascota.estado || "";
    document.getElementById("usuario_id").value = mascota.usuario_id || "";

  } catch (error) {
    console.error("Error al cargar datos de mascota:", error);
    alert("No se pudieron cargar los datos.");
  }
});




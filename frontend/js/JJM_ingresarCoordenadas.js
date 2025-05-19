let id_mascota;
const token = localStorage.getItem("token");

window.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  id_mascota = params.get("id");

  if (!id_mascota || !token) {
    alert("Falta ID o token");
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/api/mascotasJJM/${id_mascota}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });

    if (!res.ok) throw new Error("No se pudo obtener la mascota");

    const mascota = await res.json();

    // Mostrar nombre y foto
    document.getElementById("nombre_mascota").textContent = mascota.nombre;
    if (mascota.foto) {
      const ruta = "/" + mascota.foto.replace(/\\/g, "/");
      document.getElementById("foto_mascota").src = ruta;
    }

    // Cargar latitud y longitud actuales si existen
    document.getElementById("latitud").value = mascota.latitud || "";
    document.getElementById("longitud").value = mascota.longitud || "";

  } catch (error) {
    console.error("❌ Error al cargar mascota:", error);
  }
});

document.getElementById("btnGuardarCoord").addEventListener("click", async () => {
  const latitud = parseFloat(document.getElementById("latitud").value);
  const longitud = parseFloat(document.getElementById("longitud").value);

  if (isNaN(latitud) || isNaN(longitud)) {
    return alert("⚠️ Ingresa latitud y longitud válidas");
  }

  console.log("Enviando coordenadas:");
  console.log("latitud:", latitud);
  console.log("longitud:", longitud);

  try {
    const res = await fetch(`http://localhost:3000/api/coordenadasJJM/${id_mascota}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ latitud, longitud })
    });

    if (!res.ok) throw new Error("Error al actualizar coordenadas");

    alert("✅ Coordenadas actualizadas correctamente");

  } catch (error) {
    console.error("❌", error);
    alert("❌ Error al actualizar coordenadas");
  }
});

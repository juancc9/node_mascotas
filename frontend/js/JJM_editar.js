let id; 

window.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  id = params.get("id"); 

  const token = localStorage.getItem("token");

  if (!id || !token) {
    alert("Falta ID o token.");
    return;
  }

  let mascota = null;

  try {
    const res = await fetch(`http://localhost:3000/api/mascotasJJM/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) throw new Error("No se pudo obtener la mascota");
    mascota = await res.json();
  } catch (error) {
    console.error("❌ Error al cargar mascota:", error);
    return;
  }

  async function cargarSelect(endpoint, selectId, propiedadId, propiedadNombre, valorSeleccionado) {
    try {
      const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error(`Error al cargar ${selectId}`);
      const data = await res.json();

      const select = document.getElementById(selectId);
      select.innerHTML = `<option value="">Selecciona una opción</option>`; 

      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item[propiedadId];
        option.textContent = item[propiedadNombre];
        if (item[propiedadId] == valorSeleccionado) {
          option.selected = true;
        }
        select.appendChild(option);
      });
    } catch (error) {
      console.error(`❌ Error cargando ${selectId}:`, error);
    }
  }

  await cargarSelect("http://localhost:3000/api/razaJJM", "raza_id", "id_raza", "nombre", mascota.raza_id);
  await cargarSelect("http://localhost:3000/api/categoriasJJM", "categoria_id", "id_categoria", "nombre", mascota.categoria_id);
  await cargarSelect("http://localhost:3000/api/generoJJM", "genero_id", "id_genero", "nombre", mascota.genero_id);
  await cargarSelect("http://localhost:3000/api/usuariosJJM", "usuario_id", "id", "nombre", mascota.usuario_id);

  document.getElementById("nombre").value = mascota.nombre ?? "";

  if (mascota.foto) {
    const ruta = "/" + mascota.foto.replace(/\\/g, "/");
    document.getElementById("preview-img").src = ruta;
  }
});

document.addEventListener("DOMContentLoaded", () => {
const btnSubirFoto = document.getElementById("btnSubirFoto");
const inputFoto = document.getElementById("foto");
const previewImg = document.getElementById("preview-img");
const textoPorDefecto = "Subir una foto";

btnSubirFoto.textContent = textoPorDefecto;

const imagenOriginal = previewImg.src;

btnSubirFoto.addEventListener("click", () => {
  inputFoto.click();
});

inputFoto.addEventListener("change", () => {
  const file = inputFoto.files[0];

  if (file) {
    btnSubirFoto.textContent = `${file.name}`;

    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    btnSubirFoto.textContent = textoPorDefecto;
    previewImg.src = imagenOriginal;
  }
});
});

const btnGuardar = document.getElementById("btnGuardar");

btnGuardar.addEventListener("click", () => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("nombre", document.getElementById("nombre").value);
  formData.append("raza_id", document.getElementById("raza_id").value);
  formData.append("categoria_id", document.getElementById("categoria_id").value);
  formData.append("genero_id", document.getElementById("genero_id").value);
  formData.append("estado", document.getElementById("estado").value || "Disponible");

  const usuarioId = document.getElementById("usuario_id").value;
  if (usuarioId) {
    formData.append("usuario_id", usuarioId);
  }

  const foto = document.getElementById("foto").files[0];
  if (foto) {
    formData.append("foto", foto);
    
  }

    console.log("FormData antes de enviarlo:");
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}:`, pair[1]);
  }
  fetch(`http://localhost:3000/api/mascotasJJM/${id}`, {

    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al guardar cambios");
      }
      return res.json();
    })
    .then((data) => {
      alert("✅ Mascota actualizada exitosamente");
    })
    .catch((err) => {
      console.error("Error al actualizar mascota:", err);
      alert("❌ Error al guardar cambios");
    });
});


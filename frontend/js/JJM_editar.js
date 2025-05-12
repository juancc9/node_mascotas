document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    alert("ID de mascota no proporcionado");
    return;
  }

  try {
    await cargarOpciones();

    const token = localStorage.getItem("token");
    const response = await fetch(`http://10.4.20.54:3000/api/mascotasJJM/${id}/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener la mascota");
    }

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

async function cargarOpciones() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("No estás autenticado.");
    return;
  }

  try {
    const razasResponse = await fetch("http://10.4.20.54:3000/api/razaJJM", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const categoriasResponse = await fetch("http://10.4.20.54:3000/api/categoriasJJM", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const generosResponse = await fetch("http://10.4.20.54:3000/api/generoJJM", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const usuariosResponse = await fetch("http://10.4.20.54:3000/api/usuariosJJM", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!razasResponse.ok || !categoriasResponse.ok || !generosResponse.ok || !usuariosResponse.ok) {
      throw new Error("Error al cargar las opciones.");
    }

    const razas = await razasResponse.json();
    const categorias = await categoriasResponse.json();
    const generos = await generosResponse.json();
    const usuarios = await usuariosResponse.json();

    const razaSelect = document.getElementById("raza_id");
    razas.forEach(raza => {
      const option = document.createElement("option");
      option.value = raza.id;  
      option.textContent = raza.nombre; 
      razaSelect.appendChild(option);
 
    });

    const categoriaSelect = document.getElementById("categoria_id");
    categorias.forEach(categoria => {
      const option = document.createElement("option");
      option.value = categoria.id;  
      option.textContent = categoria.nombre;  
      categoriaSelect.appendChild(option);
    });

    const generoSelect = document.getElementById("genero_id");
    generos.forEach(genero => {
      const option = document.createElement("option");
      option.value = genero.id;  
      option.textContent = genero.nombre;  
      generoSelect.appendChild(option);
    });

    const usuarioSelect = document.getElementById("usuario_id");
    usuarios.forEach(usuario => {
      const option = document.createElement("option");
      option.value = usuario.id;  
      option.textContent = usuario.nombre;  
      usuarioSelect.appendChild(option);
    });

  } catch (error) {
    console.error("Error al cargar las opciones:", error);
  }
}


const RedirectMain=()=>{
  window.location="main.html"
}


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSubirFoto");
  const input = document.getElementById("foto");
  const textoPorDefecto = "Subir una foto";

  btn.textContent = textoPorDefecto ;

  btn.addEventListener("click", () => {
    input.click();
  });

  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      btn.textContent = ` ${input.files[0].name}`;
    } else {
      btn.textContent = textoPorDefecto + " Ninguna";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token"); 

  fetch("http://localhost:3000/api/razaJJM", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }
      return response.json();
    })
    .then(data => {
      const selectRaza = document.getElementById("raza_id");
      

      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id_raza; 
        option.textContent = item.nombre;
        selectRaza.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Error al cargar razas:", error);
    });
});
  
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token"); 
  const categoria_id = document.getElementById("categoria_id");
  console.log(categoria_id.value);

  fetch("http://localhost:3000/api/categoriasJJM", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }
      return response.json();
    })
    .then(data => {
      const selectCategoria = document.getElementById("categoria_id");
        console.log(selectCategoria.value);  

      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id_categoria; 
        option.textContent = item.nombre;
        selectCategoria.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Error al cargar categorías:", error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token"); 

  fetch("http://localhost:3000/api/generoJJM", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }
      return response.json();
    })
    .then(data => {
      const selectGenero = document.getElementById("genero_id");

      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id_genero; 
        option.textContent = item.nombre;
        selectGenero.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Error al cargar genero:", error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token"); 

  fetch("http://localhost:3000/api/usuariosJJM", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }
      return response.json();
    })
    .then(data => {
      const selectUsuario = document.getElementById("usuario_id");

      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id; 
        option.textContent = item.nombre;
        selectUsuario.appendChild(option);
      });
    })
    .catch(error => {
      console.error("Error al cargar usuarios:", error);
    });
});



document.addEventListener("DOMContentLoaded", () => {
  const btnGuardar = document.getElementById("btnGuardarMascota"); 
  const token = localStorage.getItem("token");

  btnGuardar.addEventListener("click", async () => {
    const nombre = document.getElementById("nombre").value;
    const raza_id = document.getElementById("raza_id").value;
    const categoria_id = document.getElementById("categoria_id").value;
    const genero_id = document.getElementById("genero_id").value;
    const estado = "Disponible"; 
    const usuario_id = document.getElementById("usuario_id").value;
    const fotoInput = document.getElementById("foto");

    if (!nombre || !raza_id || !categoria_id || !genero_id || !fotoInput.files[0]) {
      alert("Todos los campos son obligatorios excepto el usuario.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("raza_id", raza_id);
    formData.append("categoria_id", categoria_id);
    formData.append("genero_id", genero_id);
    formData.append("estado", estado);
    if (usuario_id) {
      formData.append("usuario_id", usuario_id);
    }
    formData.append("foto", fotoInput.files[0]);

    try {
      const response = await fetch("http://localhost:3000/api/mascotasJJM", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Mascota registrada exitosamente.");
    window.location="main.html"
      } else {
        console.error(result);
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error en el sistema.");
    }
  });
});





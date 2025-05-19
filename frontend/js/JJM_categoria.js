

document.getElementById("formCategoria").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje");
  const token = localStorage.getItem("token");

  if (!nombre) {
    mensaje.textContent = "⚠️ El nombre es obligatorio.";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/categoriasJJM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ nombre })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error al registrar categoría");
    }

    mensaje.textContent = `✅ Categoría "${data.nombre}" registrada correctamente`;
    document.getElementById("formCategoria").reset();

  } catch (error) {
    console.error("❌", error);
    mensaje.textContent = "❌ Error al registrar categoría: " + error.message;
  }
});

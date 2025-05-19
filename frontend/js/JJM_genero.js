document.getElementById("formGenero").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje");
  const token = localStorage.getItem("token");

  if (!nombre) {
    mensaje.textContent = "⚠️ El nombre es obligatorio.";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/generoJJM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ nombre })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Error al registrar género");
    }

    mensaje.textContent = `✅ Género "${data.nombre}" registrado correctamente`;
    document.getElementById("formGenero").reset();

  } catch (error) {
    console.error("❌", error);
    mensaje.textContent = "❌ Error al registrar género: " + error.message;
  }
});

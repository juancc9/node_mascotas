document.getElementById("formRaza").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje");
  const token = localStorage.getItem("token");

  if (!nombre) {
    mensaje.textContent = "⚠️ El nombre es obligatorio.";
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/razaJJM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ nombre })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error al registrar raza");
    }

    const data = await res.json();
    mensaje.textContent = `✅ Raza "${data.nombre}" registrada correctamente`;
    document.getElementById("formRaza").reset();

  } catch (error) {
    console.error("❌", error);
    mensaje.textContent = "❌ Error al registrar raza: " + error.message;
  }
});

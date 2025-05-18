const token = localStorage.getItem("token");

async function generarReportePorEstado() {
  const response = await fetch("http://localhost:3000/api/mascotaestadoJJM", {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await response.json();
  const estados = data.map(item => item.estado);
  const cantidades = data.map(item => item.cantidad);

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Reporte de Mascotas por Estado", 14, 22);

  doc.autoTable({
    startY: 30,
    head: [["Estado", "Cantidad"]],
    body: estados.map((estado, i) => [estado, cantidades[i]]),
    styles: { fontSize: 10 },
    headStyles: { fillColor: [52, 152, 219] }
  });

  doc.save("Reporte_Mascotas_Por_Estado.pdf");
}

async function generarReportePorCategoria() {
  const response = await fetch("http://localhost:3000/api/mascotasJJM", {
    headers: { Authorization: `Bearer ${token}` }
  });

  const mascotas = await response.json();
  const categoriasMap = {};
  mascotas.forEach(mascota => {
    const categoria = mascota.fk_categoria?.nombre || "Sin categoría";
    if (!categoriasMap[categoria]) categoriasMap[categoria] = [];
    categoriasMap[categoria].push(mascota);
  });

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Reporte de Mascotas por Categoría", 14, 22);
  let yOffset = 30;

  for (const [categoria, mascotasCategoria] of Object.entries(categoriasMap)) {
    doc.setFontSize(14);
    doc.text(`Categoría: ${categoria} — Total: ${mascotasCategoria.length}`, 14, yOffset);
    yOffset += 6;

    const columnas = ["ID", "Nombre", "Raza", "Género", "Estado"];
    const filas = mascotasCategoria.map(m => [
      m.id_mascota,
      m.nombre,
      m.fk_raza?.nombre || "",
      m.fk_genero?.nombre || "",
      m.estado
    ]);

    doc.autoTable({
      startY: yOffset,
      head: [columnas],
      body: filas,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [41, 128, 185] }
    });

    yOffset = doc.lastAutoTable.finalY + 10;
  }

  doc.save("Reporte_Mascotas_Por_Categoria.pdf");
}

async function generarReporteCompleto() {
  const response = await fetch("http://localhost:3000/api/mascotasJJM", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Error al obtener datos de mascotas");
  }

  const mascotas = await response.json();
  const columnas = ["Nombre", "Raza", "Categoría", "Género", "Estado"];
  const filas = mascotas.map(m => [
    m.nombre,
    m.fk_raza?.nombre || "",
    m.fk_categoria?.nombre || "",
    m.fk_genero?.nombre || "",
    m.estado
  ]);

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Reporte de Mascotas Registradas", 14, 22);

  doc.autoTable({
    startY: 30,
    head: [columnas],
    body: filas,
    styles: { fontSize: 10 },
    headStyles: { fillColor: [41, 128, 185] }
  });

  doc.save("Reporte_Mascotas_Completo.pdf");
}

document.getElementById("btnDescargarReporte").addEventListener("click", async () => {
  const tipo = document.getElementById("tipoReporte").value;
  try {
    switch (tipo) {
      case "estado":
        await generarReportePorEstado();
        break;
      case "categoria":
        await generarReportePorCategoria();
        break;
      case "completo":
        await generarReporteCompleto();
        break;
      default:
        alert("Selecciona un tipo de reporte válido.");
    }
  } catch (error) {
    console.error(error);
    alert("Error al generar el reporte.");
  }
});

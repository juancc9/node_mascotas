import prisma from "../client/prisma.js"; 

export const listarcategoriasJJM = async (req, res) => {
  try {
    const categorias = await prisma.categorias.findMany(); 

    return categorias.length > 0
      ? res.status(200).json(categorias)
      : res.status(404).json({ message: "No hay categorias registrados" });

  } catch (error) {
    console.error("Error al obtener categorias:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

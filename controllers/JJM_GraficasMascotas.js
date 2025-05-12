import prisma from '../client/prisma.js';

export const cantidadMascotasPorEstado = async (req, res) => {
  try {
    const conteo = await prisma.mascotas.groupBy({
      by: ['estado'],
      _count: {
        estado: true,
      },
    });

    const resultado = conteo.map(item => ({
      estado: item.estado,
      cantidad: item._count.estado
    }));

    res.status(200).json(resultado);
  } catch (error) {
    console.error("Error al obtener gráfico de estados:", error);
    res.status(500).json({ message: "Error al generar gráfico" });
  }
};

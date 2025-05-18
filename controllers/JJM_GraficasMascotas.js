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



export const obtenerMascotasPorRaza = async (req, res) => {
  try {
    const resultado = await prisma.mascotas.groupBy({
      by: ['raza_id'],
      _count: { id_mascota: true }
    });

    const razas = await prisma.raza.findMany();

    const respuesta = resultado.map(item => {
      const raza = razas.find(r => r.id_raza === item.raza_id);
      return {
        nombre: raza ? raza.nombre : 'Desconocido',
        cantidad: item._count.id_mascota
      };
    });

    res.json(respuesta);
  } catch (error) {
    console.error('Error al obtener datos de razas:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

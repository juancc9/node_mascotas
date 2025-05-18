import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const registrarCoordenadasJJM = async (req, res) => {
  try {
    const { id_mascota, latitud, longitud } = req.body;

    if (typeof id_mascota !== 'number' || typeof latitud !== 'number' || typeof longitud !== 'number') {
      return res.status(400).json({ message: "id_mascota, latitud y longitud deben ser números" });
    }

    const mascotaActualizada = await prisma.mascotas.update({
      where: { id_mascota },
      data: { latitud, longitud },
    });

    res.status(200).json(mascotaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar coordenadas" });
  }
};

export const listarCoordenadasJJM = async (req, res) => {
  try {
    const mascotas = await prisma.mascotas.findMany({
      select: { id_mascota: true, nombre: true, latitud: true, longitud: true }
    });
    res.status(200).json(mascotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al listar coordenadas" });
  }
};

export const buscarCoordenadasByIdJJM = async (req, res) => {
  try {
    const id_mascota = Number(req.params.id_mascota);
    const mascota = await prisma.mascotas.findUnique({
      where: { id_mascota },
      select: { id_mascota: true, nombre: true, latitud: true, longitud: true }
    });

    if (!mascota) return res.status(404).json({ message: "Mascota no encontrada" });

    res.status(200).json(mascota);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al buscar coordenadas" });
  }
};

export const actualizarCoordenadasJJM = async (req, res) => {
  try {
    const id_mascota = Number(req.params.id_mascota);
    const { latitud, longitud } = req.body;

    if (typeof latitud !== 'number' || typeof longitud !== 'number') {
      return res.status(400).json({ message: "latitud y longitud deben ser números" });
    }

    const mascotaActualizada = await prisma.mascotas.update({
      where: { id_mascota },
      data: { latitud, longitud },
    });

    res.status(200).json(mascotaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar coordenadas" });
  }
};

export const eliminarCoordenadasJJM = async (req, res) => {
  try {
    const id_mascota = Number(req.params.id_mascota);

    const mascotaActualizada = await prisma.mascotas.update({
      where: { id_mascota },
      data: { latitud: null, longitud: null },
    });

    res.status(200).json({ message: "Coordenadas eliminadas", mascota: mascotaActualizada });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar coordenadas" });
  }
};

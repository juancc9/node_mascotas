import prisma from "../client/prisma.js"; 

export const listarMascotas = async (req, res) => {
  try {
    const mascotas = await prisma.mascotas.findMany(); 

    return mascotas.length > 0
      ? res.status(200).json(mascotas)
      : res.status(404).json({ message: "No hay mascotas registradas" });

  } catch (error) {
    console.error("Error al obtener mascotas:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const buscarMascota = async (req, res) => {
  try {
    const { id_mascota } = req.params;  

    if (!id_mascota) {
      return res.status(400).json({ message: "El id de la mascota es obligatorio" });
    }

    const mascota = await prisma.mascotas.findUnique({
      where: {
        id_mascota: Number(id_mascota),  
      },
    });

    if (!mascota) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    return res.status(200).json(mascota);  
  } catch (error) {
    console.error("Error al buscar la mascota:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const crearMascota = async (req, res) => {
  try {
    const { nombre, raza_id, categoria_id, foto, genero_id, estado } = req.body;  
    if (!nombre || !raza_id || !categoria_id || !foto || !genero_id || !estado) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const nuevaMascota = await prisma.mascotas.create({
      data: {
        nombre,
        raza_id,
        categoria_id,
        foto,
        genero_id,
        estado,
      },
    });

    return res.status(201).json(nuevaMascota);  
  } catch (error) {
    console.error("Error al crear mascota:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const editarMascota = async (req, res) => {
  try {
    const { nombre, raza_id, categoria_id, foto, genero_id, estado } = req.body;  
    const { id_mascota } = req.params;  

    if (!id_mascota || !nombre || !raza_id || !categoria_id || !foto || !genero_id || !estado) {  
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const mascotaActualizada = await prisma.mascotas.update({
      where: {
        id_mascota: Number(id_mascota),
      },
      data: {
        nombre,
        raza_id,
        categoria_id,
        foto,
        genero_id,
        estado,
      },
    });

    return res.status(201).json(mascotaActualizada);  
  } catch (error) {
    console.error("Error al editar mascota:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const eliminarMascota = async (req, res) => {
  try {
    const { id_mascota } = req.params;  

    if (!id_mascota) {
      return res.status(400).json({ message: "El id es obligatorio" });
    }

    const mascotaEliminada = await prisma.mascotas.delete({
      where: {
        id_mascota: Number(id_mascota),  
      },
    });

    return res.status(200).json({ message: "Mascota eliminada exitosamente", data: mascotaEliminada });
  } catch (error) {
    console.error("Error al eliminar la mascota:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

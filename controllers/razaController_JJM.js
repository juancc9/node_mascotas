import prisma from "../client/prisma.js"; 

export const listarRaza = async (req, res) => {
  try {
    const razas = await prisma.raza.findMany(); 

    return razas.length > 0
      ? res.status(200).json(razas)
      : res.status(404).json({ message: "No hay razas registradas" });

  } catch (error) {
    console.error("Error al obtener razas:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const buscarRaza = async (req, res) => {
  try {
    const { id_raza } = req.params;  

    if (!id_raza) {
      return res.status(400).json({ message: "El id de la raza es obligatorio" });
    }

    const raza = await prisma.raza.findUnique({
      where: {
        id_raza: Number(id_raza),  
      },
    });

    if (!raza) {
      return res.status(404).json({ message: "Raza no encontrada" });
    }

    return res.status(200).json(raza);  
  } catch (error) {
    console.error("Error al buscar la raza:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const crearRaza = async (req, res) => {
  try {
    const { nombre } = req.body;  
    if (!nombre) {
      return res.status(400).json({ message: "El nombre de la raza es obligatorio" });
    }

    const nuevaRaza = await prisma.raza.create({
      data: {
        nombre,
      },
    });

    return res.status(201).json(nuevaRaza);  
  } catch (error) {
    console.error("Error al crear raza:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const editarRaza = async (req, res) => {
  try {
    const { nombre } = req.body;  
    const { id_raza } = req.params;  

    if (!id_raza || !nombre) {  
      return res.status(400).json({ message: "El id y el nombre de la raza son obligatorios" });
    }

    const razaActualizada = await prisma.raza.update({
      where: {
        id_raza: Number(id_raza),
      },
      data: {
        nombre,
      },
    });

    return res.status(201).json(razaActualizada);  
  } catch (error) {
    console.error("Error al editar raza:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const eliminarRaza = async (req, res) => {
  try {
    const { id_raza } = req.params;  

    if (!id_raza) {
      return res.status(400).json({ message: "El id es obligatorio" });
    }

    const razaEliminada = await prisma.raza.delete({
      where: {
        id_raza: Number(id_raza),  
      },
    });

    return res.status(200).json({ message: "Raza eliminada exitosamente", data: razaEliminada });
  } catch (error) {
    console.error("Error al eliminar la raza:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

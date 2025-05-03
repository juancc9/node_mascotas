import prisma from "../client/prisma.js"; 

export const listarGenero = async (req, res) => {
  try {
    const generos = await prisma.generos.findMany(); 

    return generos.length > 0
      ? res.status(200).json(generos)
      : res.status(404).json({ message: "No hay géneros registrados" });

  } catch (error) {
    console.error("Error al obtener géneros:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const buscarGenero = async (req, res) => {
  try {
    const { id_genero } = req.params;  

    if (!id_genero) {
      return res.status(400).json({ message: "El id del género es obligatorio" });
    }

    const genero = await prisma.generos.findUnique({
      where: {
        id_genero: Number(id_genero),  
      },
    });

    if (!genero) {
      return res.status(404).json({ message: "Género no encontrado" });
    }

    return res.status(200).json(genero);  
  } catch (error) {
    console.error("Error al buscar el género:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const crearGenero = async (req, res) => {
  try {
    const { nombre } = req.body;  
    if (!nombre) {
      return res.status(400).json({ message: "El nombre del género es obligatorio" });
    }

    // Verificar cuántos géneros existen actualmente
    const totalGeneros = await prisma.generos.count();
    if (totalGeneros >= 2) {
      return res.status(400).json({ message: "Ya existen los 2 géneros permitidos" });
    }


    const nuevoGenero = await prisma.generos.create({
      data: {
        nombre,
      },
    });

    return res.status(201).json(nuevoGenero);  
  } catch (error) {
    console.error("Error al crear género:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const editarGenero = async (req, res) => {
  try {
    const { nombre } = req.body;  
    const { id_genero } = req.params;  

    if (!id_genero || !nombre) {  
      return res.status(400).json({ message: "El id y el nombre del género son obligatorios" });
    }

    const generoActualizado = await prisma.generos.update({
      where: {
        id_genero: Number(id_genero),
      },
      data: {
        nombre,
      },
    });

    return res.status(201).json(generoActualizado);  
  } catch (error) {
    console.error("Error al editar género:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const eliminarGenero = async (req, res) => {
  try {
    const { id_genero } = req.params;  

    if (!id_genero) {
      return res.status(400).json({ message: "El id es obligatorio" });
    }

    const generoEliminado = await prisma.generos.delete({
      where: {
        id_genero: Number(id_genero),  
      },
    });

    return res.status(200).json({ message: "Género eliminado exitosamente", data: generoEliminado });
  } catch (error) {
    console.error("Error al eliminar el género:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

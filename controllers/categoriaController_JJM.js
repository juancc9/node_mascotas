import prisma from "../client/prisma.js"; 

export const listarCategoriaJJM = async (req, res) => {
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

export const buscarCategoriaJJM = async (req, res) => {
  try {
    const { id_categoria } = req.params;  

    if (!id_categoria) {
      return res.status(400).json({ message: "El id de la categoría es obligatorio" });
    }

    const categoria = await prisma.categorias.findUnique({
      where: {
        id_categoria: Number(id_categoria),  
      },
    });

    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    return res.status(200).json(categoria);  
  } catch (error) {
    console.error("Error al buscar la categoría:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};



export const crearCategoriaJJM = async (req, res) => {
  try {
    console.log(req.body) 
    const { nombre } = req.body; 
    if (!nombre) {
      return res.status(400).json({ message: "El nombre de la categoría es obligatorio" });
    }

    const nuevaCategoria = await prisma.categorias.create({
      data: {
        nombre,
      },
    });

    return res.status(201).json(nuevaCategoria);  
  } catch (error) {
    console.error("Error al crear categoría:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const editarCategoriaJJM = async (req, res) => {
  try {
    const { nombre  } = req.body;  
    const { id_categoria } = req.params;  

    if (!id_categoria || !nombre) {  
      return res.status(400).json({ message: "El id y el nombre de la categoría son obligatorios" });
    }

    const actualizadaCategoria = await prisma.categorias.update({

      where: {
        id_categoria: Number(id_categoria),
      },
      data: {
        nombre,
      },
    });

    return res.status(201).json(actualizadaCategoria);  
  } catch (error) {
    console.error("Error al editar categoría:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const eliminarCategoriaJJM = async (req, res) => {
  try {
    const { id_categoria } = req.params;  

    if (!id_categoria) {
      return res.status(400).json({ message: "El id es obligatorio" });
    }

    const eliminadaCategoria = await prisma.categorias.delete({
      where: {
        id_categoria: Number(id_categoria),  
      },
    });

    return res.status(200).json({ message: "Categoría eliminada exitosamente", data: eliminadaCategoria });
  } catch (error) {
    console.error("Error al eliminar la categoría:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};


import prisma from "../client/prisma.js"; 
import multer from 'multer';

const storage=multer.diskStorage({
    destination:function(req,img,cb){
        cb(null,"public/img");
    },
    filename: function(req,img,cb){
        cb(null,img.originalname);
    }
});
const upload=multer({storage:storage});
export const cargarImagen=upload.single('foto');


export const listarMascota = async (req, res) => {
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
  console.log(req.body) 
  try {
    const { nombre,  categoria_id, genero_id, estado, usuario_id } = req.body;

    if (!nombre ||  !categoria_id || !genero_id || !estado || !usuario_id) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const foto = req.file ? req.file.path : null; 

    const nuevaMascota = await prisma.mascotas.create({
      data: {
        nombre,
        // raza_id: parseInt(raza_id), 
        foto,
        categoria_id: parseInt(categoria_id),
        genero_id: parseInt(genero_id),
        estado,
        usuario_id: parseInt(usuario_id),
      },
    });

    return res.status(201).json({ data: nuevaMascota });
  } catch (error) {
    console.error("Error al crear mascota:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};
export const editarMascota = async (req, res) => {
  try {
    const { nombre, raza_id, categoria_id, foto, genero_id, estado, usuario_id } = req.body;  
    const { id_mascota } = req.params;  

    if (!nombre || !raza_id || !categoria_id || !genero_id || !estado || !usuario_id) {  
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const mascotaActualizada = await prisma.mascotas.update({
      where: {
        id_mascota: Number(id_mascota),
      },
      data: {
        nombre,
        raza_id,
        foto,
        categoria_id,
        genero_id,
        estado,
        usuario_id,
      },
    });

    return res.status(201).json({ message: "Mascota actualizada exitosamente", data: mascotaActualizada });  
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

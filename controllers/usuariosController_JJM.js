import prisma from "../client/prisma.js";
import bcrypt from 'bcrypt';


export const listarUsuarioJJM = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany(); 

    return usuarios.length > 0
      ? res.status(200).json(usuarios)
      : res.status(404).json({ message: "No hay usuarios registrados" });

  } catch (error) {
    console.error("Error al obtener usuarios:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const buscarUsuarioJJM = async (req, res) => {
  try {
    const { id } = req.params;  

    if (!id) {
      return res.status(400).json({ message: "El id del usuario es obligatorio" });
    }

    const usuario = await prisma.usuarios.findUnique({
      where: {
        id: Number(id),  
      },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(200).json(usuario);  
  } catch (error) {
    console.error("Error al buscar el usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const crearUsuarioJJM = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;  
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: "El nombre, email y password son obligatorios" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json(nuevoUsuario);  
  } catch (error) {
    console.error("Error al crear usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const editarUsuarioJJM = async (req, res) => {
  try {
    const { nombre, email, password,  } = req.body;  
    const { id } = req.params;  

    if (!id || !nombre || !email || !password) {  
      return res.status(400).json({ message: "El id, nombre, email y password son obligatorios" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    const usuarioActualizado = await prisma.usuarios.update({
      where: {
        id: Number(id),
      },
      data: {
        nombre,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json(usuarioActualizado);  
  } catch (error) {
    console.error("Error al editar usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

export const eliminarUsuarioJJM = async (req, res) => {
  try {
    const { id } = req.params;  

    if (!id) {
      return res.status(400).json({ message: "El id es obligatorio" });
    }

    const usuarioEliminado = await prisma.usuarios.delete({
      where: {
        id: Number(id),  
      },
    });

    return res.status(200).json({ message: "Usuario eliminado exitosamente", data: usuarioEliminado });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error.stack);
    return res.status(500).json({ message: "Error en el sistema" });
  }
};

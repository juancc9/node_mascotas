
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from "../client/prisma.js";

export const creartoken = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.usuarios.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const passwordValida = await bcrypt.compare(password, user.password);

    if (!passwordValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const { password: _, ...userSinPassword } = user;

    const token = jwt.sign(
      { user: userSinPassword },
      process.env.SECRET,
      { expiresIn: process.env.TIME }
    );

    return res.status(200).json({
      message: 'Usuario autorizado',
      result: userSinPassword,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al validar usuario' });
  }
};

export const validarToken = (req, res, next) => {
  const token_usuario = req.headers['authorization']?.split(' ')[1];

  if (!token_usuario) {
    return res.status(403).json({ message: 'El token es requerido' });
  }

  jwt.verify(token_usuario, process.env.SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({ message: 'El token no está autorizado' });
    } else {
      req.user = decoded;
      next();
    }
  });
};

import { mysql } from "../database/conexion.js"
import jwt from 'jsonwebtoken';

export const creartoken = async(req,resp)=>{
    try{
        const {login,password} = req.body;
        const sql = `select Identificacion,nombres,rol from usuarios where id_usuario=? and password=?`;
        const [result]=await mysql.query(sql,[login,password]);
        if (result.length>0){
            let token= jwt.sign({user:result},process.env.SECRET,
                {expiresIn:process.env.TIME}
            );
            return resp.status(200).json({"message":"usuario autorizado",result,token})
        }
        else{
            return resp.status(404).json({"menssage":"usuario no autorizado"});
        }
    }catch(error){
        return resp.status(500).json({"message":"error al validar usuario"})
    }
        
}

export const validarToken =(req,resp,next)=>{
    let token_usuario=req.headers["token"];
    if(!token_usuario){
        return resp.status(403).json({'message':'el token es requerido'});
    }
    let decoded = jwt.verify(token_usuario,process.env.SECRET,(error,decoded)=>{
        if(error) return resizeBy.status(403).jason({'message:':'el token no esta autorizado'})
        else next();
    })
}

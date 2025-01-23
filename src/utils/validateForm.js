import { object, string, number } from "yup";

let userSchema = object({
    fullname: string().min (3, "el nombre tiene que tener 3 letras").required("el campo nombre es requerido") ,
    phone: number().positive().required() ,
    email: string().email().required()
})

const validateForm = async(dataForm) =>{
    try{
        await userSchema.validate(dataForm)
        return { status:"success", message: "validacion pasada" }
    } catch(error){
        return { status: "error", message: error.message }

    }
}

export default validateForm
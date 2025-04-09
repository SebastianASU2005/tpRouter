import { ICurso } from "../types/ICurso"
import axios from "axios"


const API_URL="http://localhost:3000/cursos"
export const getAllCursos=async ():Promise<ICurso[]> => {
    const response=await axios.get<ICurso[]>(API_URL)
    return response.data

}
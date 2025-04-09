// Importaciones de React, navegación, estilos, axios y componentes/tipos propios
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from "./CardEstudiante.module.css"
import axios from "axios"

import CardEstudiante from "./EstudianteCard"
import { ICurso, IEstudiante } from "../../../../types/ICurso"

// Componente que lista los estudiantes de un curso específico
const CardListDeEstudiantes: React.FC = () => {
  // Se obtiene el parámetro 'id' de la URL para identificar el curso
  const { id } = useParams()
  const navigate = useNavigate()

  // Estados locales para estudiantes, nombre del curso y estado de carga
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([])
  const [nombreCurso, setNombreCurso] = useState("")
  const [loading, setLoading] = useState(true)

  // useEffect para obtener los datos del curso y sus estudiantes desde la API
  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const res = await axios.get<ICurso>(`http://localhost:3000/cursos/${id}`)
        setEstudiantes(res.data.estudiantes) // Se guarda la lista de estudiantes
        setNombreCurso(res.data.nombre) // Se guarda el nombre del curso
      } catch (error) {
        console.error("Error al obtener estudiantes", error)
      } finally {
        setLoading(false) // Se desactiva el estado de carga
      }
    }

    fetchEstudiantes()
  }, [id])

  // Mensaje mientras se carga la información
  if (loading) return <p>Cargando estudiantes...</p>

  // Mensaje si no hay estudiantes en el curso
  if (!estudiantes.length) return <p>No hay estudiantes en este curso.</p>

  // Renderizado del listado de estudiantes en forma de tabla
  return (
    <div>
      {/* Botón para volver a la pantalla de cursos */}
      <button
        onClick={() => navigate("/CursosScreen")}
        style={{
          backgroundColor: "#4f46e5",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          marginBottom: "16px",
          border: "none",
          cursor: "pointer"
        }}
      >
        ← Volver a cursos
      </button>

      {/* Nombre del curso */}
      <h2 className="text-xl font-semibold mb-4">Curso: {nombreCurso}</h2>

      {/* Encabezado de la tabla */}
      <div className={styles.card} style={{ fontWeight: "bold", backgroundColor: "#ddd" }}>
        <div className={styles.cell}>ID</div>
        <div className={styles.cell}>Nombre</div>
        <div className={styles.cell}>Edad</div>
      </div>

      {/* Renderizado de cada estudiante como una fila */}
      {estudiantes.map((est) => (
        <CardEstudiante key={est.id} estudiante={est} />
      ))}
    </div>
  )
}

export default CardListDeEstudiantes

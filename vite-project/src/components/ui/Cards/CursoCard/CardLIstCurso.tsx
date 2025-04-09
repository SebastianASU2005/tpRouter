// Importación de hooks de React, componente hijo, estilos y tipos
import React, { useEffect, useState } from "react"
import CardCurso from "./CursoCard"
import styles from "./CardListDeCurso.module.css"
import { ICurso } from "../../../../types/ICurso"
import { getAllCursos } from "../../../../https/api"

// Componente principal que lista todos los cursos
const CardListDeCurso: React.FC = () => {
  // Estado local para guardar los cursos y el estado de carga
  const [cursos, setCursos] = useState<ICurso[]>([])
  const [loading, setLoading] = useState(true)

  // useEffect se ejecuta una vez al montar el componente para obtener los cursos desde la API
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const data = await getAllCursos() // Llamada a la API
        setCursos(data) // Actualiza el estado con los cursos recibidos
      } catch (error) {
        console.error("Error al obtener cursos", error)
      } finally {
        setLoading(false) // Se desactiva el estado de carga sin importar si hubo error o no
      }
    }

    fetchCursos()
  }, [])

  // Mientras se cargan los cursos, muestra un mensaje
  if (loading) return <p className="text-center">Cargando cursos...</p>

  // Una vez cargado, se renderiza la lista de cursos usando el componente CardCurso
  return (
    <div className={styles.container}>
      {cursos.map((curso) => (
        <CardCurso key={curso.id} curso={curso} />
      ))}
    </div>
  )
}

export default CardListDeCurso

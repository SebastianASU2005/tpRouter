// Importaciones necesarias: React, estilos y el tipo de dato del estudiante
import React from "react"
import styles from "./CardEstudiante.module.css"
import { IEstudiante } from "../../../../types/ICurso"

// Props que recibe el componente: un estudiante individual
interface Props {
  estudiante: IEstudiante
}

// Componente que representa una fila de la tabla con los datos del estudiante
const CardEstudiante: React.FC<Props> = ({ estudiante }) => {
  return (
    <div className={styles.card}>
      {/* Cada dato del estudiante en una "celda" */}
      <div className={styles.cell}>{estudiante.id}</div>
      <div className={styles.cell}>{estudiante.nombre}</div>
      <div className={styles.cell}>{estudiante.edad} años</div>
    </div>
  )
}

export default CardEstudiante

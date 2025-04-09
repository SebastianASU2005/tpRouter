// Importación de React, estilos, navegación y tipos
import React from "react";
import styles from "./CardCurso.module.css";
import { useNavigate } from "react-router-dom";
import { ICurso } from "../../../../types/ICurso";

// Definición del tipo de props que recibe el componente
interface Props {
  curso: ICurso;
}

// Componente para mostrar los datos de un curso individual
const CardCurso: React.FC<Props> = ({ curso }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      {/* Título del curso que redirige a la página de estudiantes al hacer click */}
      <h2
        onClick={() => navigate(`/cursos/${curso.id}/estudiantes`)}
        style={{ cursor: "pointer", color: "black" }}
        className={styles.nombre}
      >
        {curso.nombre}
      </h2>

      {/* Muestra la cantidad de estudiantes */}
      <p className={styles.subtitle}>Estudiantes: {curso.estudiantes.length}</p>

      {/* Lista los nombres y edades de los estudiantes */}
      <ul className={styles.list}>
        {curso.estudiantes.map((est) => (
          <li key={est.id}>
            {est.nombre} ({est.edad} años)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardCurso;

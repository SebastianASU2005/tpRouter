// src/screens/CursosScreen.tsx
import React from "react"
import CardListDeEstudiantes from "../../ui/Cards/EstudianteCard/CardListEstudiantes"




const EstudiantesScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Estudiantes</h1>
       
      </div>

      <CardListDeEstudiantes/>
    </div>
  )
}

export default EstudiantesScreen

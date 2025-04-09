// src/screens/CursosScreen.tsx
import React from "react"
import CardListDeCurso from "../../ui/Cards/CursoCard/CardLIstCurso"



const CursosScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cursos</h1>
       
      </div>

      <CardListDeCurso />
    </div>
  )
}

export default CursosScreen

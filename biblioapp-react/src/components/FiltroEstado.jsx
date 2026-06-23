import React from 'react'

const estados = ['Todos', 'Disponible', 'Prestado', 'Reservado']

export default function FiltroEstado({ selected, onChange }) {
  return (
    <div className="filtro-estado" role="group" aria-label="Filtrar por estado">
      {estados.map((estado) => (
        <button
          key={estado}
          type="button"
          className={estado === selected ? 'filtro-button active' : 'filtro-button'}
          onClick={() => onChange(estado)}
        >
          {estado}
        </button>
      ))}
    </div>
  )
}

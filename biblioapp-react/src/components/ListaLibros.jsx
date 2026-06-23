import React from 'react'
import LibroCard from './LibroCard'

export default function ListaLibros({ books }) {
  if (!books || books.length === 0) return <p>No hay libros para mostrar.</p>

  return (
    <section className="grid" aria-live="polite">
      {books.map((libro) => (
        <LibroCard
          key={libro.id}
          titulo={libro.titulo}
          editorial={libro.editorial}
          anio={libro.anio}
          estado={libro.estado}
          resumen={libro.resumen}
          autores={libro.autores}
          esNovedad={libro.esNovedad}
        />
      ))}
    </section>
  )
}

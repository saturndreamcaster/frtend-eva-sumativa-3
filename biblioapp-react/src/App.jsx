import React, { useMemo, useState } from 'react'
import './App.css'
import { libros as librosData } from './data/libros'

export default function App() {
	const [query, setQuery] = useState('')
	const [filter, setFilter] = useState('Todos')

	const results = useMemo(() => {
		const q = query.trim().toLowerCase()
		return librosData.filter((b) => {
			if (filter !== 'Todos' && b.estado !== filter) return false
			if (!q) return true
			return (
				b.titulo.toLowerCase().includes(q) ||
				b.autores.join(' ').toLowerCase().includes(q) ||
				String(b.anio).includes(q)
			)
		})
	}, [query, filter])

	return (
		<div className="app-root">
			<header className="header">
				<div className="container">
					<h1>Librería Comunitaria</h1>
					<p className="subtitle">Catálogo local — sin conexión. Datos precargados.</p>

					<div className="controls">
						<label className="sr-only" htmlFor="search">Buscar libros</label>
						<input
							id="search"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Buscar por título, autor o año..."
							aria-label="Buscar libros"
						/>

						<label className="sr-only" htmlFor="filter">Filtrar por estado</label>
						<select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
							<option>Todos</option>
							<option>Disponible</option>
							<option>Prestado</option>
							<option>Reservado</option>
						</select>
					</div>
				</div>
			</header>

			<main className="container">
				<div className="summary">
					<strong>{results.length}</strong> libros mostrados
				</div>

				<section className="grid" aria-live="polite">
					{results.map((b) => {
						const estadoClass = b.estado === 'Disponible' ? 'tag-available' : b.estado === 'Prestado' ? 'tag-borrowed' : 'tag-reserved'
						return (
							<article key={b.id} className="card" aria-labelledby={`title-${b.id}`}>
								<div className="card-head">
									<h3 id={`title-${b.id}`}>{b.titulo}</h3>
									<div className="tags">
										{b.esNovedad && <span className="tag tag-new">Novedad</span>}
										<span className={`tag ${estadoClass}`}>{b.estado}</span>
									</div>
								</div>

								<p className="meta">
									<strong>Autor(es):</strong> {b.autores.join(', ')} <span className="dot">•</span>
									<strong>Editorial:</strong> {b.editorial} ({b.anio})
								</p>

								<p className="summary">{b.resumen}</p>
							</article>
						)
					})}
				</section>
			</main>

			<footer className="footer">Hecho con ❤️ — Librería Comunitaria</footer>
		</div>
	)
}

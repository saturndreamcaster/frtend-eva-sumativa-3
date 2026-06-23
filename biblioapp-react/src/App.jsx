import React, { useMemo, useState } from 'react'
import './App.css'
import { libros as librosData } from './data/libros'
import ListaLibros from './components/ListaLibros'
import FiltroEstado from './components/FiltroEstado'

const MAX_QUERY_LENGTH = 40

export default function App() {
	const [query, setQuery] = useState('')
	const [filter, setFilter] = useState('Todos')

	const novedadesCount = useMemo(
		() => librosData.filter((b) => b.esNovedad).length,
		[]
	)

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
							onChange={(e) => {
								const nextValue = e.target.value.slice(0, MAX_QUERY_LENGTH)
								setQuery(nextValue.trimStart())
							}}
							placeholder="Buscar por título, autor o año..."
							aria-label="Buscar libros"
						/>
					</div>

					<FiltroEstado selected={filter} onChange={setFilter} />
				</div>
			</header>

			<main className="container">
				<div className="summary">
					<strong>{results.length}</strong> libros mostrados
					<span className="novedades-count">{novedadesCount} NUEVO{novedadesCount === 1 ? '' : 'S'}</span>
				</div>

				{results.length > 0 ? (
					<ListaLibros books={results} />
				) : (
					<p className="empty-message">No hay libros que coincidan en su búsqueda</p>
				)}
			</main>

			<footer className="footer">Hecho con ❤️ — Librería Comunitaria</footer>
		</div>
	)
}

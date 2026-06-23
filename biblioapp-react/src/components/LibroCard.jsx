import React from 'react'
import PropTypes from 'prop-types'

export default function LibroCard({ titulo, editorial, anio, estado, resumen, autores }) {
	const estados = {
		Disponible: { label: 'Disponible', color: '#16a34a' },
		Prestado: { label: 'Prestado', color: '#2563eb' },
		Reservado: { label: 'Reservado', color: '#dc2626' },
	}

	const validEstado = estados[estado]
	const displayEstado = validEstado ? validEstado.label : 'Desconocido'
	const estadoColor = validEstado ? validEstado.color : '#6b7280'

	const safeAutores = Array.isArray(autores) ? autores : [String(autores || '')]

	return (
		<article className="libro-card" aria-labelledby={`libro-${titulo}`}>
			<header style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
				<h3 id={`libro-${titulo}`} style={{ margin: 0 }}>{titulo}</h3>
				<span
					className="libro-estado"
					aria-label={`Estado: ${displayEstado}`}
					style={{
						backgroundColor: estadoColor,
						color: '#fff',
						padding: '0.25rem 0.5rem',
						borderRadius: 999,
						fontSize: '0.75rem',
						lineHeight: 1,
					}}
				>
					{displayEstado}
				</span>
			</header>

			<p style={{ margin: '0.5rem 0', color: '#475569', fontSize: '0.9rem' }}>
				<strong>Autor(es):</strong> {safeAutores.join(', ')}
				<span style={{ margin: '0 6px', color: '#9ca3af' }}>•</span>
				<strong>Editorial:</strong> {editorial} ({anio})
			</p>

			{resumen && <p style={{ margin: 0, color: '#334155' }}>{resumen}</p>}
		</article>
	)
}

LibroCard.propTypes = {
	titulo: PropTypes.string.isRequired,
	editorial: PropTypes.string,
	anio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	estado: PropTypes.oneOf(['Disponible', 'Prestado', 'Reservado']),
	resumen: PropTypes.string,
	autores: PropTypes.arrayOf(PropTypes.string),
}

LibroCard.defaultProps = {
	editorial: 'Desconocida',
	anio: '',
	estado: 'Disponible',
	resumen: '',
	autores: [],
}

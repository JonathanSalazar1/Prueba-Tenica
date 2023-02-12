import { createContext, useEffect, useState } from "react"

const ParentContext = createContext()

const ParentProvider = ({ children }) => {
	const [Padre, setPadre] = useState([])
	const [Child, setChild] = useState([])
	const [Cargando, setCargando] = useState(false)

	const obtenerParents = async () => {
		setCargando(true)
		const resp = await fetch(
			"http://54.177.198.128:8001/api/cat-amenities-parents/"
		)
		const { data } = await resp.json()
		setPadre(data)
		setCargando(false)
	}

	const obtenerChilds = async (id) => {
		setCargando(true)
		const resp = await fetch(
			`http://54.177.198.128:8001/api/cat-amenities-childs/?amenity_parent_id=${id}`
		)
		const { results } = await resp.json()
		setChild(results)
		setCargando(false)
	}

	useEffect(() => {
		obtenerParents()
	}, [])

	return (
		<ParentContext.Provider value={{ Padre, Child, obtenerChilds, Cargando }}>
			{children}
		</ParentContext.Provider>
	)
}

export { ParentProvider }

export default ParentContext

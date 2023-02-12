import React, { useEffect } from "react"
import { useRouter } from "next/router"
import { useParent } from "@/hooks/useParent"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Producto from "@/Components/Producto"
import Spinner from "@/Components/Spinner"
import styles from "../../styles/Producto.module.css"

function Productos() {
	const { obtenerChilds, Child, Cargando } = useParent()

	const router = useRouter()

	useEffect(() => {
		obtenerChilds(router.query.id)
	}, [])

	if (Cargando) return <Spinner />

	return (
		<div className={styles.Grid}>
			<h1 className={styles.Titulo}>Productos</h1>

			{Child?.length ? (
				Child.map((child) => (
					<Producto
						key={child.id}
						child={child}
					/>
				))
			) : (
				<Card>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							No hay productos
						</Typography>
					</CardContent>
				</Card>
			)}
		</div>
	)
}

export default Productos

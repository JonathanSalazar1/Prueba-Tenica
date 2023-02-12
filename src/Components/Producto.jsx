import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import styles from "../styles/CardProductos.module.css"

function Producto({ child }) {
	const { name } = child
	return (
		<Card>
			<CardContent>
				<Typography
					variant="body2"
					className={styles.titulo}>
					{name}
				</Typography>
				<Typography
					variant="body1"
					className={styles.contenido}>
					{name}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default Producto

import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { CardActions } from "@mui/material"
import Link from "next/link"
import styles from "../styles/Card.module.css"

function Catalogo({ padre }) {
	const { name, id } = padre
	return (
		<Card className={styles.Card}>
			<CardContent>
				<div className={styles.text}>
					<h3>{name}</h3>
				</div>
			</CardContent>
			<CardActions>
				<Link
					href={`Productos/${id}`}
					className={styles.enlace}>
					Ver Productos
				</Link>
			</CardActions>
		</Card>
	)
}

export default Catalogo

import "@/styles/globals.css"
import { ParentProvider } from "@/Context/ParentProvider"

export default function App({ Component, pageProps }) {
	return (
		<ParentProvider>
			<Component {...pageProps} />
		</ParentProvider>
	)
}

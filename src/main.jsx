import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layout';
import { Navigation } from './Components/Navigation/Navigation';



createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Layout />
	</BrowserRouter>
)

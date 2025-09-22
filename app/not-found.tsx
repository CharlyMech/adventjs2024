import { redirect } from 'next/navigation';

export default function NotFound() {
	// Redirige automáticamente a la ruta personalizada
	redirect('/not-found');
}
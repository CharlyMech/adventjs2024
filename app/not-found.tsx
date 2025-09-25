import { redirect } from 'next/navigation';

export default function NotFound() {
	// Redirects the custom not found page
	redirect('/not-found');
}
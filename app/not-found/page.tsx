export default function NotFoundPage() {
	return (
		<div className="flex items-center justify-center min-h-full px-4">
			<div className="text-center">
				<div className="backdrop-blur-xl bg-white/5 shadow-lg shadow-gray-500/10 rounded-2xl p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
					<div className="mb-8">
						<h1 className="text-7xl md:text-9xl font-bold text-white/20 mb-6 font-mono">
							404
						</h1>
						<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
							Page not found
						</h2>
						<p className="text-white/60 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
							Sorry but the page you are lookign for does not exist in this website.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
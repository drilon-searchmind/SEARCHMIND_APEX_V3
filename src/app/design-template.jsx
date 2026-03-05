
import Head from 'next/head';
import Input from '../components/form/Input';
import Textarea from '../components/form/Textarea';
import Button from '../components/form/Button';
import Form from '../components/form/Form';

export default function DesignTemplate() {
	return (
		<div className="min-h-screen bg-zinc-50 text-text-default font-sans">
			<Head>
				<title>Design System – SearchMind Apex</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<div className="max-w-5xl mx-auto py-12 px-4">
				<h1 className="text-4xl font-bold mb-2">SearchMind Apex Design System</h1>
				<p className="text-text-muted mb-8">Reference for all UI components, colors, and typography.</p>
				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{/* Original Brand Colors */}
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--brand)]" />
							<span className="mt-2 text-sm">Brand Blue</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--brand-dark)]" />
							<span className="mt-2 text-sm">Dark</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--brand-light)] border" />
							<span className="mt-2 text-sm">Light</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--brand-accent)]" />
							<span className="mt-2 text-sm">Accent Green</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--brand-warning)]" />
							<span className="mt-2 text-sm">Warning Red</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--brand-info)]" />
							<span className="mt-2 text-sm">Info Purple</span>
						</div>
						{/* New Brand Colors */}
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--lime)] border" />
							<span className="mt-2 text-sm">Lime</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--green)]" />
							<span className="mt-2 text-sm">Green</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--light-green)]" />
							<span className="mt-2 text-sm">Light Green</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--white)] border" />
							<span className="mt-2 text-sm">White</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--light-beige)] border" />
							<span className="mt-2 text-sm">Light Beige</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--dark-beige)]" />
							<span className="mt-2 text-sm">Dark Beige</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--beige)]" />
							<span className="mt-2 text-sm">Beige</span>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-16 h-16 rounded-lg bg-[var(--black)]" />
							<span className="mt-2 text-sm">Black</span>
						</div>
					</div>
				</section>
				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Typography</h2>
					<div className="space-y-2">
						<h1 className="text-4xl font-bold">Heading 1 – 4xl</h1>
						<h2 className="text-3xl font-semibold">Heading 2 – 3xl</h2>
						<h3 className="text-2xl font-semibold">Heading 3 – 2xl</h3>
						<h4 className="text-xl font-medium">Heading 4 – xl</h4>
						<p className="text-base">Body text – base</p>
						<p className="text-text-muted">Muted text</p>
					</div>
				</section>

				{/* Form Components Showcase */}
				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">Form Components</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-2">Input</h3>
							<Input label="Sample Input" placeholder="Type here..." />
							<h3 className="text-lg font-semibold mb-2 mt-6">Textarea</h3>
							<Textarea label="Sample Textarea" placeholder="Type your message..." />
							<h3 className="text-lg font-semibold mb-2 mt-6">Button Variants</h3>
							<div className="flex flex-wrap gap-4">
								<Button>Primary</Button>
								<Button variant="secondary">Secondary</Button>
								<Button variant="danger">Danger</Button>
							</div>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">Full Form Example</h3>
							<Form />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

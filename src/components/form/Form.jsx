import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

export default function Form() {
	return (
		<form className="bg-[var(--card)] p-8 rounded-3xl shadow-md w-full mx-auto flex flex-col gap-4">
			<Input label="Name" placeholder="Enter your name" />
			<Input label="Email" type="email" placeholder="Enter your email" />
			<Textarea label="Message" placeholder="Type your message..." />
			<Button type="submit">Submit</Button>
		</form>
	);
}

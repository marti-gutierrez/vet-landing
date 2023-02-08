type Props = {
	label: string;
	use: string;
	placeholder: string;
};

export function InputText({ label, placeholder, use }: Props) {
	return (
		<div className="my-4">
			<label htmlFor="user" className="block text-slate-700">
				{label}
			</label>
			<input
				type="text"
				name={use}
				id={use}
				placeholder={placeholder}
				className="block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded-xl shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-primary-100 focus:ring-1 focus:ring-primary-100 text-base"
				required
			/>
		</div>
	);
}

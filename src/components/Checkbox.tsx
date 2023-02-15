import type { ReactElement } from "react";

type Props = {
	tipo: string;
	pet: string;
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const colorEnum = {
	stylePets:
		"peer-checked:text-primary-700 peer-checked:border-b-2 peer-checked:border-primary-700",
	styleServices: "reds",
};

export function Checkbox({
	tipo,
	value,
	handleChange,
	pet,
}: Props): JSX.Element {
	return (
		<div className="">
			<input
				type="radio"
				name={tipo}
				id={value}
				value={value}
				className="hidden peer"
				onChange={handleChange}
				checked={pet === value}
			/>
			<label
				htmlFor={value}
				className="inline-block text-xl text-slate-400 py-2 px-6 cursor-pointer  peer-checked:text-primary-700 peer-checked:font-bold peer-checked:border-primary-700 peer-checked:border-b-2 capitalize"
			>
				{value}
			</label>
		</div>
	);
}

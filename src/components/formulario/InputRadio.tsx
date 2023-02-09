import { Field } from "formik";

const tipos = ["gato", "perro", "otro"];

export function InputRadio() {
	return (
		<section>
			<legend>¿Qué tipo de mascota ira a consulta?</legend>
			<ul className="grid grid-cols-3 auto-rows-[48px] gap-2 place-items-center mt-2">
				{tipos.map((tipo) => (
					<li key={tipo}>
						<Field
							type="radio"
							name="pets"
							id={tipo}
							className="hidden peer"
							value={tipo}
						/>
						<label
							htmlFor={tipo}
							className="border border-primary-700 text-xl text-primary-700 peer-checked:bg-primary-700 peer-checked:text-white peer-checked:font-bold px-6 py-4 rounded-xl"
						>
							{tipo}
						</label>
					</li>
				))}
			</ul>
		</section>
	);
}

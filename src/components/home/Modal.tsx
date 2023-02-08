import { useStore } from "@nanostores/react";
import { isModalOpen } from "src/utils/stateNano";
import { FormDate } from "./FormDate";
import { InputText } from "@components/formulario/InputText";

const infoInput = [
	{
		label: "Ingrese tu nombre",
		use: "user",
		placeholder: "Juan",
	},
	{
		label: "ingresa el nombre de tu mascota",
		use: "petName",
		placeholder: "mantequilla",
	},
	{
		label: "¿Qué problema tiene tu mascata?",
		use: "description",
		placeholder: "le duele el estomago",
	},
];

export function Modal() {
	const $isModalOpen = useStore(isModalOpen);
	const onClose = () => isModalOpen.set(!$isModalOpen);
	return $isModalOpen ? (
		<FormDate onClose={onClose} data={infoInput}>
			{(data) => (
				<InputText
					key={data.use}
					label={data.label}
					placeholder={data.placeholder}
					use={data.use}
				/>
			)}
		</FormDate>
	) : null;
}

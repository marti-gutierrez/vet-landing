import { Formik } from "formik";
import { useStore } from "@nanostores/react";
import { isModalOpen } from "src/utils/stateNano";
import { FormDate } from "./FormDate";
import { InputText } from "@components/formulario/InputText";
import { InputRadio } from "@components/formulario/InputRadio";

const infoInput = [
	{
		label: "Ingresa tu nombre",
		use: "user",
		placeholder: "Juan",
		value: "",
	},
	{
		label: "Ingresa el nombre de tu mascota",
		use: "petName",
		placeholder: "mantequilla",
		value: "",
	},
	{
		label: "¿Qué problema tiene tu mascota?",
		use: "description",
		placeholder: "le duele el estomago",
		value: "",
	},
];

interface Values {
	pets: "gato" | "perro" | "otro";
	user: string;
	petName: string;
	description: string;
}

export function Modal() {
	const $isModalOpen = useStore(isModalOpen);
	const onClose = () => isModalOpen.set(!$isModalOpen);
	return $isModalOpen ? (
		<Formik
			initialValues={{
				pets: "gato",
				user: "",
				petName: "",
				description: "",
			}}
			validate={(values: Values) => {
				if (!values.user) console.log("por Favor ingresa tu nombre");
			}}
			onSubmit={(values: Values) => {
				console.log(values);
				console.log("formulario enviado");
			}}
		>
			{({ handleSubmit }) => (
				<FormDate
					onClose={onClose}
					data={infoInput}
					onChoicePet={() => <InputRadio />}
				>
					{(data) => (
						<InputText
							key={data.use}
							label={data.label}
							placeholder={data.placeholder}
							use={data.use}
						/>
					)}
				</FormDate>
			)}
		</Formik>
	) : null;
}

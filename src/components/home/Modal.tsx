import { Formik } from "formik";
import { useStore } from "@nanostores/react";
import { isModalOpen } from "src/utils/stateNano";
import { FormDate } from "./FormDate";
import { InputText } from "@components/formulario/InputText";
import { InputRadio } from "@components/formulario/InputRadio";
import { z } from "zod";

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

const dateSchema = z.object({
	pets: z.enum(["gato", "perro", "otro"]),
	user: z.string().min(5, { message: "Ingresa por lo menos 5 caracteres" }),
	petName: z.string().min(3, { message: "ingresa por lo menos 3 caracteres" }),
	description: z
		.string()
		.min(5, { message: "ingresa por lo menos 5 caracteres" })
		.max(70, { message: "sobrepasaste la capacidad de 70 caracteres" }),
});

type date = z.infer<typeof dateSchema>;
const number = 527751906816;

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
			validate={(values: date) => {
				const result = dateSchema.safeParse(values);
				if (result.success) return;
				const errors: Record<string, string> = {};
				result.error.issues.forEach((error) => {
					errors[error.path[0]] = error.message;
				});
				return errors;
			}}
			onSubmit={(values: date) => {
				let texto = `Hola mi nombre es ${values.user} tengo un ${values.pets}, se llama ${values.petName}, y tiene ${values.description} quisiera agendar una cita`;
				let textSend = texto.replace(/\s+/g, "%20");
				let apiSend = `https://api.whatsapp.com/send?phone=${number}&text=${textSend}`;
				window.open(apiSend, "_blank");
				onClose();
			}}
		>
			{({ isSubmitting }) => (
				<FormDate
					onClose={onClose}
					isSubmitting={isSubmitting}
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

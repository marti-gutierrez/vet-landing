import { Checkbox } from "@components/Checkbox";
import { ReactElement, useState } from "react";

const typePets = [
	{ tipo: "petChoice", value: "gato", style: "stylePets" },
	{ tipo: "petChoice", value: "perro", style: "stylePets" },
];
const services = [
	"alimentos",
	"juguetes y accesorios",
	"hospitalización",
	"servicio estético",
	"servicio médico",
];

function Search() {
	const [pet, setPet] = useState<string>("gato");
	const [service, setServices] = useState<string>("");
	const onClickPet = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setPet(e.target.value);
	};
	return (
		<form action="" className="flex w-full px-4 lg:px-52 mt-14">
			<fieldset className="h-max flex w-full items-center mb-8 overflow-hidden">
				{typePets.map((typePet) => (
					<Checkbox
						pet={pet}
						key={typePet.value}
						tipo={typePet.tipo}
						value={typePet.value}
						handleChange={onClickPet}
					/>
				))}
			</fieldset>
			<select
				name="services"
				id="services"
				className="outline-none w-[120px] h-16 px-2 text-lg"
			>
				{services.map((service) => (
					<option value={service} key={service}>
						{service}
					</option>
				))}
			</select>
		</form>
	);
}

export { Search };

import { CardService } from "./CardService";
import iconShop from "/images/iconShop.png";
import iconEst from "/images/icon-est.png";
import iconVac from "/images/iconVac.png";
const services = {
	shop: {
		title: "Shop",
		subtitle: "alimentos súper premium,Accesorios",
		image: `${iconShop}`,
	},
	consulta: {
		title: "consultas médicas",
		subtitle: "vacunas,desparasitación, Hospitalización",
		image: `${iconVac}`,
	},
	estetica: {
		title: "estética",
		subtitle: "baño dermatológico,pensión",
		image: `${iconEst}`,
	},
};

type Props = {
	typeCard: "shop" | "estetica" | "consulta";
};

export function Services({ typeCard }: Props) {
	const { title, subtitle, image } = services[typeCard];
	return <CardService title={title} subtitle={subtitle} imgUrl={image} />;
}

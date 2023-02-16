import axios from "axios";
export interface apiProducts {
	id: number;
	title: string;
	description: string;
	price: number | number[];
	image?: string;
	category: {
		id: number;
		name:
			| "alimentos"
			| "juguetes y accesorios"
			| "servicio medico"
			| "servicio estetico";
	};
	pet: "gato" | "perro";
}

const apiData = axios.create({ baseURL: "http://localhost:3000" });

export const getProducts = async () => {
	const res = await apiData.get("/products");
	console.log(res);
	return res.data;
};

export const getProductsFilter = async (
	id: number,
	pet: "gato" | "perro",
): Promise<apiProducts[]> => {
	const res = await apiData.get(`/products?category.id=${id}&pet=${pet}`);
	return res.data;
};

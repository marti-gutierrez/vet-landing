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

export type categoryLabel =
	| "alimentos"
	| "juguetes y accesorios"
	| "servicio medico"
	| "servicio estetico";

export type category =
	| { label: "alimentos"; value: 1 }
	| { label: "juguetes y accesorios"; value: 2 }
	| { label: "servicio medico"; value: 3 }
	| { label: "servicio estetico"; value: 4 };

export type ACTIONTYPE =
	| {
			type: "handleByCategory";
			payload: category;
	  }
	| {
			type: "handleBySort";
			payload: "perro" | "gato";
	  }
	| {
			type: "initSubCategory";
			payload: { item: {}; data: apiProducts[] };
	  }
	| { type: "addSubCategory"; payload: {} }
	| { type: "addProducts"; payload: apiProducts[] };

export type stateFilter = {
	products: apiProducts[];
	sortOptions: "gato" | "perro";
	category: category;
	subCategory: {};
};

const categoryList = {
	alimentos: 1,
	"juguetes y accesorios": 2,
	"servicio medico": 3,
	"servicio estetico": 4,
};

const subCategories = {
	consulta: true,
	vacuna: false,
	desparasitacion: false,
	limpiezaDental: false,
	esterilizacion: false,
	baño: true,
	corte: false,
};

export { subCategories, categoryList };

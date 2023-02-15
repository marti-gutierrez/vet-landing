import { useReducer } from "react";

type initialReducer = {
	products: string[];
	pet: "gato" | "perro";
	service: "alimentos" | "juguetesAccesorios" | "servicioMedico" | "hospi";
};

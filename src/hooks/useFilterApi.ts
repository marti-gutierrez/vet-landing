import { useEffect, useReducer, useState } from "react";
import {
	apiProducts,
	stateFilter,
	subCategories,
	categoryList,
	categoryLabel,
} from "./treducerTypes";
import { reducerProducts } from "./reducer";
import db from "../../db.json";

const productsApi: apiProducts[] = db.products;

const initialState: stateFilter = {
	products: productsApi.filter(
		(product) => product.category.id === 1 && product.pet === "gato",
	),
	sortOptions: "gato",
	category: { label: "alimentos", value: 1 },
	subCategory: subCategories,
};

export const useFilter = () => {
	const [state, dispath] = useReducer(reducerProducts, initialState);

	const verifySubCategoriesOn = () => {
		let activeCheckbox = [];
		for (const [label, value] of Object.entries(state.subCategory)) {
			if (value) activeCheckbox.push(label);
		}
		return activeCheckbox;
	};

	const filterByCategory = () =>
		productsApi
			.filter((product) => product.category.id === state.category.value)
			.filter((product) => {
				if (product.pet === state.sortOptions || product.pet === "both")
					return true;
			});
	const filterBySubCategory = (array: apiProducts[], subCategory: string) =>
		array.filter((product) => {
			if (product.title.includes(subCategory)) return true;
		});

	const changeCategory = (label: categoryLabel) => {
		const value = categoryList[label];
		dispath({ type: "handleByCategory", payload: { label, value } });
	};
	const addSubCategory = (subItem: string, value: boolean) => {
		const item = { ...state.subCategory, [subItem]: value };
		dispath({ type: "addSubCategory", payload: item });
	};
	const changeFilter = (item: "perro" | "gato") => {
		dispath({ type: "handleBySort", payload: item });
	};

	useEffect(() => {
		const data = filterByCategory();
		const subCateriesLabel = verifySubCategoriesOn();
		const data2 = subCateriesLabel
			.map((label) => filterBySubCategory(data, label))
			.flatMap((num) => num);
		const products = state.category.value < 3 ? data : data2;
		dispath({ type: "addProducts", payload: products });
	}, [state.sortOptions, state.category, state.subCategory]);
	return {
		products: state.products,
		service: state.category.label,
		filter: state.sortOptions,
		subFilter: state.subCategory,
		changeCategory,
		changeFilter,
		addSubCategory,
	};
};

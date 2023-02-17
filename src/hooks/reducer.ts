import type { stateFilter, ACTIONTYPE } from "./treducerTypes";

const reducerObject = (state: stateFilter, payload) => ({
	handleByCategory: {
		...state,
		category: payload,
	},
	addSubCategory: {
		...state,
		subCategory: payload,
	},
	addProducts: {
		...state,
		products: payload,
	},
	handleBySort: {
		...state,
		sortOptions: payload,
	},
});

export const reducerProducts = (state: stateFilter, action: ACTIONTYPE) =>
	reducerObject(state, action.payload)[action.type] || state;

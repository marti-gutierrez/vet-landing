import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { Product } from "./Product";
import {
	apiProducts,
	getProducts,
	getProductsFilter,
} from "src/utils/apiFetch";

const sortOptions = [
	{ name: "gato", href: "#gato", current: false },
	{ name: "perro", href: "#perro", current: false },
];
const subCategories = [
	{ name: "Alimentos", value: "1" },
	{ name: "Juguetes y Accesorios", value: "2" },
];
const filters = [
	{
		id: "serviciosMedicos",
		name: "Servicios Médicos",
		value: "3",
		options: [
			{ value: "consulta", label: "Consultas", checked: false },
			{ value: "vacunas", label: "Vacunas", checked: false },
			{ value: "desparasitacion", label: "Desparasitación", checked: true },
			{ value: "limpiezaDental", label: "Limpieza Dental", checked: false },
			{ value: "esterilizacion", label: "Esterilizaciones", checked: false },
		],
	},
	{
		id: "serviciosEstetica",
		name: "Servicio Estética",
		value: "4",
		options: [
			{ value: "baño", label: "baño", checked: false },
			{ value: "corte", label: "corte", checked: false },
		],
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export function CategoryFilter() {
	const [service, setService] = useState("1");
	const [filter, setFilter] = useState<"gato" | "perro">("gato");
	useEffect(() => {
		const fetchData = async () => {
			const data = await getProductsFilter(service, filter);
			setProducts(data);
		};
		fetchData();
	}, [service, filter]);

	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
	const handleChangeService = (e: React.ChangeEvent<HTMLInputElement>) =>
		setService(e.target.value);
	const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFilter(e.target.value);
	const [products, setProducts] = useState<apiProducts[]>([]);
	return (
		<div className="bg-body">
			<div>
				{/* Mobile filter dialog */}
				<Transition.Root show={mobileFiltersOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 lg:hidden"
						onClose={setMobileFiltersOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black bg-opacity-25" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-body py-4 pb-12 shadow-xl">
									<div className="flex items-center justify-between px-4">
										<h2 className="text-lg font-medium text-gray-900">
											Servicios
										</h2>
										<button
											type="button"
											className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-body p-2 text-gray-400"
											onClick={() => setMobileFiltersOpen(false)}
										>
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>

									{/* Filters */}
									<form className="mt-4 border-t border-gray-200">
										<h3 className="sr-only">Categories</h3>
										<ul
											role="list"
											className="px-2 py-3 font-medium text-gray-900"
										>
											{subCategories.map((category) => (
												<li key={category.name}>
													<input
														type="radio"
														name="category"
														value={category.value}
														id={category.name}
														className="peer hidden"
														onChange={handleChangeService}
														checked={service === category.value}
													/>
													<label
														htmlFor={category.name}
														className="block px-2 py-3 peer-checked:bg-gray-200 peer-checked:text-primary-700 peer-checked:font-bold text-gray-500 cursor-pointer"
													>
														{category.name}
													</label>
												</li>
											))}
											{filters.map((section) => (
												<Disclosure
													as="div"
													key={section.id}
													className="border-t border-gray-200 px-4 py-6"
												>
													{({ open }) => (
														<>
															<h3 className="-mx-2 -my-3 flow-root">
																<Disclosure.Button className="flex w-full items-center justify-between bg-body px-2 py-3 text-gray-400 hover:text-gray-500">
																	<input
																		type="radio"
																		name="category"
																		id={section.name}
																		className="hidden peer"
																		value={section.value}
																		onChange={handleChangeService}
																		checked={service === section.value}
																	/>
																	<label
																		htmlFor={section.name}
																		className="block px-2 py-3 peer-checked:text-primary-700 peer-checked:font-bold text-gray-500 cursor-pointer"
																	>
																		{section.name}
																	</label>
																	{/* <span className="font-medium text-gray-900">
																		{section.name}
																	</span> */}
																	<span className="ml-6 flex items-center">
																		{open ? (
																			<MinusIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		) : (
																			<PlusIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		)}
																	</span>
																</Disclosure.Button>
															</h3>
															<Disclosure.Panel className="pt-6">
																<div className="space-y-6">
																	{section.options.map((option, optionIdx) => (
																		<div
																			key={option.value}
																			className="flex items-center"
																		>
																			<input
																				id={`filter-mobile-${section.id}-${optionIdx}`}
																				name={`${section.id}[]`}
																				defaultValue={option.value}
																				type="radio"
																				defaultChecked={option.checked}
																				className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																			/>
																			<label
																				htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
																				className="ml-3 min-w-0 flex-1 text-gray-500"
																			>
																				{option.label}
																			</label>
																		</div>
																	))}
																</div>
															</Disclosure.Panel>
														</>
													)}
												</Disclosure>
											))}
										</ul>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>

				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
						<h1 className="text-4xl font-bold tracking-tight text-primary-700">
							Lista de Servicios
						</h1>

						<div className="flex items-center">
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
										filtrar
										<ChevronDownIcon
											className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											{sortOptions.map((option) => (
												<Menu.Item key={option.name}>
													{({ active }) => (
														<div>
															<input
																type="radio"
																name="pets"
																id={option.name}
																className="hidden peer"
																value={option.name}
																checked={filter === option.name}
																onChange={handleChangeFilter}
															/>
															<label
																htmlFor={option.name}
																className="text-gray-500 peer-checked:font-bold peer-checked:text-primary-700 peer-checked:bg-gray-100 block px-4 py-2 text-sm"
															>
																{option.name}
															</label>
															{/* <a
																href={option.href}
																className={classNames(
																	option.current
																		? "font-medium text-gray-900"
																		: "text-gray-500",
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm",
																)}
															>
																{option.name}
															</a> */}
														</div>
													)}
												</Menu.Item>
											))}
										</div>
									</Menu.Items>
								</Transition>
							</Menu>

							<button
								type="button"
								className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
							>
								<span className="sr-only">View grid</span>
								<Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
							</button>
							<button
								type="button"
								className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="sr-only">Filtros</span>
								<FunnelIcon className="h-5 w-5" aria-hidden="true" />
							</button>
						</div>
					</div>

					<section aria-labelledby="products-heading" className="pt-6 pb-24">
						<h2 id="products-heading" className="sr-only">
							Products
						</h2>

						<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
							{/* Filters */}
							<form className="hidden lg:block">
								<h3 className="sr-only">Categories</h3>
								<ul
									role="list"
									className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
								>
									{subCategories.map((category) => (
										<li key={category.name}>
											<input
												type="radio"
												name="category"
												value={category.value}
												id={category.name}
												className="peer hidden"
												onChange={handleChangeService}
												checked={service === category.value}
											/>
											<label
												htmlFor={category.name}
												className="block px-2 py-3 peer-checked:bg-gray-200 peer-checked:text-primary-700 peer-checked:font-bold text-gray-500 cursor-pointer"
											>
												{category.name}
											</label>
										</li>
									))}
									{filters.map((section) => (
										<Disclosure
											as="div"
											key={section.id}
											className="border-t border-gray-200 py-6"
										>
											{({ open }) => (
												<>
													<h3 className="-my-3 flow-root">
														<Disclosure.Button className="flex w-full items-center justify-between bg-body py-3 text-sm text-gray-400 hover:text-gray-500">
															<div>
																<input
																	type="radio"
																	name="category"
																	id={section.name}
																	className="hidden peer"
																	value={section.value}
																	onChange={handleChangeService}
																	checked={service === section.value}
																/>
																<label
																	htmlFor={section.name}
																	className="block px-2 py-3 peer-checked:text-primary-700 peer-checked:font-bold text-gray-500 cursor-pointer"
																>
																	{section.name}
																</label>
															</div>
															<span className="ml-6 flex items-center">
																{open ? (
																	<MinusIcon
																		className="h-5 w-5"
																		aria-hidden="true"
																	/>
																) : (
																	<PlusIcon
																		className="h-5 w-5"
																		aria-hidden="true"
																	/>
																)}
															</span>
														</Disclosure.Button>
													</h3>
													<Disclosure.Panel className="pt-6">
														<div className="space-y-4">
															{section.options.map((option, optionIdx) => (
																<div
																	key={option.value}
																	className="flex items-center"
																>
																	<input
																		id={`filter-${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
																		defaultValue={option.value}
																		type="checkbox"
																		defaultChecked={option.checked}
																		className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																	/>
																	<label
																		htmlFor={`filter-${section.id}-${optionIdx}`}
																		className="ml-3 text-sm text-gray-600"
																	>
																		{option.label}
																	</label>
																</div>
															))}
														</div>
													</Disclosure.Panel>
												</>
											)}
										</Disclosure>
									))}
								</ul>
							</form>

							{/* Product grid */}
							<div className="lg:col-span-3">
								{/* Replace with your content */}
								<div className="h-max rounded-lg border-4 border-dashed border-gray-200 lg:h-full w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-2 place-content-start">
									{products.map((item) => (
										<Product
											key={item.id}
											info={item.description}
											name={item.title}
											price={item.price}
											urlImg={item.image}
										/>
									))}
								</div>
								{/* /End replace */}
								<h6
									className="inline-block pl-4 mt-4 font-light text-sm
								"
								>
									Los precios pueden variar dependiendo del estado de salud del
									paciente
								</h6>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

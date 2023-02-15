//import { RiShoppingBasket2Fill } from "react-icons/ri";

type Props = {
	name: string;
	info: string;
	urlImg: string;
	price: number;
};

function Product({ name, urlImg, info, price }: Props) {
	return (
		<article className="relative w-full bg-white rounded-xl shadow-xl">
			<figure className="w-full h-[216px] bg-slate-300 rounded-t-xl">
				<img src={urlImg} alt={name} className="w-full h-full object-contain" />
			</figure>
			<section className="p-4 grid grid-rows-[28px_20px_60px]">
				<h2 className="block text-lg capitalize my-0">{name}</h2>
				<p className="block text-sm font-light my-0">{info}</p>
				<span className="block self-end text-2xl font-maison mt-4">
					${price} MXN
				</span>
			</section>
		</article>
	);
}

export { Product };

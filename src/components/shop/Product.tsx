//import { RiShoppingBasket2Fill } from "react-icons/ri";
import vaccunImg from "/images/iconShop.png";

type Props = {
	name: string;
	info: string;
	urlImg: string;
	price: number | number[];
};

function Product({ name, urlImg, info, price }: Props) {
	return (
		<article className="grid gap-4 grid-cols-[54px_1fr_120px] items-center p-4 w-full h-max bg-white rounded-xl shadow-xl">
			<figure className="w-14 h-14 bg-slate-50 rounded-full">
				<img
					src={urlImg.length < 1 ? vaccunImg : urlImg}
					alt={name}
					className="w-full h-full object-cover rounded-full"
				/>
			</figure>
			<section className="">
				<h2 className="block text-lg capitalize my-0">{name}</h2>
				<p className="block text-sm font-light my-0">{info}</p>
			</section>
			{Array.isArray(price) ? (
				<span className="text-lg font-bold justify-self-end">
					${price[0]} a ${price[1]} MXN{" "}
				</span>
			) : (
				<span className="text-lg font-bold justify-self-end">${price} MXN</span>
			)}
		</article>
	);
}

export { Product };

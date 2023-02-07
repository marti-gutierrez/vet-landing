type Props = {
	comment: string;
	photo: string;
	namePet: string;
	owner: string;
};

export function Post({ comment, namePet, photo, owner }: Props): JSX.Element {
	return (
		<article className="flex flex-col justify-between w-full h-[260px] p-6 bg-secondary-50 rounded-xl">
			<p className="self-start overflow-hidden">{comment}</p>
			<section className="flex gap-2 mt-8">
				<figure className="w-16 h-16">
					<img
						src={photo}
						alt={`foto de mascote ${namePet}`}
						className="w-full h-full object-cover bg-slate-400 rounded-full"
					/>
				</figure>
				<div>
					<h6 className="text-xl font-bold">{namePet}</h6>
					<p className="text-sm font-light">Dueñ@: {owner}</p>
				</div>
			</section>
		</article>
	);
}

type inputText = {
	label: string;
	use: string;
	placeholder: string;
};

type Props = {
	data: inputText[];
	onClose: () => void;
	onChoicePet: () => React.ReactNode;
	children: (data: inputText) => React.ReactNode;
};

export function FormDate({ onClose, children, data, onChoicePet }: Props) {
	return (
		<div className="z-10 fixed grid place-items-center top-0 left-0 w-screen h-screen bg-modal">
			<section className="w-11/12 max-w-[500px] mt-14 min-h-[100px] bg-slate-100 px-8 py-4 rounded-lg">
				<header className="flex justify-between items-center mb-6 pb-2 border-b-2 border-primary-500">
					<h2 className="text-xl text-primary-700 font-bold capitalize">
						bienvienido
					</h2>
					<button
						type="button"
						onClick={onClose}
						className="flex justify-items items-center w-12 h-12 text-2xl text-primary-700 bg-transparent"
					>
						<i className="bg-iconClose w-6 h-6 bg-no-repeat bg-cover" />
					</button>
				</header>
				<form>
					{onChoicePet()}
					{data.map(children)}{" "}
					<div className="w-full grid grid-cols-2 auto-rows-[48px] gap-4">
						<button
							type="button"
							className="text-xl font-bold text-slate-400"
							onClick={onClose}
						>
							Cancelar
						</button>
						<button
							type="submit"
							className="flex items-center justify-center gap-2 bg-primary-700 text-white font-bold text-xl rounded-xl"
						>
							Enviar
							<i className="bg-iconSend w-6 h-6 bg-cover bg-no-repeat" />
						</button>
					</div>{" "}
				</form>
			</section>
		</div>
	);
}

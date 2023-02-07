type Props = {
  imgUrl: string;
  title: string;
  subtitle: string;
};

export function CardService({ imgUrl, subtitle, title }: Props): JSX.Element {
  return (
    <article className="grid grid-cols-[64px_1fr] gap-4 items-center w-full bg-white p-4 rounded-tl-3xl rounded-br-3xl shadow-lg capitalize">
      <figure className="flex justify-center items-center w-16 h-16 bg-secondary-500 rounded-full">
        <img src={imgUrl} alt={`imagen de ${title}`} className="w-12 h-12" />
      </figure>
      <div>
        <h2 className="font-bold text-primary-700 text-lg">{title}</h2>
        <p className="font-light">{subtitle}</p>
      </div>
    </article>
  );
}

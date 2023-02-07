type Props = {
  imageUrl: string;
  children: JSX.Element;
};
export default function Hero({ imageUrl, children }: Props): JSX.Element {
  return (
    <aside className="relative grid grid-cols-[minmax(300px,500px)] md:grid-cols-[minmax(300px,2fr)_3fr] auto-rows-[400px] w-full lg:px-52 px-4 bg-gradient-to-r from-primary-700 to-primary-100 before:bg-perfil before:w-full before:h-full before:object-cover before:absolute before:bg-no-repeat before:md:hidden before:bg-center before:brightness-50">
      <section className="grid gap-6 col-start-1 col-end-2 row-span-full place-self-center z-10">
        <h1>
          Veterinaria <br /> San Martin de Porres
        </h1>
        <h2 className="text-2xl text-right text-secondary-100 font-bold">
          Yo te curo, Pero Dios te sana
        </h2>
        {children}
      </section>
      <figure className="col-start-2 col-end-[-1] row-span-full grid-cols-3 grid-rows-6 hidden md:grid">
        <img
          src={imageUrl}
          alt=""
          className="col-span-full row-span-full w-full h-full object-cover"
        />
        <figcaption className="row-start-6 row-end-7 col-start-[-2] col-end-[-1] w-full text-white text-xs place-self-end mb-4">
          Foto de
          <a
            href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            className="text-slate-300 font-bold"
          >
            charlesdeluvio
          </a>
          en
          <a href="https://unsplash.com/es/fotos/DziZIYOGAHc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </figcaption>
      </figure>
    </aside>
  );
}

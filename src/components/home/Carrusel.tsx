import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type apiData = {
	id: number;
	name: string;
	owner: string;
	comment: string;
	urlImage: string;
};

import { Post } from "./Post";
type Props = {
	posts: apiData[];
};

function Carrusel({ posts }: Props) {
	return (
		<section className="my-12">
			<h4>Pacientes Sanos y Felices</h4>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 10,
					stretch: -30,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper w-full pb-12 important!"
			>
				{posts.map((post) => (
					<SwiperSlide key={post.name} className="!w-[320px]">
						<Post
							comment={post.comment}
							namePet={post.name}
							owner={post.owner}
							photo={post.urlImage}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export { Carrusel };

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Navigation, Pagination,EffectCards } from "swiper";
import { TestimonialStyled } from "../Components/Testimonials/Testimonials.styled";

const Erroess = () => {
  return (
    <TestimonialStyled>
      <div className="wrapper">
        <header>
          <h1>TESTIMONIALS</h1>
        </header>

        <div className="swiper">
        <Swiper 
         modules={[Navigation, Pagination, Scrollbar, A11y,EffectCards]}
        	direction= "horizontal"
            loop= {true}
            autoHeight = {false}
            centeredSlides={true}
            slidesPerView= {1}
          // Responsive breakpoints
          breakpoints={{
            "@0.00": {  
              slidesPerView: 1,
              spaceBetween: 0,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
       >

          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="content-wrapper">
                <div className="content">
                  <p className="cite">- Juliet Elliott, Cyclist</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="content-wrapper">
                <div className="content">
                  <p>
                      <q>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed posuere consectetur est at lobortis. Nullam id dolor id
                    nibh ultricies vehicula ut id elit. Curabitur blandit tempus
                    porttitor. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                          risus, porta ac consectetur ac, vestibulum at eros.
                      </q>
                  </p>
                  <p className="cite">- Katie Kookaburra, Cyclist</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="content-wrapper">
                <div className="content">
                  <p>
                      <q>Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Donec id elit non mi
                    porta gravida at eget metus. Aenean eu leo quam.
                          Pellentesque ornare sem lacinia quam venenatis vestibulum.</q>
                  </p>
                  <p className="cite">- Alison Tetrick, Cyclist</p>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
        </div>
      </div>
    </TestimonialStyled>
  );
};
export default Erroess;

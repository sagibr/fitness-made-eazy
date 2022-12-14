import React from "react";
import { useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../core/Footer/Footer";
import Navbar from "../../core/Navbar/Navbar";
import { addToMyCart } from "../../reducers/MyCartSlice";
import { change } from "../../reducers/SelectedProgramSlice";
import { Program } from "./Program";
import "./programs.css";
import Questeins from "./Questeins";

import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
export const Programs = (props) => {
  const dispatch = useDispatch();

  const handleClick = (workout) => {
    dispatch(change(workout));
  };
  const handleBuy = (image, title, price) => {
    dispatch(addToMyCart({ image: image, title: title, price: price }));
  };
  return (
    <div className="programs-container">
      <Navbar className="programs-nav" haveAbout={false} />
      <br /> <br /> <br />
      <div className="programs">
        <Program
          title="Power Lifting"
          img="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg"
          price="250$"
          handleClick={() => handleClick("Power Lifting")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg",
              "Power Lifting",
              250
            )
          }
        />
        <Program
          title="Calisthenics"
          img="https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_1280.jpg"
          price="150$"
          handleClick={() => handleClick("Calisthenics")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_1280.jpg",
              "Calisthenics",
              150
            )
          }
        />
        <Program
          title="Fundementals"
          img="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_1280.jpg"
          price="100$"
          handleClick={() => handleClick("Fundementals")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_1280.jpg",
              "Fundementals",
              100
            )
          }
        />
        <Program
          title="Women's Specialization Program"
          img="https://cdn.pixabay.com/photo/2015/07/02/10/21/training-828715_1280.jpg"
          price="100$"
          handleClick={() => handleClick("Women's Specialization Program")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2015/07/02/10/21/training-828715_1280.jpg",
              "Women's Specialization Program",
              100
            )
          }
        />
        <Program
          title="Full Body Workout"
          img="https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_1280.jpg"
          price="300$"
          handleClick={() => handleClick("Full Body Workout")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_1280.jpg",
              "Full Body Workout",
              300
            )
          }
        />
        <Program
          title="Lower Body Workout"
          img="https://cdn.pixabay.com/photo/2017/04/20/08/35/sport-2245029_1280.jpg"
          price="200$"
          handleClick={() => handleClick("Lower Body Workout")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2017/04/20/08/35/sport-2245029_1280.jpg",
              "Lower Body Workout",
              200
            )
          }
        />
        <Program
          title="Upper Body Workout"
          img="https://cdn.pixabay.com/photo/2018/12/28/16/16/exercise-3899877_1280.jpg"
          price="200$"
          handleClick={() => handleClick("Upper Body Workout")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2018/12/28/16/16/exercise-3899877_1280.jpg",
              "Upper Body Workout",
              200
            )
          }
        />
        <Program
          title="Core"
          img="https://cdn.pixabay.com/photo/2016/04/13/17/00/plank-1327256_1280.jpg"
          price="100$"
          handleClick={() => handleClick("Core")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2016/04/13/17/00/plank-1327256_1280.jpg",
              "Core",
              100
            )
          }
        />
        <Program
          title="Crossfit"
          img="https://cdn.pixabay.com/photo/2020/11/10/15/08/crossfit-5730105_1280.jpg"
          price="200$"
          handleClick={() => handleClick("Crossfit")}
          handleBuy={() =>
            handleBuy(
              "https://cdn.pixabay.com/photo/2020/11/10/15/08/crossfit-5730105_1280.jpg",
              "Crossfit",
              200
            )
          }
        />
      </div>
      <br />
      <div className="program-phone">
        <Swiper
          className="mySwiper"
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
          <SwiperSlide>
            <Program
              title="Power Lifting"
              img="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_1280.jpg"
              price="250$"
              handleClick={() => handleClick("Power Lifting")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Calisthenics"
              img="https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_1280.jpg"
              price="150$"
              handleClick={() => handleClick("Calisthenics")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Fundementals"
              img="https://cdn.pixabay.com/photo/2016/11/19/12/43/dark-1839088_1280.jpg"
              price="100$"
              handleClick={() => handleClick("Fundementals")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Women's Specialization Program"
              img="https://cdn.pixabay.com/photo/2015/07/02/10/21/training-828715_1280.jpg"
              price="100$"
              handleClick={() => handleClick("Women's Specialization Program")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Full Body Workout"
              img="https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_1280.jpg"
              price="300$"
              handleClick={() => handleClick("Full Body Workout")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Lower Body Workout"
              img="https://cdn.pixabay.com/photo/2017/04/20/08/35/sport-2245029_1280.jpg"
              price="200$"
              handleClick={() => handleClick("Lower Body Workout")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Upper Body Workout"
              img="https://cdn.pixabay.com/photo/2018/12/28/16/16/exercise-3899877_1280.jpg"
              price="200$"
              handleClick={() => handleClick("Lower Body Workout")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Core"
              img="https://cdn.pixabay.com/photo/2016/04/13/17/00/plank-1327256_1280.jpg"
              price="100$"
              handleClick={() => handleClick("Lower Body Workout")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Program
              title="Crossfit"
              img="https://cdn.pixabay.com/photo/2020/11/10/15/08/crossfit-5730105_1280.jpg"
              price="200$"
              handleClick={() => handleClick("Lower Body Workout")}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Questeins />
      <Footer />
    </div>
  );
};

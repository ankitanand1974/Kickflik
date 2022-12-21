import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={require("./bg.jpg")} alt="" />

        <div className="home__row">
          <Product
            id="1212"
            title={"Marvel's Spider-Man: Miles Morales (PS4)"}
            price={1988}
            image="https://m.media-amazon.com/images/I/811umGHYORL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="2423"
            title={"MSI GeForce RTX 3050 Ventus 8GB GDDR6"}
            price={28499}
            image="https://m.media-amazon.com/images/I/61EygjtA8NS._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="3674"
            title={"Microsoft Xbox X/S Wireless Controller Robot White"}
            price={5199}
            image="https://m.media-amazon.com/images/I/61MdJDbKYjL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4563"
            title={"Logitech G29 Driving Force Racing Wheel and Floor Pedals"}
            price={27995}
            image={
              "https://m.media-amazon.com/images/I/61IYYoZ66VL._AC_UY327_FMwebp_QL65_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="5678"
            title={
              "LG Ultragear - 32Gn650 Qhd 32 Inch(80 Cm) 2560 X 1440 Pixels, 165 Hz 1Ms, Nvidia G-Sync Compatible, Freesync Premium, HDR 10, Hdmi, Tilt, Height, Pivot Stand, Va Panel Gaming LCD Monitor, Black"
            }
            price="24399"
            image="https://m.media-amazon.com/images/I/71PbKy5iBFL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://s.rmjo.in/WP-Web.png" },
    { url: "https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_1400x.png?v=1646626071" }
 
  ];
  
  const Slider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={1396}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    );
  }
  export default Slider;
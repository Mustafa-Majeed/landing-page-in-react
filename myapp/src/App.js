import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cards from "./component/Cards";
import Heading from "./component/Heading";
import Footer from "./component/Footer";
import "./component/style.css"

function App() {
  let obj = [
    {
      name: "elon mask",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    },
    {
      name: "bill gates",
      img: "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg",
    },
    {
      name: "mark zinger",
      img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
    }
  ];


  return (<>
    <Navbar />
    <Hero />
    <Heading />
    <div className="cardCont">
      {obj.map((item) => {
        return <Cards data={item} />
      })};
    </div>
    <Footer />
  </>);
}

export default App;

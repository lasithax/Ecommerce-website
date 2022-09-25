import { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";

function SellerHome() {
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

  async function componentDidMount() {
    const response = await fetch("/items");
    const body = await response.json();
    setData(body);
    data ? setIsData(true) : setIsData(false);
  }

  useEffect(() => {
    componentDidMount();
  }, [isData === false]);

  return (
    <div className="home">
    <div className="home__container">
      <img
        className="home__image"
        src="https://i.ibb.co/nLHszvX/baroshop2.jpg"
      ></img>

      <div className="home__row">
        {data.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              title={item.name}
              price={item.price}
              quantity={item.quantity}
              rating={item.rating}
              image={item.image}
              isDelete={true}
            />
          );
        })}
      </div>
    </div>
  </div>
  );
}

export default SellerHome;
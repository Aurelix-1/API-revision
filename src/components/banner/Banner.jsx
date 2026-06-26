import axios from "axios";
import "./Banner.css";
import { useState, useEffect } from "react";

const API_URL = "https://dummyjson.com/products";

function Banner() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   axios.get(API_URL).then((res) => setData(res.data.products));
  // }, []);

  useEffect(() => {
      axios.get(API_URL).then((res) => {
        setData(res.data.products);
        setLoading(false);
      });
    }, []);

    if (loading) {
    return (
      <div className="loader-wrapper">
        <p className="loader"></p>
      </div>
    );
  }

  console.log(data);

  return (
    <div className='Banner'>
      <h1>Products</h1>
      <div className="cards">
        {data.map((item) => {
          return(
            <div key={item.id} className="card">
              <img src={item.thumbnail} alt={item.thumbnail} />
              <p>{item.category}</p>
              <p><mark>{item.price}</mark></p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default Banner;

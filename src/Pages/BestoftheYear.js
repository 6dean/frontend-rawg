import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const BestoftheYear = ({ search }) => {
  const [data, setData] = useState({});
  const [number, setNumber] = useState(21);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:3000/bestoftheyear?page_size=${number}&search=${search}`
    );

    setData(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [number, search]);

  return isLoading ? (
    <div className="loading">
      <>
        <span className="loader"></span>
      </>
    </div>
  ) : (
    <div className="home-flex">
      <div className="navigation-home">
        <div className="title-home">
          <p>BEST OF THE YEAR</p>
        </div>
        <div>
          <div className="listing-games">
            {data.results.map((elem, index) => {
              return (
                <div key={index} className="card-game">
                  <div className="card-info-box">
                    <div className="game-title">
                      <Link
                        to={`/game-details/${elem.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        {elem.name.length < 30
                          ? elem.name
                          : elem.name.slice(0, 30) + "..."}
                      </Link>
                    </div>
                  </div>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                  >
                    {elem.short_screenshots.map((screenshot, key) => {
                      return (
                        <div key={key}>
                          <img
                            className="carousel-img"
                            src={screenshot.image}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              );
            })}
            <div className={data.count < 20 ? "display" : "card-more"}>
              <p
                className="load-more"
                onClick={() => {
                  setNumber(number + 21);
                }}
              >
                LOAD MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestoftheYear;

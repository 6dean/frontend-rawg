import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = ({ search }) => {
  const [data, setData] = useState({});
  const [number, setNumber] = useState(21);
  const [isLoading, setisLoading] = useState(true);

  console.log(search);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=19f566421f19451c81f113f84a69f091&page_size=${number}&search=${search}`
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
          <p>ALL GAMES</p>
        </div>
        <div>
          <div className="listing-games">
            {data.results.map((elem, index) => {
              return (
                <div key={index} className="card-game">
                  <Link
                    to={`/game-details/${elem.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="game-title">{elem.name}</div>
                  </Link>
                  <Carousel showThumbs={false} showStatus={false}>
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
            <div className="card-more">
              <p
                className="load-more"
                onClick={() => {
                  console.log(number);
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

export default Home;

import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = ({ search, platform, platformName, setPlatformName }) => {
  const [data, setData] = useState({});
  const [number, setNumber] = useState(21);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    if (platform) {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=19f566421f19451c81f113f84a69f091&page_size=${number}&search=${search}&platforms=${platform}`
      );

      setData(response.data);
      setisLoading(false);
    } else {
      setPlatformName(null);
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=19f566421f19451c81f113f84a69f091&page_size=${number}&search=${search}`
      );

      setData(response.data);
      setisLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (platform) {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=19f566421f19451c81f113f84a69f091&page_size=${number}&search=${search}&platforms=${platform}`
        );

        setData(response.data);
        setisLoading(false);
      } else {
        setPlatformName(null);
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=19f566421f19451c81f113f84a69f091&page_size=${number}&search=${search}`
        );

        setData(response.data);
        setisLoading(false);
      }
    };
    fetchData();
  }, [number, search, platform, platformName]);

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
          <p>ALL GAMES {platformName && " - " + platformName}</p>
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
                    <div className="card-info-box">
                      <div className="game-title">
                        {elem.name.length < 30
                          ? elem.name
                          : elem.name.slice(0, 40) + "..."}
                      </div>
                    </div>
                  </Link>
                  <Carousel showThumbs={false} showStatus={false}>
                    {elem.short_screenshots
                      ? elem.short_screenshots.map((screenshot, key) => {
                          return (
                            <div key={key}>
                              <img
                                className="carousel-img"
                                src={screenshot.image}
                                alt=""
                              />
                            </div>
                          );
                        })
                      : null}
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

export default Home;

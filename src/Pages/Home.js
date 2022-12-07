import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = ({ search, platform, platformName, setPlatformName }) => {
  const [data, setData] = useState([]);
  const [infinite, setInfinite] = useState([]);
  const [number, setNumber] = useState(20);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (platform) {
        const response = await axios.get(
          `http://localhost:3000/home?page_size=${number}&search=${search}&platforms=${platform}&page=${page}`
        );

        setData(response.data);
        setisLoading(false);
      } else {
        setPlatformName(null);
        const response = await axios.get(
          `http://localhost:3000/home?page_size=${number}&search=${search}&page=${page}`
        );

        setData(JSON.parse(JSON.stringify(response.data.results)));
        setisLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        setNumber(number + 20);
        setPage(page + 1);
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [number, search, platform, platformName, page, setPlatformName]);

  useEffect(() => {
    if (page < 2) {
      const newInfinite = [...data];
      setInfinite(newInfinite);
    } else {
      const newInfinite = [...infinite];
      for (let i = 0; i < data.length; i++) {
        newInfinite.push(data[i]);
        setInfinite(newInfinite);
      }
    }
  }, [data]);

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
            {infinite.map((elem, index) => {
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
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                  >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

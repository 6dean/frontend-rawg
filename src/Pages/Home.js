import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Carousel } from "react-responsive-carousel";

const Home = ({ search, platform, platformName, setPlatformName }) => {
  const [data, setData] = useState({});
  // const [datas, setDatas] = useState([]);
  const [number, setNumber] = useState(21);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    if (platform) {
      const response = await axios.get(
        `http://localhost:3000/home?page_size=${number}&search=${search}&platforms=${platform}`
      );

      setData(response.data);
      setisLoading(false);
    } else {
      setPlatformName(null);
      const response = await axios.get(
        `http://localhost:3000/home?page_size=${number}&search=${search}`
      );

      setData(response.data);
      // const copy = [...data];
      // setDatas(copy);
      // console.log(datas);

      setisLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 30 >=
        document.documentElement.scrollHeight
      ) {
        setPage(page + 1);
        setNumber(number + 21);

        // setData(infiniteGames);
        console.log("page :", page);
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {/* <div className={data.count < 20 ? "display" : "card-more"}>
              <p
                className="load-more"
                onClick={() => {
                  setNumber(number + 21);
                }}
              >
                LOAD MORE
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

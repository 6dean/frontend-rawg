import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const LastThirstyDays = ({ search }) => {
  const [data, setData] = useState([]);
  const [infinite, setInfinite] = useState([]);
  const [number, setNumber] = useState(20);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/last30?page_size=${number}&search=${search}&page=${page}`
      );

      setData(JSON.parse(JSON.stringify(response.data.results)));
      setisLoading(false);
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

    search && setPage(1);
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [number, search, page]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const ratingEmoji = (value) => {
    let ratingArray = [];
    for (let index = 0; index < 1; index++) {
      if (value < 3.9) {
        return null;
      }
      if (value < 4.1) {
        ratingArray.push("👍");
      }
      if (value > 4.3) {
        ratingArray.push("🎯");
      }
    }
    return ratingArray;
  };

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
          <p>Last 30 Days</p>
        </div>
        <div>
          <div className="listing-games">
            {infinite.map((elem, index) => {
              return (
                <div key={index} className="card-game">
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
                  <Link
                    to={`/game-details/${elem.id}`}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="card-info-box">
                      <div
                        className={
                          elem.name.length < 40
                            ? "game-title"
                            : "game-title-lower"
                        }
                      >
                        {elem.name.length < 40
                          ? elem.name
                          : elem.name.slice(0, 40) + "..."}
                      </div>
                      <div className="card-like-infos">
                        <div className="game-infos-home">
                          <FontAwesomeIcon icon={faPlus} /> {elem.reviews_count}
                        </div>
                        <div className="game-infos-2-home">
                          {ratingEmoji(elem.rating)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastThirstyDays;

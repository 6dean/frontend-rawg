import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NextWeek = ({ search }) => {
  const [data, setData] = useState([]);
  const [infinite, setInfinite] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/nextweek?search=${search}&page=${page}`
      );

      setData(JSON.parse(JSON.stringify(response.data.results)));
      setCount(response.data.count);
      setisLoading(false);
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        setPage(page + 1);
        if (count) {
          return null;
        } else {
          setPage(page + 1);
        }
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [search, page, count]);

  useEffect(() => {
    if (count > infinite.length) {
      if (page === 1) {
        const newInfinite = [...data];
        setInfinite(newInfinite);
      } else {
        const newInfinite = [...infinite];
        for (let i = 0; i < data.length; i++) {
          newInfinite.push(data[i]);
        }
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
          <p>Next Week</p>
        </div>
        <div>
          <div className="listing-games">
            {infinite.map((elem, index) => {
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
                    <div>
                      {elem.reviews_count !== 0 ? (
                        <div className="game-infos-home">
                          <FontAwesomeIcon icon={faPlus} /> {elem.reviews_count}
                        </div>
                      ) : null}
                    </div>
                    <div className="game-infos-2-home">
                      {ratingEmoji(elem.rating)}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextWeek;

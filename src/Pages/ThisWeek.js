import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ThisWeek = ({ search }) => {
  const [data, setData] = useState([]);
  const [infinite, setInfinite] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://site--backend-rawg--6qn7tv96v7tt.code.run/thisweek?search=${search}&page${page}`
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
        if (count < 60) {
          setPage(1);
        }
      }
    };
    search && setPage(1);
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [search, page, count]);

  useEffect(() => {
    if (infinite.length < 41) {
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
  }, [data, page]);

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
          <p>This Week</p>
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
                      <div className="game-title reduce-font-size">
                        {/* 
                         {elem.name.length < 24
                          ? elem.name
                          : elem.name.slice(0, 24) + "..."}
                        */}
                        {elem.name}
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

export default ThisWeek;

import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const ThisWeek = ({ search }) => {
  const [data, setData] = useState([]);
  const [infinite, setInfinite] = useState([]);
  const [number, setNumber] = useState(40);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/thisweek?page_size=${number}&search=${search}&page${page}`
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
        if (count) {
          return null;
        } else {
        }
      }
    };

    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, [number, search, page, count]);

  console.log("Count : ", count, "LENGTH : ", infinite.length);

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
          <p>THIS WEEK</p>
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

export default ThisWeek;

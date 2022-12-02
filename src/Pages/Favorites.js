import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Favorites = ({ token }) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.post(`http://localhost:3000/allfavorites`, {
      token,
    });

    setData(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
    updateData();
  }, []);

  const updateData = async () => {
    const response = await axios.put(`http://localhost:3000/deletefavorite`, {
      token,
    });

    setData(response.data);
  };

  return isLoading ? (
    <div className="loading">
      <>
        <span className="loader"></span>
      </>
    </div>
  ) : (
    <div className="wishlist-page">
      <div className="navigation-home">
        <div className="title-home">
          <p>Favorites</p>
        </div>
      </div>
      <div className="listing-games-wish-fav">
        {data.map((elem, index) => {
          return (
            <div key={index} className="card-game">
              <div
                className="game-delete"
                onClick={() => {
                  updateData();
                }}
              >
                <FontAwesomeIcon icon={faCircleXmark} size="xl" />
              </div>
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
                showIndicators={false}
              >
                <Link
                  to={`/game-details/${elem.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div>
                    <img className="carousel-img" src={elem.image} alt="" />
                  </div>
                </Link>
              </Carousel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;

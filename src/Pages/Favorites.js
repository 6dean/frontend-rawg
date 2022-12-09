import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Favorites = ({ token }) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [isMember, setIsMember] = useState(true);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const response = await axios.post(
          `https://site--backend-rawg--6qn7tv96v7tt.code.run/allfavorites`,
          {
            token,
          }
        );

        setData(response.data);
        setisLoading(false);
      };
      fetchData();
    } else {
      setIsMember(false);
    }
  }, [token]);

  const updateData = async (id) => {
    const gameId = id;
    const response = await axios.put(
      `https://site--backend-rawg--6qn7tv96v7tt.code.run/deletefavorite`,
      {
        token,
        gameId,
      }
    );

    setData(response.data);
  };

  return !isMember ? (
    <div className="wishlist-page">
      <div className="title-home">
        <p>Favorites</p>
      </div>
      <div className="navigation-fav">
        <div className="box-info-null">
          <div className="info-null">You don't have any games yet !</div>
          <img
            src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1670147535/my-content/Pngtree_video_game_controller_5392581_kmp8gz.png"
            alt="gamepad"
            width="200"
          />
        </div>
      </div>
    </div>
  ) : isLoading ? (
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
      {data.length < 1 ? (
        <div className="navigation-fav">
          <div className="box-info-null">
            <div className="info-null">You don't have any games yet !</div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1670147535/my-content/Pngtree_video_game_controller_5392581_kmp8gz.png"
              alt="gamepad"
              width="200"
            />
          </div>
        </div>
      ) : (
        <div className="listing-games">
          {data.map((elem, index) => {
            return (
              <div key={index} className="card-game-fav-wish">
                <div
                  className="game-delete"
                  onClick={() => {
                    updateData(elem.id);
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} size="xl" />
                </div>
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
                <Link
                  to={`/game-details/${elem.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="card-info-box">
                    <div
                      className={
                        elem.name.length < 28
                          ? "game-title"
                          : "game-title-lower"
                      }
                    >
                      {elem.name.length < 35
                        ? elem.name
                        : elem.name.slice(0, 35) + "..."}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;

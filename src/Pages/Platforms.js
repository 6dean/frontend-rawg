import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Platforms = ({ setPlatform, setPlatformName }) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--backend-rawg--6qn7tv96v7tt.code.run/platforms`
    );

    setData(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <>
        <span className="loader"></span>
      </>
    </div>
  ) : (
    <div className="platform-page">
      <div className="navigation-platform">
        <div className="title-home">
          <p>Platforms</p>
        </div>
        <div>
          <div className="listing-platform">
            {data.results.map((elem, index) => {
              return (
                <div key={index} className="card-platform">
                  <div className="title-platform">
                    <Link
                      to={`/platforms/${elem.slug}`}
                      onClick={() => {
                        setPlatform(elem.id);
                        setPlatformName(elem.name);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {elem.name}
                    </Link>
                  </div>

                  <div className="trending-platforms">
                    {elem.games.slice(0, 3).map((games, index) => {
                      return (
                        <div key={index} className="platform-infos">
                          <div className="game-name">
                            <Link
                              className="alink"
                              to={`/game-details/${games.id}`}
                              onClick={() => {
                                window.scrollTo(0, 0);
                              }}
                            >
                              {games.name.length < 27
                                ? games.name
                                : games.name.slice(0, 24) + "..."}
                            </Link>
                          </div>
                          <div className="game-num">
                            <div>
                              {games.added
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <div className="staring">
                              <FontAwesomeIcon icon={faStar} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <img src={elem.image_background} alt="illustration"></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;

import axios from "axios";
import { useEffect, useState } from "react";

const Genres = () => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=19f566421f19451c81f113f84a69f091`
    );

    setData(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <div>
        <span class="loader"></span>
      </div>
    </div>
  ) : (
    <div className="home-flex">
      <div className="navigation-home">
        <div className="title-home">
          <p>GENRES</p>
        </div>
        <div>
          <div className="listing-platform">
            {data.results.map((elem, index) => {
              return (
                <div key={index} className="card-platform">
                  <div className="title-platform">{elem.name}</div>
                  <div className="trending-platforms">
                    {elem.games.slice(0, 3).map((games, index) => {
                      return (
                        <div key={index} className="platform-infos">
                          <div className="game-name">
                            {games.name.length < 27
                              ? games.name
                              : games.name.slice(0, 24) + "..."}
                          </div>
                          <div className="game-num">{games.added}</div>
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

export default Genres;

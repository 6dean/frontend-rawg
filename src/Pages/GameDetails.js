import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=19f566421f19451c81f113f84a69f091`
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
    <div className="game-details-page">
      <div className="flex-game-top">
        <div className="game-left-element">
          <div className="listing-platforms">
            {data.platforms.map((platform, index) => {
              return (
                <div className="platform-style" key={index}>
                  {platform.platform.name}
                </div>
              );
            })}
          </div>
          <div className="game-title-top">{data.name}</div>
          <div className="genre-metascore">
            <div className="genres">
              <p className="style-details">Genres</p>
              <div className="genres-element">
                {data.genres.map((genre, index) => {
                  return (
                    <div className="genres-style" key={index}>
                      {genre.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="style-metascore">
              <p className="style-details">Score</p>
              <p
                className={
                  data.metacritic > 85
                    ? "data-score"
                    : "data-score-mid" ||
                      (data.metacritic < 50 && "data-score-low")
                }
              >
                {data.metacritic}
              </p>
            </div>
          </div>
          <div className="community-button">
            <div>ADD FAVORITES</div>
            <div>ADD WISHLIST</div>
          </div>
        </div>
        <div>
          <div className="game-img">
            <img
              src={data.background_image}
              alt="game-background"
              width="400"
            />
          </div>
        </div>
      </div>
      <div className="game-description">
        <div className="category-about">About</div>
        {data.description
          .replaceAll("<p>", "")
          .replaceAll("</p>", "")
          .replaceAll("<br />", "")}
      </div>
    </div>
  );
};

export default GameDetails;

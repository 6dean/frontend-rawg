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
              return <div key={index}>{platform.platform.name}</div>;
            })}
          </div>
          <div className="game-title-top">{data.name}</div>
          <div>
            <p>Developers</p>
            {data.developers.map((dev, index) => {
              return <div key={index}>{dev.name}</div>;
            })}
          </div>
          <div>
            <p>Score</p>
            {data.metacritic}
          </div>

          <div className="community-button">
            <div>ADD TO FAVORITES</div>
            <div>ADD TO WISHLIST</div>
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
        {data.description.replaceAll("<p>", "").replaceAll("</p>", "")}
      </div>
    </div>
  );
};

export default GameDetails;

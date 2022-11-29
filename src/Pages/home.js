import axios from "axios";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=d63135d20b08493989713a8f5f2586e3`
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
          <p>TOP GAMES</p>
        </div>
        <div>
          <div className="listing-games">
            {data.results.map((elem, index) => {
              return (
                <div key={index} className="card-game">
                  <div className="game-title">{elem.name}</div>
                  <Carousel showThumbs={false} showStatus={false}>
                    {elem.short_screenshots.map((screenshot) => {
                      return (
                        <div>
                          <img src={screenshot.image} alt="" />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              );
            })}
            <div className="card-more">
              <p className="load-more">LOAD MORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

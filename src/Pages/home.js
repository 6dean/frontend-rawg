import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/platforms?key=d63135d20b08493989713a8f5f2586e3`
    );

    setData(response.data);
    setisLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <>LOADING</>
  ) : (
    <div className="home-flex">
      {/* SIDE BANNER A VIRER */}

      <div className="side-banner">
        <div className="side-banner-style">
          <div className="side-section">
            <div className="side-title">Home</div>
          </div>
          <div className="side-section">
            <div className="side-title">Reviews</div>
          </div>
          <div className="side-section">
            <div className="side-title">Username</div>
            <p>Wishlist</p>
            <p>Favorites</p>
            <p>People you follow</p>
          </div>

          <div className="side-section">
            <div className="side-title">New Releases</div>
            <p>Last 30 days</p>
            <p>This week</p>
            <p>Next week</p>
            <p>Release calendar</p>
          </div>

          <div className="side-section">
            <div className="side-title">Top</div>
            <p>Best of the year</p>
            <p>Popular in 2021</p>
            <p>All time top 250</p>
          </div>

          <div className="side-section">
            <div className="side-title">Browse</div>
            <p>Platforms</p>
            <p>stores</p>
            <p>Genres</p>
            <p>Developers</p>
          </div>
        </div>
      </div>

      {/* SIDE BANNER A VIRER */}
      <div className="navigation-home">
        <div className="title-home">
          <p>Platforms</p>
        </div>
        <div>
          <div className="listing-elem">
            {data.results.map((elem, index) => {
              return (
                <div key={index} className="elem-pc">
                  <div className="elem-title">{elem.name}</div>

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

export default Home;

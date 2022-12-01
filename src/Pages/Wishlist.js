import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Wishlist = ({ wishFromUser }) => {
  console.log(wishFromUser);
  return (
    <div className="wishlist-page">
      <div className="navigation-home">
        <div className="title-home">
          <p>Wishlist</p>
        </div>
      </div>
      <div className="listing-games">
        {wishFromUser.map((elem, index) => {
          return (
            <div key={index} className="card-game">
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
              <Carousel showThumbs={false} showStatus={false}>
                {elem.short_screenshots ? (
                  elem.short_screenshots.map((screenshot, key) => {
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
                ) : (
                  <img
                    className="carousel-img"
                    src={elem.background_image_additional}
                    alt=""
                  />
                )}
              </Carousel>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;

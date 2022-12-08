import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ token }) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [isMember, setIsMember] = useState(true);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        const response = await axios.post(`http://localhost:3000/allreviews`, {
          token,
        });

        setData(response.data);
        setisLoading(false);
      };
      fetchData();
    } else {
      setIsMember(false);
    }
  }, [token]);

  const updateData = async (id) => {
    const game_id = id;
    const response = await axios.put(`http://localhost:3000/deletecomment`, {
      token,
      game_id,
    });

    setData(response.data);
  };

  return !isMember ? (
    <div className="wishlist-page">
      <div className="navigation-home">
        <div className="title-home">
          <p>Reviews</p>
        </div>
        <div className="navigation-fav">
          <div className="box-info-null">
            <div className="info-null">You don't have any reviews yet !</div>
            <img
              src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1670147535/my-content/Pngtree_video_game_controller_5392581_kmp8gz.png"
              alt="gamepad"
              width="200"
            />
          </div>
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
          <p>Reviews</p>
        </div>
      </div>
      {data.length < 1 ? (
        <div className="box-info-null">
          <div className="info-null">You don't have any games yet !</div>
          <img
            src="https://res.cloudinary.com/dlfp2xvis/image/upload/v1670147535/my-content/Pngtree_video_game_controller_5392581_kmp8gz.png"
            alt="gamepad"
            width="200"
          />
        </div>
      ) : (
        <div className="listing-games-review">
          {data.map((elem, index) => {
            return (
              <div key={index} className="review-card">
                <div
                  className="game-delete"
                  onClick={() => {
                    updateData(elem.game_id);
                  }}
                >
                  <FontAwesomeIcon icon={faCircleXmark} size="xl" />
                </div>
                <div className="img-review">
                  <Link to={`/game-details/${elem.game_id}`}>
                    <img src={elem.game_img} alt="alt-img-review" />
                  </Link>
                </div>
                <div>
                  <Link to={`/game-details/${elem.game_id}`}>
                    <div className="review-title">{elem.game_name}</div>
                  </Link>
                  <div className="review-date-2">
                    Date : {elem.date.slice(0, 25)}
                  </div>
                  <div className="review-comment">
                    <div className="review-comment-style">
                      {elem.text.length < 120
                        ? elem.text
                        : elem.text.slice(0, 120) + "..."}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";

const GameDetails = ({ token, tokenUser }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [game, setGame] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=19f566421f19451c81f113f84a69f091`
    );

    setData(response.data);
    setisLoading(false);
  };

  const favTabCreation = () => {
    let fav = [];
    let obj = { name: data.name, id: data.id, image: data.background_image };
    fav.push(obj);
    setGame(fav);
  };

  useEffect(() => {
    fetchData();
    favTabCreation();
  }, []);

  const addGame = () => {
    if (token || tokenUser) {
      const favGame = async () => {
        try {
          const response = await axios.put("http://localhost:3000/favorite", {
            game,
            token,
          });
        } catch (error) {}
      };
      favGame();
    } else {
      navigate("/signin");
    }
  };

  const wishGame = () => {
    if (token || tokenUser) {
      // NULL
    } else {
      navigate("/signin");
    }
  };

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
            <div>
              <div className="genres">
                <p className="style-details-date">Release date</p>
                <div className="genres-style-date">{data.released}</div>
              </div>
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
              <div className="genres">
                <p className="style-details-web">Website</p>
                <div className="genres-style-web">
                  <a href={data.website}>{data.website}</a>
                </div>
              </div>
            </div>
            <div className="scoring-box">
              <div className="style-metascore">
                <div>
                  <p className="style-details">Score</p>
                </div>
                <div>
                  {" "}
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
            </div>
          </div>
          <div className="community-button">
            <div
              className="button-fav"
              onClick={() => {
                favTabCreation();
                addGame();
              }}
            >
              ADD FAVORITES
              <p>
                <FontAwesomeIcon
                  icon="fa-solid fa-heart"
                  fontSize={16}
                  color="red"
                />
              </p>
            </div>
            <div
              className="button-wish"
              onClick={() => {
                wishGame();
              }}
            >
              ADD WISHLIST
              <p className="">
                <FontAwesomeIcon
                  icon="fa-solid fa-gift"
                  fontSize={16}
                  color="orange"
                />
              </p>
            </div>
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
        <div className="style-details">About</div>
        {data.description
          .replaceAll("<p>", "")
          .replaceAll("</p>", "")
          .replaceAll("<br />", "")}
      </div>
      <div className="separation"></div>
      <div className="similar-element">
        <div className="similar-title-top">Similar to {data.name}</div>
      </div>
      <div className="similar-elements">
        {data.tags.slice(0, 12).map((similar, index) => {
          return (
            <div key={index} className="card-similar">
              <div className="similar-title">
                <div>{similar.name}</div>
              </div>
              <div>
                <img
                  className="img-similar"
                  src={similar.image_background}
                  alt="illustrations"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="separation"></div>
      <div className="commentaries">
        <div className="reviews-style">
          Reviews
          <p>
            <FontAwesomeIcon
              icon="fa-solid fa-keyboard"
              fontSize={48}
              color="white"
            />
          </p>
        </div>
        {tokenUser || token ? (
          <>
            <div className="comment-element">
              <textarea
                className="comment-zone"
                placeholder="Be polite to and respectful of other commenters. No ad hominem attacks. Discuss or argue issues, do not argue about any topic excepted the game."
              ></textarea>
            </div>
            <div className="post-button">
              <button className="style-post-button">PUBLISH</button>
            </div>
          </>
        ) : (
          <>
            <div className="comment-element">
              <textarea
                className="comment-zone"
                placeholder="You need an account to write a comment."
              ></textarea>
            </div>
            <div className="post-button">
              <Link to="/signin">
                <button className="style-post-button">REGISTER</button>
              </Link>
            </div>
          </>
        )}

        <div className="comment-zone-area">
          <div className="comments-users">
            <p>NO COMMENTS YET :/</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import { PlatformLogo } from "../PlatformsIcons";

const GameDetails = ({ token, tokenUser, setPlatform, setPlatformName }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [inFavorites, setInFavorites] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [comment, setComment] = useState("");
  const [listcomments, setListcomments] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [alerte, setAlert] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const favoritesList = async () => {
      if (token) {
        const response = await axios.post(
          `https://site--backend-rawg--6qn7tv96v7tt.code.run/allfavorites`,
          {
            token,
          }
        );

        response.data.some((element) => element.id === data.id) &&
          setInFavorites(true);
      } else {
        return null;
      }
    };
    const wishList = async () => {
      if (token) {
        const response = await axios.post(
          `https://site--backend-rawg--6qn7tv96v7tt.code.run/wishlist`,
          {
            token,
          }
        );
        response.data.some((element) => element.id === data.id) &&
          setInWishlist(true);
      } else {
        return null;
      }
    };

    const fetchData = async () => {
      const response = await axios.get(
        `https://site--backend-rawg--6qn7tv96v7tt.code.run/gamedetails?id=${id}`
      );

      setData(response.data);
      setisLoading(false);
    };
    fetchData();
    favoritesList();
    wishList();
  }, [data.id, token, id]);

  useEffect(() => {}, [listcomments]);

  const addGame = () => {
    if (token || tokenUser) {
      const favGame = async () => {
        try {
          const favorite = {
            name: data.name,
            id: data.id,
            image: data.background_image,
          };
          await axios.put(
            "https://site--backend-rawg--6qn7tv96v7tt.code.run/favorite",
            {
              token,
              favorite,
            }
          );
          setInFavorites(true);
        } catch (error) {}
      };
      favGame();
    } else {
      navigate("/signin");
    }
  };

  const deleteFav = async (id) => {
    const gameId = id;
    await axios.put(
      `https://site--backend-rawg--6qn7tv96v7tt.code.run/deletefavorite`,
      {
        token,
        gameId,
      }
    );
    setInFavorites(false);
  };

  const deleteWish = async (id) => {
    const gameId = id;
    await axios.put(
      `https://site--backend-rawg--6qn7tv96v7tt.code.run/deletewish`,
      {
        token,
        gameId,
      }
    );
    setInWishlist(false);
  };

  const wishGame = () => {
    if (token || tokenUser) {
      const wishGame = async () => {
        const wish = {
          name: data.name,
          id: data.id,
          image: data.background_image,
        };
        try {
          await axios.put(
            "https://site--backend-rawg--6qn7tv96v7tt.code.run/wish",
            {
              wish,
              token,
            }
          );
          setInWishlist(true);
        } catch (error) {
          console.log(error.response);
        }
      };
      wishGame();
    } else {
      navigate("/signin");
    }
  };

  const postComment = async () => {
    var time = new Date().getTime();
    var date = new Date(time);
    if (comment.length < 20) {
      alert("Your comment must contain at least 20 characters");
    } else {
      try {
        await axios.post(
          "https://site--backend-rawg--6qn7tv96v7tt.code.run/commentary",
          {
            game_id: data.id,
            game_name: data.name,
            game_img: data.background_image_additional,
            username: tokenUser,
            token: token,
            date: date.toString(),
            review: comment,
          }
        );
        window.scrollTo(0, 0);
        window.location.reload();
      } catch (error) {
        setAlert(error.response.data.message);
      }
    }
  };

  const allReviews = async () => {
    try {
      const response = await axios.post(
        `https://site--backend-rawg--6qn7tv96v7tt.code.run/allcomments`,
        {
          game_id: id,
        }
      );
      setListcomments(response.data.reverse());
    } catch (error) {
      console.log("something wrong happened :S");
    }
  };
  useEffect(() => {
    allReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {data.platforms.map((nameplatform, index) => {
              return (
                <div className="platform-style" key={index}>
                  {PlatformLogo[nameplatform.platform.name] ? (
                    <Link
                      to={`/platforms/${nameplatform.platform.slug}`}
                      onClick={() => {
                        setPlatform(nameplatform.platform.id);
                        setPlatformName(nameplatform.platform.name);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img
                        src={PlatformLogo[nameplatform.platform.name]}
                        alt="logo"
                      />
                    </Link>
                  ) : null}
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
                <p className="style-details-web">Publisher</p>
                <div className="genres-style-web">
                  {data.publishers[0] ? data.publishers[0].name : null}
                </div>
                <div className="genres">
                  <p className="style-details-web">Website</p>
                  <div className="genres-style-web">
                    <a href={data.website}>
                      {data.website.length > 40
                        ? data.website.slice(0, 45) + "..."
                        : data.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-elem-game-info">
              <div className="scoring-box">
                <div className="style-metascore">
                  <div>
                    <p className="style-details">Score</p>
                  </div>
                  <div>
                    <p
                      className={
                        data.metacritic
                          ? data.metacritic > 85
                            ? "data-score"
                            : "data-score-mid" ||
                              (data.metacritic < 50 && "data-score-low")
                          : null
                      }
                    >
                      {data.metacritic}
                    </p>
                  </div>
                </div>
              </div>
              <div className="community-button-2">
                {inFavorites ? (
                  <div
                    className="button-fav-2"
                    onClick={() => {
                      deleteFav(data.id);
                    }}
                  >
                    FAVORITE
                    <p>
                      <FontAwesomeIcon
                        icon="fa-solid fa-heart-circle-check"
                        fontSize={16}
                        color="red"
                      />
                    </p>
                  </div>
                ) : (
                  <div
                    className="button-fav"
                    onClick={() => {
                      addGame();
                      setInFavorites(true);
                    }}
                  >
                    FAVORITE
                    <p>
                      <FontAwesomeIcon
                        icon="fa-solid fa-heart"
                        fontSize={16}
                        color="grey"
                      />
                    </p>
                  </div>
                )}
                <div className="community-button">
                  {inWishlist ? (
                    <div
                      className="button-wish-2"
                      onClick={() => {
                        deleteWish(data.id);
                      }}
                    >
                      WISHLIST
                      <p>
                        <FontAwesomeIcon
                          icon="fa-solid fa-gift"
                          fontSize={16}
                          color="orange"
                        />
                      </p>
                    </div>
                  ) : (
                    <div
                      className="button-wish"
                      onClick={async () => {
                        wishGame();
                        setInWishlist(true);
                      }}
                    >
                      WISHLIST
                      <p className="">
                        <FontAwesomeIcon
                          icon="fa-solid fa-gift"
                          fontSize={16}
                          color="grey"
                        />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-img">
          <div className="game-img">
            <img src={data.background_image} alt="game-background" />
          </div>
        </div>
      </div>
      <div className="game-description">
        <div className="style-details-about">About</div>
        {data.description_raw}
      </div>
      <div className="separation"></div>
      <div className="similar-element">
        <div className="similar-title-top">Similar to {data.name}</div>
      </div>
      <div className="similar-elements">
        {data.tags.slice(0, 12).map((similar, index) => {
          return (
            <Link key={index} to="/">
              <div className="card-similar">
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
            </Link>
          );
        })}
      </div>
      <div className="separation"></div>
      <div className="commentaries">
        <div className="reviews-style">
          Write a review
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
                onChange={(comment) => setComment(comment.target.value)}
              ></textarea>
            </div>
            <div className="post-button">
              <button
                className="style-post-button"
                onClick={() => {
                  postComment();
                  setAlert(null);
                }}
              >
                PUBLISH
              </button>
            </div>
            <div className="alert-text">{alerte}</div>
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

        {listcomments.length > 0 ? (
          <>
            {listcomments.map((elem, index) => {
              return (
                <div key={index} className="pres-comment-zone-area">
                  <div className="first-elem-review">
                    <>
                      <div className="username-review">
                        {elem.username.toUpperCase()}
                      </div>
                    </>
                    <>
                      <div className="review-date">
                        {elem.date.slice(0, 25)}
                      </div>
                    </>
                  </div>
                  <div className="second-elem-review">
                    <div className="review-style">
                      <>{elem.text}</>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="comment-zone-area">
            <div className="comments-users">
              <p>NO COMMENTS YET :/</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetails;

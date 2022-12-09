import axios from "axios";
import { useEffect, useState } from "react";

const MemberPage = ({ token }) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.put(
        `https://site--backend-rawg--6qn7tv96v7tt.code.run/profile`,
        {
          token,
        }
      );

      setData(response.data);
      setisLoading(false);
    };
    fetchData();
  }, [token]);
  return (
    <div className="wishlist-page">
      <div className="navigation-home">
        <div className="title-home">
          <p>Your Profile</p>
        </div>
      </div>
      {isLoading ? (
        <div className="loading">
          <>
            <span className="loader"></span>
          </>
        </div>
      ) : (
        <div className="your-profile-style">
          <div className="profile-element">
            <div className="profile-title">Username</div>
            <div className="style-info-user">{data.Username}</div>
          </div>
          <div className="profile-element">
            <div className="profile-title">Email</div>
            <div className="style-info-user">{data.Email}</div>
          </div>
          <div className="profile-element">
            <div className="style-info-fwr">
              <div className="profile-title">Favorites: </div>
              <div className="profile-number">{data.Favorites.length}</div>
            </div>
            <div className="style-info-fwr">
              <div className="profile-title">Wishlist: </div>
              <div className="profile-number">{data.Wishlist.length}</div>
            </div>
            <div className="style-info-fwr">
              <div className="profile-title">Reviews: </div>
              <div className="profile-number">
                {data.Reviews ? data.Reviews.length : 0}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberPage;

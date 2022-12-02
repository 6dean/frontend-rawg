import axios from "axios";
import { useEffect, useState } from "react";

const MemberPage = ({ token }) => {
  const [data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.put(`http://localhost:3000/profile`, {
        token,
      });

      setData(response.data);
      setisLoading(false);
    };
    fetchData();
  }, [token]);
  return (
    <div className="wishlist-page">
      <div className="navigation-home">
        <div className="title-home">
          <p>Your profile</p>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;

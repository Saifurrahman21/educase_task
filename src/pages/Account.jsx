import { useEffect, useState } from "react";
import { PHOTO_URL } from "../utils/constants";
import "../styles/account.css";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("user"));
    setUser(saved);
  }, []);

  const name = user?.name || "Marry Doe";
  const email = user?.email || "marry@gmail.com";

  return (
    <div className="account-page">
      <div className="account-card">
        {/* Header */}
        <div className="account-header">
          <h3>Account Settings</h3>
        </div>

        {/* Profile */}
        <div className="profile-row">
          <div className="avatar-wrap">
            <img className="avatar" src={PHOTO_URL} alt="profile" />
          </div>

          <div className="profile-info">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        </div>

        {/* Description */}
        <p className="account-desc">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </p>

        <div className="dashed-line" />

        <div className="account-space" />

        <div className="dashed-line-bottom" />
      </div>
    </div>
  );
};

export default Account;

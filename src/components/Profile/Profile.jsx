import React from "react";
import PropTypes from 'prop-types';
import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, avatar, stats }) => {
    const classesStats = [styles.label_border, styles.item_stats];
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item_stats}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={classesStats.join(' ')}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item_stats}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string
};

Profile.defaultProps = {
  tag: '@nickName',
  location: 'notFound'
};

export default Profile;

import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusClasses = [styles.status];
    isOnline ? statusClasses.push(styles.status__active) : statusClasses.push(styles.status__inactive)
  return (
    <li className={styles.item}>
    <div className={styles.wrapper_content}>
      <span className={statusClasses.join(' ')}></span>
      <img className={styles.avatar} src={avatar} alt="avatar_img" width="48" />
      <p className={styles.name}>{name}</p>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

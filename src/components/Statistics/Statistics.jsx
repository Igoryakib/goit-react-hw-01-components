import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map((item) => {
          return (<li style={{...{
        backgroundColor:  `rgba(${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (255 - 1) + 1)}, ${Math.round(Math.random() * (10 - 1) + 1)}`
    }}} key={item.id} className={styles.item}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>);
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

Statistics.defaultProps = {
  title: 'stats'
};

export default Statistics;

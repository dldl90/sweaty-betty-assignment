"use client";
import styles from "./Heading.module.scss";
import PropTypes from "prop-types";

const Heading = ({ title, subtitle }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);

Heading.prototype = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Heading;

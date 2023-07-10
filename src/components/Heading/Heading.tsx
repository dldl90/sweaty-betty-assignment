"use client";

import { FC } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  title: string;
  subtitle: string;
};

const Heading: FC<HeadingProps> = ({ title, subtitle }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
);

export default Heading;

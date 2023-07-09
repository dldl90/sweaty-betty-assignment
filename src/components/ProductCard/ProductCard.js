"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import AddToFavourites from "@/components/AddToFavourites";

import styles from "./ProductCard.module.scss";

const ProductCard = ({ id, title, description, category, image, alt }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          src={image}
          alt={alt || "Picture of the author"}
          width={200}
          height={200}
          blurDataURL={image}
          placeholder="blur"
        />
      </div>
      <div className={styles.product__row}>
        <h4 className={styles.title}>{title}</h4>
        <AddToFavourites id={id} />
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.category}>{category}</p>
    </div>
  );
};

ProductCard.prototype = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

ProductCard.defaultProps = {
  alt: undefined,
};

export default ProductCard;

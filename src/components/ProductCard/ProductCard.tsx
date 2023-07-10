"use client";
import Image from "next/image";
import AddToFavourites from "@/components/AddToFavourites";

import styles from "./ProductCard.module.scss";
import { FC } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  alt?: string;
};

const ProductCard: FC<Product> = ({ id, title, description, category, image, alt }) => {
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

export default ProductCard;

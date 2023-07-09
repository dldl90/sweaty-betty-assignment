"use client";

import ProductCard from "@/components/ProductCard";
import LoadingCardStack from "@/components/LoadingCardStack";
import { Suspense } from "react";
import styles from "./ProductList.module.scss";

const ProductList = ({ products }) => {
  return (
    <>
      <div className={styles.controls}>
        <ul className={`${styles.controls__col} ${styles.navigation}`}>
          <li className={styles.controls__active}>
            <a href="">
              <span>Model view</span>
            </a>
          </li>
          <li>
            <a href="">Product view</a>
          </li>
        </ul>

        <div className={`${styles.controls__col} ${styles.pagination}`}>
          <p>
            1 - {products.length} of {products.length} results
          </p>
          <div className={styles.pagination__pageControl}>
            <button aria-label="Prev page of products" disabled>
              <span className={`${styles.arrow} ${styles.arrow__left}`} />
            </button>
            <p>1/3</p>
            <button aria-label="Next page of products">
              <span className={`${styles.arrow} ${styles.arrow__right}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Added supspense for proof of concept of when the page of products needs to update on pagination */}
      <Suspense fallback={<LoadingCardStack />}>
        <div className={styles.productList}>
          {products.map(({ id, title, price, description, category, image }, i) => {
            return (
              <ProductCard
                key={`productlist-product-${id}-${title}`}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}
        </div>
      </Suspense>
    </>
  );
};

export default ProductList;

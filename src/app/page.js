import styles from "./page.module.scss";
import Heading from "@/components/Heading";
import ProductList from "@/components/ProductList";
import getProducts from "@/http/getProducts";

const ProductListingPage = async () => {
  const products = await getProducts();

  return (
    <main className={styles.main}>
      <Heading
        title="All Clothing"
        subtitle={`Discover Sweaty Betty's range of beautiful, technical bum-sculpting leggings, yoga pants, jumpers sports bras
          a more. shop sweaty Betty now`}
      />

      <ProductList products={products} />
    </main>
  );
};

export default ProductListingPage;

import HeartSvg from "../svg/HeartSvg";

import styles from "./AddToFavourites.module.scss";

const AddToFavourites = ({ id }) => {
  const handleFavouritesReq = () => {
    // As this is just a feature that hasnt been scoped out but exists in the design, this component would act as a placeholder
    // and typically I would add a ticket against this feature e.g. TODO(jira-1234)// against this just as a reference for the technical debts.
    console.log(id);
  };
  return (
    <button className={styles.favouriteButton} aria-label="Add to favourites" onClick={handleFavouritesReq}>
      <HeartSvg aria-hidden />
      <span>Add to favourites</span>
    </button>
  );
};

export default AddToFavourites;

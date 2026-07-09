import { products } from "./product";

export const getVisibleProducts = (
  selectedCategories,
  selectedRatings
) => {
  return products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const ratingMatch =
      selectedRatings.length === 0 ||
      selectedRatings.some(
        (rating) => product.rating >= rating
      );

    return categoryMatch && ratingMatch;
  });
};
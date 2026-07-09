import { useState } from "react";
import ProductListing from "./components/ProductListing";
import CategoryFilter from "./components/CategoryFilter";
import RatingFilter from "./components/RatingFilter";
import { getVisibleProducts } from "./data/product-filter";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([]);

  const onChangeCategoryHandler = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    }

  }
  const onChangeRatingHandler = (rating, isChecked) => {
    if (isChecked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      setSelectedRatings(
        selectedRatings.filter((r) => r !== rating)
      );
    }
  };
  const products = getVisibleProducts(
    selectedCategories,
    selectedRatings
  );
  return (
    <div className="grid grid-cols-12 gap-2">
      {/* filters  */}
      <div className="col-span-2 border p-3">
        <CategoryFilter
          selectedCategories={selectedCategories}
          onChangeCategoryHandler={onChangeCategoryHandler}
        />
        {/* rating filter */}
        <RatingFilter
  selectedRatings={selectedRatings}
  onChangeRatingHandler={onChangeRatingHandler}
/>
      </div>

      {/* products listing  */}
      <div className="col-span-10">
        <ProductListing products={products} />
      </div>
    </div>
  )
}

export default App;


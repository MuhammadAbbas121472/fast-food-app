import { ratingTitle } from "../data/rating";
import Checkbox from "./Checkbox";

function RatingFilter({
  selectedRatings,
  onChangeRatingHandler,
}) {
  return (
    <div className="mt-5">
      <h2 className="text-xl font-bold mb-2">Rating</h2>

      {ratingTitle.map((rating) => (
        <Checkbox
          key={rating}
          category={rating}
          selectedCategories={selectedRatings}
          onChangeCategoryHandler={onChangeRatingHandler}
        />
      ))}
    </div>
  );
}

export default RatingFilter;
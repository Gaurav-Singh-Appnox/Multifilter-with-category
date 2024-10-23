import { useDispatch, useSelector } from "react-redux";
import { setGenre, applyFilters } from "../store/filterSlice";

const BookFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filterSlice.filters);

  const handleGenreChange = (e) => {
    dispatch(setGenre(e.target.value));
    dispatch(applyFilters());
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <label>Genre:</label>
        <select value={filters.genre || ""} onChange={handleGenreChange}>
          <option value="">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Dystopian">Dystopian</option>
          {/* Add other genres */}
        </select>
      </div>
    </div>
  );
};

export default BookFilters;

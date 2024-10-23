import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setColor,
  setStorage,
  applyFilters,
} from "../store/filterSlice";

const MobileFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filterSlice.filters);

  const handleBrandChange = (e) => {
    dispatch(setBrand(e.target.value));
    dispatch(applyFilters());
  };

  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
    dispatch(applyFilters());
  };

  const handleStorageChange = (e) => {
    dispatch(setStorage(e.target.value));
    dispatch(applyFilters());
  };

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <label>Brand:</label>
        <select value={filters.brand || ""} onChange={handleBrandChange}>
          <option value="">All</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Google">Google</option>
          {/* Add other brands */}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select value={filters.color || ""} onChange={handleColorChange}>
          <option value="">All</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          {/* Add other colors */}
        </select>
      </div>
      <div>
        <label>Storage:</label>
        <select value={filters.storage || ""} onChange={handleStorageChange}>
          <option value="">All</option>
          <option value="128GB">128GB</option>
          <option value="256GB">256GB</option>
          {/* Add other storage options */}
        </select>
      </div>
    </div>
  );
};

export default MobileFilters;

import { useDispatch, useSelector } from "react-redux";
import { setBrand, setColor, applyFilters } from "../store/filterSlice";

const HomeApplianceFilters = () => {
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

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <label>Brand:</label>
        <select value={filters.brand || ''} onChange={handleBrandChange}>
          <option value="">All</option>
          <option value="Samsung">Samsung</option>
          <option value="LG">LG</option>
          {/* Add other brands */}
        </select>
      </div>
      <div>
        <label>Color:</label>
        <select value={filters.color || ''} onChange={handleColorChange}>
          <option value="">All</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          {/* Add other colors */}
        </select>
      </div>
    </div>
  );
};

export default HomeApplianceFilters;

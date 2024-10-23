import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filterSlice.category); // Get the current category from the state

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <header className="w-full">
      <div className="flex justify-between w-[90vw] mx-auto gap-10">
        <p className="text-4xl font-bold text-blue-700">Logo</p>
        <div className="flex gap-6 items-center">
          <label htmlFor="category">Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="Mobile">Mobile</option>
            <option value="Books">Books</option>
            <option value="Home Appliances">Home Appliances</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

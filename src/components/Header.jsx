import { useDispatch } from "react-redux";
import { setCategory } from "../store/producSlice";

const Header = () => {
  const Dispatch = useDispatch();
  const handleChange = (e) => {
    Dispatch(setCategory(e.target.value));
  };
  return (
    <header className="w-[90%] mx-auto flex justify-between items-center py-4">
      <div>
        <h1 className="text-4xl font-bold">Logo</h1>
      </div>
      <div className="flex gap-4 items-center">
        <label htmlFor="category">Category</label>
        <select id="category" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Books">Books</option>
          <option value="Appliances">Appliances</option>
        </select>
      </div>
    </header>
  );
};
export default Header;
















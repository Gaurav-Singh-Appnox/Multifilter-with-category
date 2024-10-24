import { useDispatch, useSelector } from "react-redux";
import { setColors, setBrands } from "../store/applianceSlice"; 

const ApplianceFilter = () => {
  const dispatch = useDispatch();
  const selectedColors = useSelector((state) => state.applianceSlice.colors);
  const selectedBrands = useSelector((state) => state.applianceSlice.brands);

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setColors([...selectedColors, value]));
    } else {
      dispatch(setColors(selectedColors.filter((c) => c !== value)));
    }
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setBrands([...selectedBrands, value]));
    } else {
      dispatch(setBrands(selectedBrands.filter((b) => b !== value)));
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label>Color</label>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="checkbox"
              value="Red"
              onChange={handleColorChange}
              checked={selectedColors.includes("Red")}
            />{" "}
            Red
          </label>
          <label>
            <input
              type="checkbox"
              value="Blue"
              onChange={handleColorChange}
              checked={selectedColors.includes("Blue")}
            />{" "}
            Blue
          </label>
          <label>
            <input
              type="checkbox"
              value="Black"
              onChange={handleColorChange}
              checked={selectedColors.includes("Black")}
            />{" "}
            Black
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label>Brand</label>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="checkbox"
              value="LG"
              onChange={handleBrandChange}
              checked={selectedBrands.includes("LG")}
            />{" "}
            LG
          </label>
          <label>
            <input
              type="checkbox"
              value="Samsung"
              onChange={handleBrandChange}
              checked={selectedBrands.includes("Samsung")}
            />{" "}
            Samsung
          </label>
          <label>
            <input
              type="checkbox"
              value="GE"
              onChange={handleBrandChange}
              checked={selectedBrands.includes("GE")}
            />{" "}
            Samsung
          </label>
        </div>
      </div>
    </div>
  );
};

export default ApplianceFilter;

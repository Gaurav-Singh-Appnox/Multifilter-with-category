import { useDispatch, useSelector } from "react-redux";
import { setBrand, setColor, setStorage } from "../store/mobileSlice";

const MobileFilter = () => {
  const dispatch = useDispatch();
  const { brands, colors, storage } = useSelector((state) => state.mobileSlice);

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setBrand([...brands, value]));
    } else {
      dispatch(setBrand(brands.filter((b) => b !== value)));
    }
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    // console.log("value", value);
    // console.log("checked", checked);
    if (checked) {
      dispatch(setColor([...colors, value]));
    } else {
      dispatch(setColor(colors.filter((c) => c !== value)));
    }
  };

  const handleStorageChange = (event) => {
    const { value, checked } = event.target;

    console.log("storage selected");
    console.log(value, checked);
    if (checked) {
      dispatch(setStorage([...storage, value]));
      console.log("storage", storage);
    } else {
      dispatch(setStorage(storage.filter((s) => s !== value)));
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label>Brand</label>
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" value="Apple" onChange={handleBrandChange} />{" "}
            Apple
          </label>
          <label>
            <input
              type="checkbox"
              value="Samsung"
              onChange={handleBrandChange}
            />{" "}
            Samsung
          </label>
          <label>
            <input type="checkbox" value="Oppo" onChange={handleBrandChange} />{" "}
            Oppo
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Color</label>
        <div className="flex flex-col gap-2">
          <label>
            <input type="checkbox" value="Red" onChange={handleColorChange} />{" "}
            Red
          </label>
          <label>
            <input type="checkbox" value="Blue" onChange={handleColorChange} />{" "}
            Blue
          </label>
          <label>
            <input type="checkbox" value="Black" onChange={handleColorChange} />{" "}
            Black
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label>Storage</label>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="checkbox"
              value="128GB"
              onChange={handleStorageChange}
            />{" "}
            128GB
          </label>
          <label>
            <input
              type="checkbox"
              value="256GB"
              onChange={handleStorageChange}
            />{" "}
            256GB
          </label>
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;

import { useSelector } from "react-redux";
import { selectFilteredData } from "./store/selectors";
import MobileFilters from "./components/HomeMobileFilters";
import BookFilters from "./components/HomeBookFilters";
import HomeApplianceFilters from "./components/HomeApplianceFilters";

function App() {
  const filteredData = useSelector(selectFilteredData);
  console.log(filteredData);
  const category = useSelector((state) => state.filterSlice.category);

  return (
    <div className="flex w-[90vw] mx-auto gap-10 mt-12">
      <div className="w-[20%] bg-red-100 h-[400px] flex flex-col gap-4 p-4">
        {category === "Mobile" && <MobileFilters />}
        {category === "Books" && <BookFilters />}
        {category === "Home Appliances" && <HomeApplianceFilters />}
      </div>
      <div className="flex flex-wrap gap-8 w-[80%] bg-red-300">
        {filteredData.length === 0 ? (
          <h1>No product found</h1>
        ) : (
          filteredData.map((item) => (
            <div
              className="w-64 max-w-[420px] min-h-[150px] bg-slate-300 p-4"
              key={item.id}
            >
              <p>{item}</p>
              {/* <p>Price: {item.price || "N/A"}</p>
              <p>{item.color || item.genre || "N/A"}</p>
              <p>{item.model || item.storage || item.author || "N/A"}</p> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

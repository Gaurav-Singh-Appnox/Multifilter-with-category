import { useSelector } from "react-redux";
import MobileFilter from "../components/MobileFilter";
import BookFilter from "../components/BookFilter";
import ApplianceFilter from "../components/ApplianceFilter";

const Home = () => {
  let filteredData = useSelector(
    (state) => state.productSlice.filteredProducts
  );
  const category = useSelector((state) => state.productSlice.category);
  const mobileColors = useSelector((state) => state.mobileSlice.colors);
  const mobileBrands = useSelector((state) => state.mobileSlice.brands);
  const mobilestorage = useSelector((state) => state.mobileSlice.storage);
  const bookGenre = useSelector((state) => state.bookSlice.genres);
  const applianceColors = useSelector((state) => state.applianceSlice.colors);
  const applianceBrands = useSelector((state) => state.applianceSlice.brands);

  const mobileData = filteredData.filter((product) => {
    const colorMatch =
      mobileColors.length === 0 || mobileColors.includes(product.color);
    const brandMatch =
      mobileBrands.length === 0 || mobileBrands.includes(product.brand);
    const storageMatch =
      mobilestorage.length === 0 || mobilestorage.includes(product.storage);
    return colorMatch && brandMatch && storageMatch;
  });

  const bookData = filteredData.filter((product) => {
    const genreMatch =
      bookGenre.length === 0 || bookGenre.includes(product.genre);
    return genreMatch;
  });

  const applianceData = filteredData.filter((product) => {
    const colorMatch =
      applianceColors.length === 0 || applianceColors.includes(product.color);
    const brandMatch =
      applianceBrands.length === 0 || applianceBrands.includes(product.brand);
    return colorMatch && brandMatch;
  });

  filteredData =
    category === "Mobiles"
      ? mobileData
      : category === "Books"
      ? bookData
      : applianceData;

  console.log("filterData ", filteredData);
  return (
    <main className="w-full  flex gap-4 md:gap-8">
      {category !== "All" && (
        <div className="w-[30%] lg:w-[20%] bg-slate-400 min-h-96 max-h-screen overflow-auto p-4 ">
          {(category === "Mobiles" && <MobileFilter />) ||
            (category === "Books" && <BookFilter />) ||
            (category === "Appliances" && <ApplianceFilter />)}
        </div>
      )}
      <div
        className={`${
          category === "All" ? "w-[100%]" : "w-[70%]"
        } flex flex-wrap gap-2 md:gap-6 justify-between items-center bg-slate-300 p-4`}
      >
        {filteredData.map((product, index) => {
          return (
            <div key={index} className="min-w-40 min-h-40 bg-slate-200">
              <div className="p-2">
                <h2 className="font-bold text-lg">
                  {" "}
                  {category === "Books"
                    ? `Title : ${product.title}`
                    : `Model : ${product.model}`}
                </h2>
                <p className="text-sm">Price: ₹{product.price}</p>
                <p className="text-sm">
                  {category === "Mobiles"
                    ? `Storage : ${product.storage}`
                    : null}
                </p>
                <p className="text-sm">
                  {category === "Books"
                    ? `Author : ${product.author}`
                    : `Brand : ${product.brand}`}
                </p>
                <p className="text-sm">
                  {category === "Books"
                    ? `Genre : ${product.genre}`
                    : `Color : ${product.color}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Home;

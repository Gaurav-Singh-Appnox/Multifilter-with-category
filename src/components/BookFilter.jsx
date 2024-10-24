import { useDispatch, useSelector } from "react-redux";
import { setGenres } from "../store/bookSlice";

const BookFilter = () => {
  const dispatch = useDispatch();
  const selectedGenres = useSelector((state) => state.bookSlice.genres);

  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setGenres([...selectedGenres, value]));
    } else {
      dispatch(setGenres(selectedGenres.filter((g) => g !== value)));
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <label>Genre</label>
        <div className="flex flex-col gap-2">
          <label>
            <input
              type="checkbox"
              value="Young Adult"
              onChange={handleGenreChange}
              checked={selectedGenres.includes("Young Adult")}
            />{" "}
            Young Adult
          </label>
          <label>
            <input
              type="checkbox"
              value="Dystopian"
              onChange={handleGenreChange}
              checked={selectedGenres.includes("Dystopian")}
            />{" "}
            Dystopian
          </label>
          <label>
            <input
              type="checkbox"
              value="Historical Fiction"
              onChange={handleGenreChange}
              checked={selectedGenres.includes("Historical Fiction")}
            />{" "}
            Historical Fiction
          </label>
          <label>
            <input
              type="checkbox"
              value="Fiction"
              onChange={handleGenreChange}
              checked={selectedGenres.includes("Fiction")}
            />{" "}
            Fiction
          </label>
          <label>
            <input
              type="checkbox"
              value="Adventure"
              onChange={handleGenreChange}
              checked={selectedGenres.includes("Adventure")}
            />{" "}
            Adventure
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookFilter;

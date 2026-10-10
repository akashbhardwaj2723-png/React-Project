import { useDispatch } from "react-redux";
import { addCollection, addTost } from "../redux/features/collectionSlice";

export const ResultCard = ({ items }) => {
  const dispatch = useDispatch();
  let addToCollection = (items) => {
    dispatch(addCollection(items));
    dispatch(addTost());
  };
  return (
    <div className="w-full h-65 bg-white rounded-xl relative">
      <a target="_blank" className="h-full  " href={items.url}>
        {items.type == "photo" ? (
          <img
            src={items.thumbnale}
            alt={items.title}
            className="w-full h-full object-cover object-center rounded-xl"
          />
        ) : null}
        {items.type === "video" ? (
          <video
            loop
            autoPlay
            muted
            playsInline             
            preload="none"
            poster={items.thumbnail}
            src={items.src}
            className="w-full h-full object-cover  object-center rounded-xl"
          />
        ) : null}

        {items.type == "gif" ? (
          <img
            src={items.thumbnale}
            alt={items.title}
            className="w-full h-full object-center object-cover rounded-xl"
          />
        ) : null}
      </a>
      <div
        className="flex justify-between items-center absolute bottom-0 overflow-hidden h-[35%] w-full p-3"
        id="bottom"
      >
        <h2 className="text-sm sm:text-base bg-black/7 text-white h-14 drop-shadow-lg backdrop-blur-sm font-bold capitalize overflow-hidden rounded-lg p-1">
          {" "}
          {items.title}
        </h2>
        <br />
        <button
          type="button"
          onClick={() => {
            addToCollection(items);
          }}
          className="text-white bg-blue-500 px-2 sm:px-3 py-1 rounded cursor-pointer font-medium text-sm ml-2 sm:text-base active:scale-90 shrink-0"
        >
          Save
        </button>
      </div>
    </div>
  );
};

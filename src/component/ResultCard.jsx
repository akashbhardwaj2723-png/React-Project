import { useDispatch } from "react-redux";
import { addCollection, addTost } from "../redux/features/collectionSlice";

export const ResultCard = ({ items }) => {
  const dispatch = useDispatch();
  const downloadFile = async () => {
    try {
      const url = items.type === "video" ? items.src : items.thumbnale;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = items.title || "media";
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download error:", error);
      alert("Download failed. API may block cross-origin requests.");
    }
  };
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
            
            autoPlay
            loop
            
            playsInline
            preload="metadata"
            poster={items.thumbnail}
            src={items.src}
            className="w-full h-full object-cover object-center rounded-xl"
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
      <button
        type="button"
        onClick={() => addToCollection(items)}
        className="absolute top-3 right-3 z-10 text-white bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg cursor-pointer font-medium text-sm active:scale-95"
      >
        Save
      </button>
      <div
        className="flex items-end gap-2 absolute bottom-0 w-full p-3 bg-linear-to-t from-black/80 via-black/30 to-transparent"
        id="bottom"
      >
        <h2 className="text-xs sm:text-sm md:text-base text-white flex-1 min-w-0 line-clamp-2 font-semibold capitalize overflow-hidden rounded-lg p-2 bg-black/20 backdrop-blur-sm h-13">
          {" "}
          {items.title}
        </h2>
        <br />
        <button
          type="button"
          onClick={downloadFile}
          className="text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg cursor-pointer font-medium text-sm active:scale-95 shrink-0"
        >
          Download
        </button>
      </div>
    </div>
  );
};

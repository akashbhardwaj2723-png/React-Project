import { useSelector } from "react-redux";
import { CollectionCard } from "../component/collectionCard";
import { useDispatch } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
export const CollectionPages = () => {
  const collection = useSelector((state) => state.collection.items);
      const dispatch = useDispatch();
      let clearAll =()=>{
        dispatch(clearCollection())
      }


  return (
    <div>
      <div className="min-h-screen bg-gray-950 p-3 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between        items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">My Collection</h1>
          <button className="bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold cursor-pointer px-4 py-3 text-sm sm:text-base active:scale-95 transition w-full sm:w-auto"
          onClick={()=>{
            clearAll()
          }}
          >
            Clear Collection
          </button>
        </div>
        {collection.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            No items saved yet. Go to Home and click Save!
          </p>
        ) : (
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {collection.map((item, idx) => (
              <CollectionCard key={item.id || idx} items={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

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
      <div className="min-h-screen bg-gray-950 p-6">
        <div className=" flex justify-between ">
          <h1 className="text-3xl font-bold text-white mb-6">My Collection</h1>
          <button className="bg-red-600 rounded-xl font-bold  curser-pointer px-2 active:scale-50 text-xl h-12 py-2"
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
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
            {collection.map((item, idx) => (
              <CollectionCard key={item.id || idx} items={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

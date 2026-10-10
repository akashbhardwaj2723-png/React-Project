import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlise";

const Tabs = ()=>{
  const tabs = ["photos" ,"video", "gif"]

  let dispatch = useDispatch();
  let activeTab = useSelector((state)=>state.search.activeTab)
  return(
    <div className="flex gap-5 p-10">
      {
        tabs.map((elem , idx)=>{
       return <button className={`${activeTab==elem ? "bg-blue-600" :"bg-gray-400"} text-white px-5 rounded-xl curser:pointer active:scale-90  py-2`} key={idx}
       onClick={()=>{
        dispatch(setActiveTab(elem))
       }}
       >
        {elem}
       </button>
        })
      }
    </div>
  )
}
export default Tabs ;
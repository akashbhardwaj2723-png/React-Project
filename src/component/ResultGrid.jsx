import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoding,
  setResults,
  setQuery,
} from "../redux/features/searchSlise";

import { fatchVideo, fatchPhoto, fatchGif } from "../api/MediaApi";
import { useEffect } from "react";
import { ResultCard } from "./ResultCard";

const ResultGrid = () => {
  let dispatch = useDispatch();

  const { query, activeTab, results, loding, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query.trim()) return;
      const getData = async () => {
        try {
          dispatch(setLoding());
          let data = [];
          if (activeTab == "photos") {
            let responce = await fatchPhoto(query);
            data = responce.results.map((items) => ({
              id: items.id,
              type: "photo",
              title: items.alt_description,
              thumbnale: items.urls.small,
              src: items.urls.full,
              url: items.urls.raw,
            }));

            dispatch(setResults(data));
          }
          if (activeTab == "video") {
            let response = await fatchVideo(query);
          
            data = response.hits.map((item) => ({
              id: item.id,
              type: "video",
              title: item.title,
              thumbnail: item.poster,
             src: item.urls.mp4,
              url: item.urls.mp4,
              
            }));

            dispatch(setResults(data));
          }
          if (activeTab == "gif") {
            let response = await fatchGif(query);
            data = response.data.map((items) => ({
              id: items.id,
              type: "gif",
              title: items.title,
              thumbnale: items.images.downsized.url,
              src: items.images.original.url,
              url: items.url,
            }));

            dispatch(setResults(data));
          }
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );
  if (error) return <h1>Error</h1>;
  if (loding) return <h1>Loading...</h1>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3 sm:p-5">
      {results.map((items) => {
        return (
          <div key={items.id}>
            <ResultCard items={items} />
          </div>
        );
      })}
    </div>
  );
};
export default ResultGrid;

import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const COVERR_KEY = import.meta.env.VITE_COVERR_KEY;
console.log("COVERR_KEY =", COVERR_KEY);

export async function fatchPhoto(query ,page=1 , per_page=20){
 let responce= await axios.get('https://api.unsplash.com/search/photos',{
  params:{query , page,per_page},
  headers:{
    Authorization: `Client-ID ${UNSPLASH_KEY}`,
  },
 })
   return responce.data;


}


export async function fatchGif(query, page = 1, per_page = 20) {

  let responce = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: GIPHY_KEY,
      q: query,
      limit: per_page,
      offset: (page - 1) * per_page,
    },
  });

  return responce.data;
}


export async function fatchVideo(query, page = 1, per_page = 20) {
  const response = await axios.get("https://api.coverr.co/videos", {
    params: {
      query,
      page: page - 1, // Coverr page numbering starts at 0
      page_size: per_page,
      urls: true, // include video URLs in results
    },
    headers: {
      Authorization: `Bearer ${COVERR_KEY}`,
    },
  } );

  return response.data;
}

import axios from 'axios';

export const getPlacesData= async(type,sw,ne)=> {
    try{
        const {data: {data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'a2b67d9b75mshf58cf752bdc07d2p1244b0jsndc5c3a3a9a00',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }   catch(error){
        console.log(error);
      }
}
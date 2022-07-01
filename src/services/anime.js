import Axios from "@/libs/axios.js";
import { URL_ANIME, URL_BASE } from "../libs/urlConsts.js";

/**
 * Class AnimeService with statics methods to avoid instance
 */
class AnimeService {
    /**
     * compose the url with the query from search input and send request to axios
     * @param {string} param query from navbar input
     * @returns A promise or throw an error
     */
    static async getList(param){
        try{
            if(!!param) {
                console.log('[Service][AnimeService][getList] Called getList with param', param);
                let query = encodeURI(param);
                return await Axios.getRequest(URL_ANIME, query);
            } else {
                console.log('[Service][AnimeService][getList] Called getList');
                return await Axios.getRequest(URL_ANIME);
            }
        }catch(e){
            console.error('[Service][AnimeService][getList] An error has occured when fetch anime list', e);
            throw new Error(e);
        }
    }

    /**
     * compose the url with the query from custom lists and send request to axios
     * @param {string} query query from lists to show custom datas 
     * @returns A promise or throw an error
     */
    static async getLists(query){
        try{
            console.log('[Service][AnimeService][getLists] Called get list with params', query);
            return await Axios.getRequest(URL_BASE, query);
        }catch(e){
            console.error('[Service][AnimeService][getLists] An error has occured when fetch anime list', e);
            throw new Error(e);
        }
    }
}

export default AnimeService;
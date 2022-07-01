import axios from "axios";

/**
 * Class axios with static methods for fetching datas
 */
class Axios {

    /**
     * Static method for fetch data
     * @param {string} URL  base url and route for correct fetching from service
     * @param {string} param string for custom serach from search input navbar
     * @returns A promise or throw an error
     */
    static async getRequest(URL ,param){

        let result;
        try{
            if(!!param) {
                console.log('[libs][axios] Called axios with param', param);
                result = await axios.get(URL + param);
            } else {
                console.log('[libs][axios] Called axios');
                result = await axios.get(URL);
            }
            return result;
        }catch(e){
            console.error('[libs][axios] An error has occured in axios lib', e);
            throw new Error(e);
        }
    }
}

export default Axios;
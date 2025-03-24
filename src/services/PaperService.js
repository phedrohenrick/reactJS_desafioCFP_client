import axios from 'axios';


const USER_API_BASE_URL = "https://hearty-patience-production.up.railway.app/api/paper";

class PaperService {

    getPapers(){
        return axios.get(USER_API_BASE_URL + '/list',{withCredentials: true});
       
    }

    createPaper(paper){
        return axios.post(USER_API_BASE_URL, paper);
    }

      getPaperById(paperId){
         return axios.get(USER_API_BASE_URL + '/' + paperId);
     }

     updatePaper(paperId, paper){
        return axios.put(USER_API_BASE_URL + "/update/" + paperId, paper);
    }

    deletePaper(paperId){
        return axios.delete(USER_API_BASE_URL + '/' + paperId);
    }
}

export default new PaperService()
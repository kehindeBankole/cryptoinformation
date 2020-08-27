import { fetch, success, fail , nextpage} from './type'
import Axios from 'axios'


const postperpae=5  

export const changepage =()=>{
    return{
        type : nextpage
    }
}
export const fetchrequest = () => {
    return {
        type: fetch
    }
}

export const requestsuccess = (data) => {
    return {
        type: success,
        payload: data
    }
}
export const requestfail = (err) => {
    return {
        type: fail,
        payload: err
    }
}

export const makeapicall = (currentpage) => {
    return (dispatch)=>{
        return Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${postperpae}&page=${currentpage}&sparkline=false`)
        .then((res) => dispatch(requestsuccess(res.data)))
        .catch((err) => dispatch(requestfail(err)))
    }       
 
}
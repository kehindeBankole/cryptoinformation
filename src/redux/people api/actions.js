import { fetch, success, fail } from './type'
import Axios from 'axios'

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

export const makeapicall = () => {
    return (dispatch)=>{
        return Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((res) => dispatch(requestsuccess(res.data)))
        .catch((err) => dispatch(requestfail(err)))
    }       
 
}
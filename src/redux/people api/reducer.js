import { fetch, success, fail , nextpage , prevpage } from './type'

const init = {
    data: [],
    load: true,
    err: '',
    currentpage : 1,
}

export const myReducer = (state = init, action) => {
    switch (action.type) {
        case fetch: return {
            // ...state,
            load: true
        }
        case success: return {
            ...state,
            data: action.payload,
            load: false
        }
        case fail: return {
            ...state,
            data: [],
            load: false,
            err: action.payload
        }
        case nextpage: return {
            ...state,
            data : [],
            load:true,
            err:'',
            currentpage: state.currentpage += 1
        }
        case prevpage: return {
            ...state,
            data : [],
            load:true,
            err:'',
            currentpage: state.currentpage -= 1
        }
        default: return state
    }
}
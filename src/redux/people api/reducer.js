import { fetch, success, fail , nextpage } from './type'

const init = {
    data: [],
    load: true,
    err: '',
    currentpage : 1
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
            currentpage: state.currentpage += 1
        }
        default: return state
    }
}
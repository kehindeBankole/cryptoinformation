import { fetch, success, fail } from './type'

const init = {
    data: [],
    load: true,
    err: ''
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
        default: return state
    }
}
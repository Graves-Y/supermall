import {request} from "./request";

export function getHomeMutidata() {
    return request({
        url:"/home/multidata"
    })
}

export function getNPSData(type,page) {
    return request({
        url:'',
        params:{
            type,
            page
        }
    })
}
import {requestNPS} from "./request";

export function getDetail(iid) {
    return requestNPS({
        url:"/detail",
        params:{
            iid
        }

    })
}
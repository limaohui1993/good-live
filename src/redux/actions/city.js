import { INIT_CITY,CHANGE_CITY } from "../constances";

export function initCity(cityName){
    return {
        type:INIT_CITY,
        cityName
    }
}
export function changeCity(cityName){
    return {
        type:CHANGE_CITY,
        cityName
    }
}
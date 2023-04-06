import { UPDATE_SEARCH} from "../constances";

export function updateSearch(search){
    return {
        type:UPDATE_SEARCH,
        search
    }
}
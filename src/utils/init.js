import store from "../redux/store"
import * as loginActions from "../redux/actions/login"

if(localStorage.getItem("goodlive")){
  let user=JSON.parse(localStorage.getItem("goodlive"))
  store.dispatch(loginActions.setLogin(user))
}
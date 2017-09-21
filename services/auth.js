import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://examen2-backend-ux.herokuapp.com/';
export default{
	login(body){
		return Vue.http.post(url+"login",body);
	},
	logout(){
		return Vue.http.get(url+"logout");
	}
}
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='http://localhost:8000/';
export default{
	buscarPosibles(){
		return Vue.http.get(url+'posibles');
	},
	crearPosible(body){
		return Vue.http.post(url+ 'crearPosible',body);
	},
	modificarPosible(params, payload){
		return Vue.http.put(url+'modificarPosible', params, payload);
	},
	borrarPosible(body){
		return Vue.http.delete(url+ 'borrarPosible',body);
	}
}
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='http://localhost:8000/';
export default{
	buscarUsuarios(){
		return Vue.http.get(url+'usuarios');
	},
	buscarUsuariosNombre(params){
		return Vue.http.get(url+ 'nombreUsuario/' + params);
	},
	crearUsuario(body){
		return Vue.http.post(url+ 'crearUsuario',body);
	},
	modificarUsuario(params, payload){
		return Vue.http.put(url+'modificarUsuario', params, payload);
	},
	borrarUsuario(body){
		return Vue.http.delete(url+ 'borrarUsuario',body);
	},
	agregarAmigo(body){
		return Vue.http.put(url+ 'agregarAmigo',params, payload);
	},
	borrarAmigo(body){
		return Vue.http.put(url+ 'borrarAmigo',params, payload);
	}
}
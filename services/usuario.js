import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

var url='https://examen2-backend-ux.herokuapp.com/';
export default{
	buscarUsuariosNombre(params){
		return Vue.http.get(url+'nombreUsuario/'+params);
	}
}
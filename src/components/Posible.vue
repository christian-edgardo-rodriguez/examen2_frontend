<template>
	<div>
		<div class="row">
           <!--form class="col s12">
                <p>Seleccione</p>
                <div class="input-field col s12">
                   <input id="username" v-model="newNombre" type="text" class="validate">
                   <label for="username">Nombre</label>
                </div>
                <div class="input-field col s12">
                   <input id="username" v-model="newPeso" type="text" class="validate">
                   <label for="username">Apellido</label>
                </div>
                <div class="input-field col s12">
                	<form action="#">
	                    <p>
	                        <input v-on:click="local" name="group1" type="radio" id="test1" checked/>
	                        <label for="test1">Fisión</label>
	                    </p>
	                    <p>
	                        <input v-on:click="local" name="group1" type="radio" id="test2" />
	                        <label for="test2">Fusión</label>
	                    </p>
	                </form>
                </div>
                <div class="input-field col s12">
                   <input id="username" v-model="newHastaDonde" type="text" class="validate">
                   <label for="username">Usuario</label>
                </div>
                <div class="input-field col s12">
                   <input id="password" v-model="newEnergia" type="password" class="validate">
                   <label for="password">Contraseña</label>
                </div>
                </div>
                <div class="col s12 right-align m-t-sm">
                   <a class="waves-effect waves-grey btn-flat">LogIn</a>
                   <a class="waves-effect waves-light btn teal" v-on:click="registrarse">sign up</a>
                </div>
           </form>
       </form-->
      </div>
	</div>
</template>

<script>
//import posibleService from '../services/posible'
    export default {
        name:'Posible'
    }/*,
    data () {
        return {
            user:{},
            newEnergia:'',
            newNombre:'',
            newHastaDonde:'',
            newPeso:'',
            local:'Fisión'
        }
    }, 
    methods: {
    	registrarse(){

	        userService.createUser({nombre:this.newNombre,hastaDonde:this.newHastaDonde, tipo:this.local:peso:this.newPeso, energia:.this.newEnergia}).then(response=>{
	            this.user = response.data[0];
	        });
	        this.newEnergia="",
            this.newNombre="",
            this.newHastaDonde:'',
            this.newPesar:'',
            this.local: 'Fision'
                
            }
    }*/
</script>
<template>
  <div id="app">
    <div v-show="!scope"> 
            <div style="background-image:url('static/images/kp-iloveimg-resized.png'); height:662px; opacity: 0.9;">
                <div class="mn-content valign-wrapper">
                <main class="mn-inner container" >
                    <div class="valign">
                          <div class="row">
                              <div class="col s12 m6 l4 offset-l4 offset-m3">
                                  <div class="card white darken-1">
                                    <div class="input-field col s12 center">
                                        <p class="center login-form-text">VIVA COREA DEL NORTE! FUERA TRUMP!</p>
                                      </div>
                                      <div class="card-content ">
                                          <span class="card-title">Login</span>
                                           <div class="row">
                                               <form class="col s12">
                                                   <div class="input-field col s12">
                                                       <input id="username" v-model="nombreUsuario" type="text" class="validate">
                                                       <label for="username">Usuario</label>
                                                   </div>
                                                   <div class="input-field col s12">
                                                       <input id="password" v-model="contraseña" type="password" class="validate">
                                                       <label for="password">Contraseña</label>
                                                   </div>
                                                   <div class="col s12 right-align m-t-sm">
                                                       <a v-on:click = "login" class="waves-effect waves-light btn teal">sign in</a>
                                                   </div>
                                               </form>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
    <div v-show="scope==='admin' " class="mn-content fixed-sidebar">
        <header class="mn-header navbar-fixed">
            <nav class="black">
                <div class="nav-wrapper row">
                    <section class="material-design-hamburger navigation-toggle">
                        <a href="javascript:void(0)" data-activates="slide-out" class="show-on-large material-design-hamburger__icon reverse-icon"><span class="material-design-hamburger__layer"></span></a>
                    </section>
                    <div class="header-title col s3 m3"><span class="chapter-title">Rapi Potra</span></div>
                    <form class="left search col s6 hide-on-small-and-down">
                        <div class="input-field"><input id="search" type="search" placeholder="Search" autocomplete="off"> <i class="material-icons search-icon">search</i></div>
                        <a href="javascript: void(0)" class="close-search"><i class="material-icons">close</i></a></form>
                </div>
            </nav>
        </header>
        <div class="search-results" style="display: none;">
            <div class="container search-container">
                <div class="row">
                    <div class="col s12 search-head">
                        <div class="row">
                            <div class="col s12">
                                <div class="left">
                                    <p class="search-results-title">Quick search results</p>
                                    <p class="search-filter left"><input type="checkbox" id="filled-in-box" checked="checked" class="filled-in">
                                        <label
                                            for="filled-in-box">Google search</label>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="res-not-found" style="display: none;">No results found</div>
                    </div>
                    <div class="col s12 m4 search-result-container" style="display: none;">
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><img src="assets/images/profile-image-1.png" alt="" class="circle responsive-img z-depth-1"></div>
                                <div class="col s9"><span class="search-result-text">
                                          Search <span class="search-text search-result-highlight"></span><br><span class="secondary-search-text">Last active 2 days ago</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><img src="assets/images/profile-image-3.jpg" alt="" class="circle responsive-img z-depth-1"></div>
                                <div class="col s9"><span class="search-result-text">
                                          News about <span class="search-text search-result-highlight"></span><br><span class="secondary-search-text">23 Blogs</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><img src="assets/images/profile-image.png" alt="" class="circle responsive-img z-depth-1"></div>
                                <div class="col s9"><span class="search-result-text">
                                          Tom King (Works at <span class="search-text search-result-highlight"></span>)<br>                                    <span class="secondary-search-text">Avaible for freelance work</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 search-result-container" style="display: none;">
                        <div class="card card-transparent ">
                            <div class="row valign-wrapper">
                                <div class="col s3"><span class="z-depth-1 circle search-circle indigo lighten-1">F</span></div>
                                <div class="col s9"><span class="search-result-text"><span class="search-text search-result-highlight"></span>                                    on Facebook
                                    <br><span class="secondary-search-text"><a href="#">View website</a></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><span class="z-depth-1 circle search-circle light-blue lighten-1">T</span></div>
                                <div class="col s9"><span class="search-result-text"><span class="search-text search-result-highlight"></span>                                    on Twitter
                                    <br><span class="secondary-search-text"><a href="#">View website</a></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><span class="z-depth-1 circle search-circle red darken-1">G</span></div>
                                <div class="col s9"><span class="search-result-text">
                                          Google+ <span class="search-text search-result-highlight"></span><br><span class="secondary-search-text"><a href="#">View website</a></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 search-result-container" style="display: none;">
                        <div class="card card-transparent">
                            <div class="card-content first">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui<span class="search-text search-result-highlight"></span>                                    quis.</p>
                            </div>
                            <div class="card-action"><span class="grey-text">Yesterday, 4:56 PM</span></div>
                        </div>
                        <div class="card card-transparent">
                            <div class="card-content">
                                <p>Sunt in culpa qui <span class="search-text search-result-highlight"></span> officia deserunt
                                    mollit anim id est laborum. officia deserunt mollit anim id est laborum officia deserunt
                                    mollit anim</p>
                            </div>
                            <div class="card-action"><span class="grey-text">27 January 2016</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aside id="slide-out" class="side-nav white fixed">
            <div class="side-nav-wrapper">
                <div class="sidebar-profile">
                    <div class="sidebar-profile-image"><img v-bind:src="user.imagen" alt="" class="circle"></div>
                    <div class="sidebar-profile-info">
                        <p>{{user.nombre}}</p> <span>{{user.nombreUsuario}}</span></div>
                </div>
                <ul data-collapsible="accordion" class="sidebar-menu collapsible collapsible-accordion">
                    <router-link to='/Amigos'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i aria-hidden="true" class="fa fa-futbol-o material-icons"></i>Eventos</a></li>
                    </router-link>
                    <router-link to='/Posible'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">group</i>Amigos</a></li>
                    </router-link>
                    <li class="no-padding"><a v-on:click="logout" class="waves-effect waves-grey active"><i class="material-icons">exit_to_app</i>Cerrar Sesion</a></li>
                    
                </ul>
            </div>
        </aside>
        <main class="mn-inner inner-active-sidebar">
            <div class="middle-content" >
            <router-view></router-view>        
            </div>
        </main>
    </div>
        <main class="mn-inner inner-active-sidebar">
            <div class="middle-content" >
            <router-view></router-view>        
            </div>
        </main>
    </div>
</div>
  </div>
    
</template>

<script>
    import userService from '../services/usuario'
    import posibleService from '../services/posible'
    import authService from '../services/auth'

    export default {
        name: 'app',
        data () {
            return {
                user:{},
                nombreUsuario:'',
                contraseña:'',
                scope:sessionStorage.scope,
                signIn:false,
            }
        },
        // sockets: {
        //     connect: function(){
        //         console.log('2')
        //     },
        //     getMessage: function(val){
        //         console.log(val);
        //     }
        // },
        methods:{
            login(){
	            var body={nombreUsuario:this.nombreUsuario,contraseña:this.contraseña};
                authService.login(body).then(response=>{
                    if(response.body !='usuario no existe'){
                        sessionStorage.rapiPotra= response.body.nombreUsuario;
                        sessionStorage.scope=response.body.scope[0];
                        this.scope=response.body.scope[0];
                        console.log(sessionStorage.scope);
                        console.log(sessionStorage.rapiPotra);
                        this.profileInfo();
                    }/*else{
                        authService.loginLocal(body).then(response=>{
                            if(response.body !='usuario no existe'){
                                sessionStorage.rapiPotra= response.body.nombreUsuario;
                                sessionStorage.scope=response.body.scope[0];
                                this.scope=response.body.scope[0];
                                console.log(sessionStorage.scope);
                                console.log(sessionStorage.rapiPotra);
                                // this.profileInfo();
                                console.log("entro a locales");
                            }else{
                                console.log("");
                                console.log("No existe en ninguno");
                            }
                        });
                    }*/
                });
                this.nombreUsuario='';
                this.contraseña='';
            },
            logout(){
                sessionStorage.removeItem('rapiPotra');
                sessionStorage.removeItem('scope');
                this.scope=sessionStorage.scope;
                console.log(sessionStorage.scope);
                console.log(sessionStorage.rapiPotra);
                console.log(this.scope);
            },
            profileInfo(){
                
                userService.buscarUsuariosNombre(sessionStorage.rapiPotra).then(response=>{
                    //console.log(response.data[0]);
                    this.user = response.data[0];
                }); 
                /*var chatItems=[];
                conversacionService.getConversacion("?user1="+sessionStorage.rapiPotra).then(response=>{
                    response.data.forEach(function(element) {
                        userService.getUsers("users?nombreUsuario="+element.user2).then(response=>{
                            var chatItem={
                                nombreUsuario:response.data[0].nombreUsuario,
                                nombre: response.data[0].nombre,
                                apellido: response.data[0].apellido,
                                imagen: response.data[0].imagen,
                                mensaje: element.mensajes[element.mensajes.length-1]
                                };
                                chatItems.push(chatItem);
                        });
                    });
                    this.chat = chatItems;
                    console.log();
                });*/ 
            },
        } ,
        beforeMount(){
            /*const socket = io('http://localhost:8000',{ forceNew: true });
            socket.emit('getMessage','hola');
            socket.on('getMessage',function(val){
                console.log(val);
            });*/
            console.log(sessionStorage.rapiPotra);
            if(sessionStorage.rapiPotra){
                if(sessionStorage.scope =='regular'){
                    this.profileInfo();
                }else{

                }
                
            }
        }
    }
</script>
  
<style>
  .router{
    display: inline-block; 
  }
</style>

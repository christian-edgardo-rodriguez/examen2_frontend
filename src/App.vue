<template>
  <div id="app">
    <div v-show="!scope">
        <div v-show="!signIn">
            <div style="background-image:url('static/images/soccer.gif'); height:662px; opacity: 0.9;">
                <div class="mn-content valign-wrapper">
                <main class="mn-inner container" >
                    <div class="valign">
                          <div class="row">
                              <div class="col s12 m6 l4 offset-l4 offset-m3">
                                  <div class="card white darken-1">
                                    <div class="input-field col s12 center">
                                        <img src="static/images/balon.png" alt="" class="circle responsive-img valign profile-image-login">
                                        <p class="center login-form-text">Rapi Potra</p>
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
                                                       <router-link to= '/sign-in'><a v-on:click= "signIn=true" class="waves-effect waves-grey btn-flat">sign up</a></router-link>
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
        <div v-show="signIn">
            <div style="background-image:url('static/images/soccer-iloveimg-resized.gif'); height:690px; opacity: 0.9;">
                <div class="mn-content valign-wrapper">
                <main class="mn-inner container" >
                    <div class="valign">
                          <div class="row">
                              <div class="col s12 m6 l4 offset-l4 offset-m3">
                                  <div class="card white darken-1">
                                    <div class="input-field col s12 center">
                                        <img src="static/images/balon.png" alt="" class="circle responsive-img valign profile-image-login">
                                        <p class="center login-form-text">Rapi Potra</p>
                                      </div>
                                      <div class="card-content ">
                                          <span class="card-title">Sign In</span>
                                           <div class="row">
                                               <!--form class="col s12">
                                                    <p>Seleccione</p>
                                                    <form action="#">
                                                        <p>
                                                            <input v-on:click="localBool" name="group1" type="radio" id="test1" checked/>
                                                            <label for="test1">Local</label>
                                                        </p>
                                                        <p>
                                                            <input v-on:click="usuarioBool" name="group1" type="radio" id="test2" />
                                                            <label for="test2">Usuario</label>
                                                        </p>
                                                    </form>
                                                    <div v-show="local">
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newLocalNombre" type="text" class="validate">
                                                       <label for="username">Nombre Local</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newLocalUsername" type="text" class="validate">
                                                       <label for="username">Usuario</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <input id="password" v-model="newLocalPassword" type="password" class="validate">
                                                       <label for="password">Contraseña</label>
                                                    </div>
                                                    </div-->
                                                    
                                                    <!--div v-show="!local"-->
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newUserNombre" type="text" class="validate">
                                                       <label for="username">Nombre</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newUserOcupacionPrevia" type="text" class="validate">
                                                       <label for="username">Ocupacion Previa</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newUserFechaNacimiento" type="text" class="validate">
                                                       <label for="username">Fecha de Nacimiento</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newUserPais" type="text" class="validate">
                                                       <label for="username">Pais Natal</label>
                                                    </div>
                                                    <p>Creencia</p>
                                                    <form action="#">
                                                        <p>
                                                            <input v-on:click="newUserCreencias='Católico'" name="group1" type="radio" id="test1" checked/>
                                                            <label for="test1">Católico</label>
                                                        </p>
                                                        <p>
                                                            <input v-on:click="newUserCreencias='Evangélico'" name="group1" type="radio" id="test2" />
                                                            <label for="test2">Evangélico</label>
                                                        </p>
                                                        <p>
                                                            <input v-on:click="newUserCreencias='Testigo de Jehova'" name="group1" type="radio" id="test3" />
                                                            <label for="test3">Testigo de Jehova</label>
                                                        </p>
                                                        <p>
                                                            <input v-on:click="newUserCreencias='Mormon'" name="group1" type="radio" id="test4" />
                                                            <label for="test4">Mormon</label>
                                                        </p>
                                                        <p>
                                                            <input v-on:click="newUserCreencias='Agnóstico'" name="group1" type="radio" id="test5" />
                                                            <label for="test5">Agnóstico</label>
                                                        </p>
                                                        <p>
                                                            <input v-on:click="newUserCreencias='Ninguno'" name="group1" type="radio" id="test6" />
                                                            <label for="test6">Ninguno</label>
                                                        </p>
                                                    </form>
                                                    <div class="input-field col s12">
                                                       <input id="username" v-model="newUserUsername" type="text" class="validate">
                                                       <label for="username">Usuario</label>
                                                    </div>
                                                    <div class="input-field col s12">
                                                       <input id="password" v-model="newUserPassword" type="password" class="validate">
                                                       <label for="password">Contraseña</label>
                                                    </div>
                                                    <!--/div-->
                                                    <div class="col s12 right-align m-t-sm">
                                                       <router-link to= '/login'><a v-on:click= "signIn=false" class="waves-effect waves-grey btn-flat">LogIn</a></router-link>
                                                       <a class="waves-effect waves-light btn teal" v-on:click="registrarse">sign up</a>
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
        </div>
    <div v-show="scope=='regular' " class="mn-content fixed-sidebar">
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
                    <!--ul class="right col s9 m3 nav-right-menu">
                        <li><a href="javascript:void(0)" data-activates="chat-sidebar" class="chat-button show-on-large"><i class="material-icons">email</i></a></li>
                        <li class="hide-on-small-and-down">
                            <a href="javascript:void(0)" data-activates="dropdown1" class="dropdown-button dropdown-right show-on-large"><i class="material-icons">notifications_none</i><span class="badge">4</span></a>
                            <ul id="dropdown1"
                                class="dropdown-content notifications-dropdown" style="width: 46px; opacity: 1; left: 988.75px; position: absolute; top: 0px; display: none;">
                                <li class="notificatoins-dropdown-container">
                                    <ul>
                                        <li class="notification-drop-title">Today</li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle cyan"><i class="material-icons">done</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Alan Grey</b> uploaded new theme</p><span>7 min ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle deep-purple"><i class="material-icons">cached</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Tom</b> updated status</p><span>14 min ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle red"><i class="material-icons">delete</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Amily Lee</b> deleted account</p><span>28 min ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle cyan"><i class="material-icons">person_add</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Tom Simpson</b> registered</p><span>2 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle green"><i class="material-icons">file_upload</i></div>
                                                    <div class="notification-text">
                                                        <p>Finished uploading files</p><span>4 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="notification-drop-title">Yestarday</li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle green"><i class="material-icons">security</i></div>
                                                    <div class="notification-text">
                                                        <p>Security issues fixed</p><span>16 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle indigo"><i class="material-icons">file_download</i></div>
                                                    <div class="notification-text">
                                                        <p>Finished downloading files</p><span>22 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle cyan"><i class="material-icons">code</i></div>
                                                    <div class="notification-text">
                                                        <p>Code changes were saved</p><span>1 day ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="hide-on-med-and-up"><a href="javascript:void(0)" class="search-toggle"><i class="material-icons">search</i></a></li>
                    </ul-->
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
        <!--aside id="chat-sidebar" class="side-nav white right-aligned" style="transform: translateX(0px);">
            <div class="side-nav-wrapper" style="padding-bottom: 0px;">
                <div class="col s12"></div>
                <div id="sidebar-chat-tab" class="col s12 sidebar-messages right-sidebar-panel active">
                    <p class="right-sidebar-heading">CHAT LIST</p>
                    <div class="chat-list">
                        <a href="javascript:void(0)" class="chat-message" >
                            <div  v-bind:id="item.nombreUsuario" v-on:click="pushToChat(item.nombreUsuario)" class="chat-item" v-for = "item in chat">
                                <div   class="chat-item-image"><img v-bind:src="item.imagen" alt="" class="circle"></div>
                                <div  class="chat-item-info">
                                    <p  class="chat-name">{{item.nombre}} {{item.apellido}} </p> <span  class="chat-message">{{item.mensaje.contenido}}</span></div>
                            </div>
                        </a>
                        
                        
                    </div>
                    <div class="chat-sidebar-options"><a href="#" class="left"><i class="material-icons">search</i></a></div>
                </div>
            </div>
        </aside>
        <aside id="chat-messages" class="side-nav white right-aligned" style="width: 320px; transform: translateX(100%);">   
            <p class="sidebar-chat-name">{{messages.nombre}} {{messages.apellido}}<a href="#" data-activates="chat-messages" class="chat-message-link"><i class="material-icons">keyboard_arrow_right</i></a></p>
            <div class="messages-container" >
                <div v-for = "item in messages.messages">
                    <div class="message-wrapper "  v-bind:class="item.de">
                        <div class="circle-wrapper"><img src="https://cdn-images-1.medium.com/max/1200/1*yeAO-nwsAqnzr7k-zoDkoQ.png" alt="" class="circle"></div>
                        <div class="text-wrapper">{{item.contenido}}</div>
                    </div>    
                </div>
            </div>
            <div class="message-compose-box">
                <div class="input-field"><input v-on:keyup.enter="enviarMensaje" v-model="msg" placeholder="Write message" id="message_compose" type="text"></div>
            </div>
        </aside-->
        <aside id="slide-out" class="side-nav white fixed">
            <div class="side-nav-wrapper">
                <div class="sidebar-profile">
                    <div class="sidebar-profile-image"><img v-bind:src="user.imagen" alt="" class="circle"></div>
                    <div class="sidebar-profile-info">
                        <p>{{user.nombre}}</p> <span>{{user.nombreUsuario}}</span></div>
                </div>
                <ul data-collapsible="accordion" class="sidebar-menu collapsible collapsible-accordion">
                    <router-link to='/add'>
                        <li class="no-padding active"><a class="waves-effect waves-grey active"><i class="material-icons">home</i>Inicio</a></li>
                    </router-link>
                    <router-link to='/add'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i aria-hidden="true" class="fa fa-futbol-o material-icons"></i>Eventos</a></li>
                    </router-link>
                    <router-link to='/update'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">group</i>Amigos</a></li>
                    </router-link>
                    <router-link to='/delete'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">settings</i>Configuracion</a></li>
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
    <!--div v-show="scope=='admin' " class="mn-content fixed-sidebar">
        <header class="mn-header navbar-fixed">
            <nav class="black">
                <div class="nav-wrapper row">
                    <section class="material-design-hamburger navigation-toggle">
                        <a href="javascript:void(0)" data-activates="slide-out" class="show-on-large material-design-hamburger__icon reverse-icon"><span class="material-design-hamburger__layer"></span></a>
                    </section>
                    <div class="header-title col s3 m3"><span class="chapter-title">Rapi Potra</span></div>
                </div>
            </nav>
        </header>
        <aside id="slide-out" class="side-nav white fixed">
            <div class="side-nav-wrapper">
                <div class="sidebar-profile">
                    <div class="sidebar-profile-image"><img src='' alt="" class="circle"></div>
                    <div class="sidebar-profile-info">
                        <p>x</p> <span>x</span></div>
                </div>
                <ul data-collapsible="accordion" class="sidebar-menu collapsible collapsible-accordion">
                    <router-link to='/perfil'>
                        <li class="no-padding active"><a class="waves-effect waves-grey active"><i class="material-icons">home</i>Perfil</a></li>
                    </router-link>
                    <router-link to='/eventos'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i aria-hidden="true" class="fa fa-futbol-o material-icons"></i>Eventos</a></li>
                    </router-link>
                    <router-link to='/configuracion'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">settings</i>Configuracion</a></li>
                    </router-link>
                    
                    <li class="no-padding"><a v-on:click="logout" class="waves-effect waves-grey active"><i class="material-icons">exit_to_app</i>Cerrar Sesion</a></li>
                    
                </ul>
            </div>
        </aside-->
        <main class="mn-inner inner-active-sidebar">
            <div class="middle-content" >
            <router-view></router-view>        
            </div>
        </main>
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
                /*messages:{},
                chat:[],
                msg:"",
                isConnected: false,
                socketMessage: '',*/
                scope:sessionStorage.scope,
                signIn:false,
                /*newLocalNombre:'',
                newLocalPassword:'',
                newLocalUsername:'',*/
                newUserOcupacionPrevia:'',
                newUserFechaNacimiento:'',
                newUserPais:'',
                newUserNombre:'',
                newUserPassword:'',
                newUserUsername:'',
                newUserCreencias:'',
                local:true
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
            localBool(){

                this.local=true;
                this.signInButton='';
            },
            usuarioBool(){
                this.local=false;
                this.signInButton='';
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
            /*pushToChat(id){
                conversacionService.getConversacion("?user1="+sessionStorage.rapiPotra+"&user2="+id).then(response=>{
                    //console.log(response.data[0]);
                    userService.getUsers("users?nombreUsuario="+response.data[0].user2).then(response2=>{
                        
                        this.messages= {nombreUsuario:response2.data[0].nombreUsuario ,nombre: response2.data[0].nombre, imagen:response2.data[0].imagen,apellido:response2.data[0].apellido, messages: response.data[0].mensajes};
                        this.messages.messages.forEach(function(element){
                            if(element.de == sessionStorage.rapiPotra){
                                element.de="me"
                            }else{
                                element.de="them"
                            }
                        });
                        
                    }); 
                });
            },
            enviarMensaje(){
                this.messages.messages.push({de:"me",contenido:this.msg});
                this.msg="";
                var newMessage={mensajes:[]};
                var otroUsuario= this.messages.nombreUsuario
                this.messages.messages.forEach(function(element){
                    if(element.de == "me"){
                        newMessage.mensajes.push({de:sessionStorage.rapiPotra,contenido:element.contenido});
                    }else{
                        newMessage.mensajes.push({de:otroUsuario,contenido:element.contenido});
                    }
                });
                this.chat.forEach(function(element){
                    if(element.nombreUsuario==otroUsuario){
                        element.mensaje= newMessage.mensajes[newMessage.mensajes.length-1]; 
                    }
                });
                const socket = io('http://localhost:8000');
                conversacionService.modifySock("?user1="+sessionStorage.rapiPotra+"&user2="+this.messages.nombreUsuario,newMessage).then(function(){
                    socket.emit('getMessage', {user1:sessionStorage.rapiPotra,user2:otroUsuario,mensaje: newMessage.mensajes[newMessage.mensajes.length-1].contenido});
                });
                conversacionService.modifySock("?user2="+sessionStorage.rapiPotra+"&user1="+this.messages.nombreUsuario,newMessage).then(function(){
                    socket.emit('getMessage', {user1:sessionStorage.rapiPotra,user2:otroUsuario,mensaje: newMessage.mensajes[newMessage.mensajes.length-1].contenido});
                });
            },*/
            registrarse(){
                /*if(this.local){
                    localService.createLocal({nombre:this.newLocalNombre, contraseña:this.newLocalPassword,nombreUsuario:this.newLocalUsername,scope:["admin"]}).then(response =>{
                        console.log("usuario local creado exitosamente");
                    });
                    console.log("se registro a local");
                    this.newLocalNombre="";
                    this.newLocalPassword="";
                    this.newLocalUsername="";
                }else{*/
                    userService.crearUsuario({nombre:this.newUserNombre, ocupacionPrevia:this.newUserOcupacionPrevia, fechaNacimiento:this.newUserFechaNacimiento, pais:this.newUserPais,creencias:this.newUserCreencias,nombreUsuario:this.newUserUsername,contraseña:this.newUserPassword, scope:["regular"]}).then(response=>{
                        console.log("se registro un usuario");
                    });
                    console.log("se registro a usuario normal");
                    this.newUserOcupacionPrevia="";
                    this.newUserFechaNacimiento="";
                    this.newUserPais="";
                    this.newUserNombre="";
                    this.newUserPassword="";
                    this.newUserUsername="";
                    this.newUserCreencias="Católico";
                //}
            }
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

<template>
	<div>
		<div class="row">
			<div class="col xs3 s3 l6 m12">
				<div class="container">
				      <table class="bordered striped centered">
				        <thead>
				          <tr>
				              <th>Usuario</th>
				              <th>Nombre</th>
				              <th>Ocupacion Previa</th>
				              <th>Fecha de Nacimiento</th>
				              <th>Pais</th>
				              <th>Creencia</th>
				          </tr>
				        </thead>

				        <tbody>
				          <tr v-for = "sock in Sock">
				            <td>Eclair</td>
				            <td>$0.87</td>
				            <td>Alvin</td>
				            <td>Eclair</td>
				            <td>$0.87</td>
				            <td>Alvin</td>
				          </tr>
				        </tbody>
				      </table>
				    </div>
				    <div class="container">
				      <div class="row">
				          <div class="col xs3 s3 l6 m12">
				            <a class="right btn-floating btn-large waves-effect waves-light blue"><i class="material-icons">add</i></a>
				          </div>
		      			</div>
    				</div>
    			</div>
	    	</div>
	</div>
</template>

<script>
    export default {
        name:'add'
    }
</script>
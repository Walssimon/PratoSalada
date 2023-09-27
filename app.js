import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitalizar(ingredientes, 'nome')
let containerIngredientes = document.getElementById('container-Ingredientes');

for(let ingrediente of ingredientesCapitalizados){
	let textoHTML = `
	<div class="ingrediente">
	<img src="img/${ingrediente.img}"/>
		<p class="nome-ingrediente">${ingrediente.nome}</p>
	</div>
	`;
	
	containerIngredientes.innerHTML += textoHTML;
}
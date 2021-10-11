const cards = document.getElementById('cards');
const items = document.getElementById('items');
const footer = document.getElementById('footer');
const templateCard =document.getElementById('template-card').content
const templateFooter =document.getElementById('template-footer').content
const templateCarrito =document.getElementById('template-carrito').content
const pintarImagenesDeCarrito = document.getElementById('cards');
const fragment =document.createDocumentFragment();
let carrito = {};

document.addEventListener('DOMContentLoaded', () => {
	fetchData()
	if (localStorage.getItem('carrito')){
		carrito = JSON.parse(localStorage.getItem('carrito'));
		console.log(carrito);
		pintarCarrito();
	}
})

//Detecta cuando se hace click en el boton comprar
cards.addEventListener('click', e => {
	addCarrito(e);
})

items.addEventListener('click', e => {
	btnAccion(e)
})


const fetchData = async() => {
	try {
		const res = await fetch('json/api.json');
		const data = await res.json();
		//console.log(data);
		pintarCards(data);
	} catch (error){
		console.log(error)
	}
}
//Muestra los elementos en el html
const pintarCards = data =>{
	data.forEach(producto=>{
		templateCard.querySelector('h5').textContent = producto.title;
		templateCard.querySelector('p').textContent = producto.precio;
		templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl);
		templateCard.querySelector('.btn-dark').dataset.id = producto.id;
	//	console.log(producto.thumbnailUrl);
		const clone = templateCard.cloneNode(true);

		//para evitar reflow se usa el fragment
		fragment.appendChild(clone)
	} )
	cards.appendChild(fragment)
}



// Detecta los clics que se dan dentro del template
const addCarrito = e => {
	//console.log(e.target)
	if (e.target.classList.contains('btn-dark')) {
		setCarrito(e.target.parentElement);
	}
	e.stopPropagation();
}

//para manipular el carrito
const setCarrito = objeto => {
	const producto = {
		id: objeto.querySelector('.btn-dark').dataset.id,
		title: objeto.querySelector('h5').textContent,
		imagen:objeto.querySelector('img').getAttribute("src"),
		precio: objeto.querySelector('p').textContent,
		cantidad: 1
	}
	console.log(producto);

	/*
	Object.values(producto).forEach(elemento => {
		console.log(elemento.id);
	})
	*/
	if(carrito.hasOwnProperty(producto.id)){
		producto.cantidad = carrito[producto.id].cantidad + 1;
	}
	carrito[producto.id] = {...producto}
	pintarCarrito();
	//console.log(carrito);
}
//Se muestra en el carrito 
const pintarCarrito = () => {
	//console.log(carrito);
	items.innerHTML= '<img src= ${producto.imagen.currentSrc}  alt="">'
	Object.values(carrito).forEach(producto => {
		templateCarrito.querySelector('th').textContent = producto.id;
		templateCarrito.querySelectorAll('td')[0].textContent = producto.title;
		templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;

		templateCarrito.querySelector('img').setAttribute("src", producto.imagen.currentSrc);
		templateCarrito.querySelector('.btn-info').dataset.id = producto.id;
		templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;
		templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio;
		console.log(templateCarrito.querySelector('img').getAttribute("src"));

		const clone = templateCarrito.cloneNode(true);
		fragment.appendChild(clone);
	})
	items.appendChild(fragment)
pintarFooter()
	//se guardan los elementos en el localstorage
	console.log(JSON.stringify(carrito))
	localStorage.setItem('carrito', JSON.stringify(carrito));

}

const pintarFooter = () => {
	footer.innerHTML = '';
	if (Object.keys(carrito).length=== 0) {
            
		footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>'
		return
	}
	const nCantidad = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad,0);
	const nPrecio = Object.values(carrito).reduce((acc, {cantidad,precio})=> acc + cantidad * precio,0);
	

	templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
	templateFooter.querySelector('span').textContent = nPrecio;

	const clone = templateFooter.cloneNode(true);
	fragment.appendChild(clone);
	footer.appendChild(fragment);

	const btnVaciar = document.getElementById('vaciar-carrito');
	btnVaciar.addEventListener('click', () => {
		carrito = {};
		pintarCarrito();
	})

	const btnConfirmarPedido = document.getElementById('confirmar-pedido');
	btnConfirmarPedido.addEventListener('click', () => {
		carrito = {};
		pintarCarrito();
	})
}
//funcion a los botones de aumentar y disminuir productos
const btnAccion = e => {
	//console.log(e.target);
	//Se usa para aumentar elementos
	if (e.target.classList.contains('btn-info')) {
	//console.log(carrito[e.target.dataset.id]);
	//	carrito[e.target.dataset.id];
	const producto = carrito[e.target.dataset.id];
	producto.cantidad++;
	carrito[e.target.dataset.id] = {...producto};
	pintarCarrito()
}
	if (e.target.classList.contains('btn-danger')) {
		const producto = carrito[e.target.dataset.id];
		producto.cantidad--;
		if (producto.cantidad === 0 ) {
			delete carrito[e.target.dataset.id];
		}
		pintarCarrito();
	}

	e.stopPropagation();

}
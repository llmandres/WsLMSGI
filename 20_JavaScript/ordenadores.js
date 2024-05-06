class Ordenador {
	precio;
procesador;
tarjetaGrafica;
placaBase;
listaRAM= [];
listaPerifericos= [];
	
	constructor () {
		super();
	}

	// Metodos
	
	@Override
	toString() {
		return "Ordenador [precio=" + precio + ", procesador=" + procesador.toString() + ", tarjetaGrafica=" + tarjetaGrafica.toString()
				+ ", placaBase=" + placaBase.toString() + ", listaRAM=" + listaRAM.toString() + ", listaPerifericos=" + listaPerifericos.toString()
				+ "]";
	}
	
	/**
	 * Esto es JavaDoc y sirve para documentar métodos
	 * Calcular el precio del ordenador basandose en los precios 
	 * de los componentes del mismo. Modifica el atributo
	 * precio de la entidad ordenador
	 * @throws NullPointerException  si algún atributo apunta a null.
	 */
	calcularPrecio() {
		 precioRAM = 0;
		 precioPerifericos = 0;
         listaRAM.forEach(element => {
            precioRAM += element.getPrecio();
            
         });
         listaPerifericos.forEach(element => {
            precioPerifericos += element.getPrecio();
         });

		this.precio = procesador.getPrecio()+tarjetaGrafica.getPrecio()+placaBase.getPrecio()+precioRAM + precioPerifericos;
	}

	 getPrecio() {
		return precio;
	}

	 setPrecio( precio) {
		this.precio = precio;
	}

	 getProcesador() {
		return procesador;
	}

	setProcesador(procesador) {
		this.procesador = procesador;
	}

	getTarjetaGrafica() {
		return tarjetaGrafica;
	}

	setTarjetaGrafica(tarjetaGrafica) {
		this.tarjetaGrafica = tarjetaGrafica;
	}

	getPlacaBase() {
		return placaBase;
	}

	setPlacaBase(placaBase) {
		this.placaBase = placaBase;
	}

	getListaRAM() {
		return listaRAM;
	}

	setListaRAM(listaRAM) {
		this.listaRAM = listaRAM;
	}

	getListaPerifericos() {
		return listaPerifericos;
	}

	setListaPerifericos(listaPerifericos) {
		this.listaPerifericos = listaPerifericos;
	}

    
	
}
class Periferico {
	tipo;
	marca;
	precio;
	
	
	@Override
	toString() {
		return "Periferico [tipo=" + tipo + ", marca=" + marca + ", precio=" + precio + "]";
	}
	
	getTipo() {
		return tipo;
	}
	setTipo(tipo) {
		this.tipo = tipo;
	}
	getMarca() {
		return marca;
	}
	setMarca(marca) {
		this.marca = marca;
	}
	getPrecio() {
		return precio;
	}
	setPrecio(precio) {
		this.precio = precio;
	}
}
class PlacaBase {
	marca;
	precio;
	tipo;
	
	
	@Override
	toString() {
		return "PlacaBase [marca=" + marca + ", precio=" + precio + ", tipo=" + tipo + "]";
	}
	
	getMarca() {
		return marca;
	}
	setMarca(marca) {
		this.marca = marca;
	}
	getPrecio() {
		return precio;
	}
	setPrecio(precio) {
		this.precio = precio;
	}
	getTipo() {
		return tipo;
	}
	setTipo(tipo) {
		this.tipo = tipo;
	}
}
class Procesador {
	marca;
	modelo;
	numeroNucleos;
	precio;

	
	@Override
	toString() {
		return "Procesador [marca=" + marca + ", modelo=" + modelo + ", numeroNucleos=" + numeroNucleos + ", precio="
				+ precio + "]";
	}
	
	getMarca() {
		return marca;
	}
	setMarca(marca) {
		this.marca = marca;
	}
	getModelo() {
		return modelo;
	}
	setModelo(modelo) {
		this.modelo = modelo;
	}
	getNumeroNucleos() {
		return numeroNucleos;
	}
	setNumeroNucleos(numeroNucleos) {
		this.numeroNucleos = numeroNucleos;
	}
	getPrecio() {
		return precio;
	}
	setPrecio(precio) {
		this.precio = precio;
	}
}
class RAM {
	marca;
	capacidad;
	precio;
	
	@Override
	toString() {
		return "RAM [marca=" + marca + ", capacidad=" + capacidad + ", precio=" + precio + "]";
	}
	getMarca() {
		return marca;
	}
	setMarca(marca) {
		this.marca = marca;
	}
	getCapacidad() {
		return capacidad;
	}
	setCapacidad(capacidad) {
		this.capacidad = capacidad;
	}
	getPrecio() {
		return precio;
	}
	setPrecio(precio) {
		this.precio = precio;
	}
}
class TarjetaGrafica {
	marca;
	modelo;
	nucleosCUDA;
	precio;
    ram;
	
	@Override
	toString() {
		return "TarjetaGrafica [marca=" + marca + ", modelo=" + modelo + ", nucleosCUDA=" + nucleosCUDA + ", precio="
				+ precio + ", ram=" + ram + "]";
	}
	
	getMarca() {
		return marca;
	}
	setMarca(marca) {
		this.marca = marca;
	}
	getModelo() {
		return modelo;
	}
	setModelo(modelo) {
		this.modelo = modelo;
	}
	getNucleosCUDA() {
		return nucleosCUDA;
	}
	setNucleosCUDA(nucleosCUDA) {
		this.nucleosCUDA = nucleosCUDA;
	}
	getPrecio() {
		return precio;
	}
	setPrecio(precio) {
		this.precio = precio;
	}
	getRam() {
		return ram;
	}
	setRam(ram) {
		this.ram = ram;
	}
}

ordenador = new Ordenador()
listaRAM = []
ordenador.setListaRAM = listaRAM
ordenador.setPrecio = 100
ordenador.setProcesador = new Procesador
ordenador.setTarjetaGrafica = new TarjetaGrafica
ordenador.setPlacaBase = new PlacaBase
listaPerifericos = []
ordenador.setListaPerifericos = listaPerifericos;
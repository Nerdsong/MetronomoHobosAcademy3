class GeneradorAleatorioDeNumeros{
    #grupoDeNumerosAleatorios = []
    #historial=[];
    #indexDelGrupoEnPantalla= 0 ;
    #semicorcheas = 4;
    #tresillos = 3;
    #cifraMaximaTotal = 16;

    getCifraMaxima(){
        return this.#cifraMaximaTotal
    }

    getTamañoDelHistorial(){
        return this.#historial.length
    }

    getIndexDelGrupoEnPantalla(){
        return this.#indexDelGrupoEnPantalla;
    }

    setIndexDelGrupoEnPantalla(numero){
        this.#indexDelGrupoEnPantalla = numero;
    }

    generarNumeroAleatorio(remanente){
        
        return (Math.floor(Math.random()*(remanente))+1)
        
    }

    agregarNumeroAlGrupoParaMostrar(numero){
        this.#grupoDeNumerosAleatorios.push(numero)
    }

    agregarGrupoDeNumerosAleatoriosAlHistorial(){
        this.#historial.push(this.#grupoDeNumerosAleatorios);
        this.#grupoDeNumerosAleatorios = [];
    }

    getGrupoDeNumerosAleatorios(){
        return this.#grupoDeNumerosAleatorios;
    }

    getUltimoGrupoDeNumerosAleatorios(){
        return this.#historial[this.#historial.length - 1]
    }

    mostrarGrupoDeNumerosAleatorios(){
        document.querySelector("#numeros_aleatorios_generados").innerHTML = ""
            this.#historial[this.getIndexDelGrupoEnPantalla()].forEach(numero => {
            document.querySelector("#numeros_aleatorios_generados").innerHTML += `
            <div class="numeros-aleatorios numeros-aleatorios-estilo">
                ${numero}
            </div>
            
            `  
        });
    }

    numerosPendientesPorGenerar(numero){
        if(numero > 1){
            numero = numero -1  
        }
        else if(numero==1){
            numero = 0}

        return numero 
    }

    comprobarSiEsElUltimoNumero(numerosrestantes,cantidadSobrante,cantidadEnUso,numeroResultante){
        if((numerosrestantes == 1 && cantidadEnUso < 16)){
            numeroResultante = cantidadSobrante;
        }
        else{}

        return numeroResultante

    }

    generarGrupoDeNumerosAleatorio(cantidadDenumerosAgenerar, cifraMaxima){
        let cantidadSobrante = cifraMaxima - (this.numerosPendientesPorGenerar(cantidadDenumerosAgenerar));
        let cantidadEnUso = 0;
        console.log(cantidadSobrante);
        let numeroResultante = 0;
        ;

        for( cantidadDenumerosAgenerar ; cantidadDenumerosAgenerar != 0 ; cantidadDenumerosAgenerar -- ){
            cantidadSobrante = ( cifraMaxima - cantidadEnUso - (this.numerosPendientesPorGenerar(cantidadDenumerosAgenerar)));
            console.log(cantidadSobrante + "numero sobrante")
            numeroResultante = this.generarNumeroAleatorio(cantidadSobrante);
            cantidadEnUso += numeroResultante;
            console.log(numeroResultante+"numero resultante aleatorio") 
            numeroResultante = this.comprobarSiEsElUltimoNumero(cantidadDenumerosAgenerar,cantidadSobrante,cantidadEnUso,numeroResultante);
            console.log(numeroResultante+"numero resultante aleatorio corregido")
            this.agregarNumeroAlGrupoParaMostrar(numeroResultante)
        }

        this.agregarGrupoDeNumerosAleatoriosAlHistorial()
        this.setIndexDelGrupoEnPantalla(this.#historial.length - 1)
    }

}

export {GeneradorAleatorioDeNumeros};
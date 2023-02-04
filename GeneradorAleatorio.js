import { metrica1 } from "./Metronomo.js";

class GeneradorAleatorioDeNumeros{
    #grupoDeNumerosAleatorios = []
    #historial=[];
    #indexDelGrupoEnPantalla= 0 ;
    #semicorcheas = 4;
    #tresillos = 3;
    #tresillosOSemicorcheas = "";
    #cifraMaximaTotal = 16;

    getCifraMaxima(){
        return this.#cifraMaximaTotal
    }

    tresillosOSemicorcheas(){
        if (document.querySelector("#tresillos_o_semis").value == 1 ){
            this.#tresillosOSemicorcheas = this.#tresillos;
        }
        else{
            this.#tresillosOSemicorcheas = this.#semicorcheas;
        }
    }

    setCifraMaxima(){
        this.#cifraMaximaTotal = this.cantidadDeNumerosAgenerar() * this.#tresillosOSemicorcheas;
    }

    getTamañoDelHistorial(){
        return this.#historial.length
    }

    cantidadDeNumerosAgenerar(){
        return (document.querySelector("#selector_metricas").value)
    }

    getIndexDelGrupoEnPantalla(){
        return this.#indexDelGrupoEnPantalla;
    }

    setIndexDelGrupoEnPantalla(numero){
        this.#indexDelGrupoEnPantalla = numero;
    }

    generarNumeroAleatorio(remanente){
        

        return Math.floor(Math.random()*(remanente) + 1 )
        
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
        if((numerosrestantes == 1 && cantidadEnUso < this.getCifraMaxima())){
            numeroResultante = cantidadSobrante;
        }
        else{}

        return numeroResultante

    }

    //Esta función toma los valores del selecctor del número límite siento 13 = 0, 12 = 1, 11 = 2, etc.. hasta 4

    comprobarSiEsMenorAlNumeroLimite(numeroresultante, numerolimite, numerospendientes){
        if( numeroresultante < ((numerolimite + numerospendientes) / numerospendientes)){
            return Math.ceil(((numerolimite + numerospendientes) /numerospendientes))
        }

        if( numeroresultante > ((numerolimite + numerospendientes) / numerospendientes)){
            return Math.floor(((numerolimite + numerospendientes) /numerospendientes))
        }

        else{ return numeroresultante}
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
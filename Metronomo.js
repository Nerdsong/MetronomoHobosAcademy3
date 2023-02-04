
import { Metricas } from "./MetricasEnArray.js";

let metrica1 = new Metricas ([1,0,0],[1,0,0,0],[1,0,0,0,0],[1,0,0,0,0,0],[1,0,0,0,0,0,0]);


class Metronomo{
    #bpm = "beats por mintuo"; //Es la frecuencia con la que sonará el metronomo
    #posicionEnVector = 0;
    #sonidoTic = new Audio ('./Sonidos/tic.mp3')
    #sonidoTac = new Audio ('./Sonidos/tac.mp3')
    #volumen = 1;
    #minutoEnMilisegundos = 60000;


    /**
     * 
     * @param {Number} bpm del metrónomo    
     */

    constructor(bpm){
        this.#bpm = bpm;
    }

    getBpm(){
        return this.#bpm;
    }

    /**
     * 
     * @param {Number} bpm 
     */
    setBpm(bpm){
        this.#bpm = bpm;
        console.log(this.#bpm)
    }

    getBpmEnMiliSegundos(){
        return (this.#minutoEnMilisegundos/this.getBpm());
    }


    getPosicionEnVector(){
        return this.#posicionEnVector
    }

    setPosicionEnVector(numero){
        this.#posicionEnVector = numero;
    }

    aumentarPosicionEnVector(){
        this.#posicionEnVector ++
    }

    sonarTic(){
        this.#sonidoTic.play()
    }

    sonarTac(){
        this.#sonidoTac.play()
    }


    subirBajarVolumen(valor){
        this.#volumen = valor / 100;
        this.#sonidoTac.volume = this.#volumen;
        this.#sonidoTic.volume = this.#volumen;
    }
    /**
     * Ejecuta el metronomo recorriendo todo el vector, avanza 1 espacio en cada ejecución.
     *  al llegar al final del vector vuelve al inicio. 
     */
    inicioMetronomo(){
        
        if (this.getPosicionEnVector() < metrica1.getMetricaSeleccionada().length){
            this.sonarClick(this.getPosicionEnVector())
            metrica1.setAcentos()
            console.log(`${this.getPosicionEnVector()}`)
            
        }
        else {
            this.setPosicionEnVector(0)
            this.sonarClick(this.getPosicionEnVector())
            console.log(`${this.getPosicionEnVector()}`)
        }
    }


    /**
     * Se posiciona en el vector según se le indica, evalua si la posición contiene un 0 o un 1 
     * y según esto ejecuta el sonido. 
     * @param {Number} posicionEnVector 
     */
    sonarClick(posicionEnVector){
        switch(metrica1.getMetricaSeleccionada()[posicionEnVector]){
            case 1: this.sonarTic()
                this.aumentarPosicionEnVector()
                break

            case 0: this.sonarTac()
                this.aumentarPosicionEnVector()
                break

        }

    }
}




export {Metronomo , metrica1} ;
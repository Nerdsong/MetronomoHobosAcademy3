
class Metricas {
    tresCuartos = [1,0,0];
    cuatroCuartos = [1,0,0,0];
    cincoCuartos = [1,0,0,0,0];
    seisOctavos = [1,0,0,0,0,0];
    sieteOctavos = [1,0,0,0,0,0,0];
    metricas = [this.tresCuartos,this.cuatroCuartos,this.cincoCuartos,this.seisOctavos, this.sieteOctavos];
    metricaSeleccionada = 4;
    metricaMostrandose= false;

    /**
     * 
     * @param {Array} vector1 
     * @param {Array} vector2 
     * @param {Array} vector3 
     * @param {Array} vector4 
     * @param {Array} vector5 
     */
    constructor(vector1,vector2,vector3,vector4,vector5){
        this.tresCuartos = vector1
        this.cuatroCuartos = vector2
        this.cincoCuartos = vector3
        this.seisOctavos = vector4
        this.sieteOctavos = vector5
    }


    getMetricaSeleccionada(){
        this.metricaSeleccionada = this.metricas[document.querySelector("#selector_metricas").value - 3 ];
        return this.metricaSeleccionada
    }

    /**
     * Muestra un checkbox por cada elemento que contiene el array
     * @param {Array} metricaSeleccionada 
     */
    muestraMetrica(metricaSeleccionada){
        this.metricaMostrandose = true;
        document.querySelector("#metrica_mostrada").innerHTML = "";
        let i = 0;
        for(i = 0 ; i < metricaSeleccionada.length; i ++){
            document.querySelector("#metrica_mostrada").innerHTML += `
                <input class= "form-check-input acentos" id= "checkbox_${i}" type="checkbox" value="${i}">
            ` 
        }

        this.acentosOriginales(metricaSeleccionada)
    }

    /**
     * Permite que por defecto se refleje el array original en cada checkbox
     * @param {Array} vector  
     */
    acentosOriginales(vector){
        let i = 0
        for(i=0; i < vector.length; i++){
            vector[i] == 0 ? (document.getElementById(`checkbox_${i}`).checked = false) : (document.getElementById(`checkbox_${i}`).checked = true)
        }
    }
    
    /**
     * Establece los acentos de la métrica seleccionada. 
     */
    setAcentos(){
        let i = 0
        for(i=0; i < this.metricaSeleccionada.length; i++){
            (document.getElementById(`checkbox_${i}`).checked == true) ? this.metricaSeleccionada.splice(i,1,1):this.metricaSeleccionada.splice(i,1,0)
        }
    }
    
}


export { Metricas } ;
import React from 'react'

export const rad = (x) => {
    return x * Math.PI / 180;
}

export  const getDistance = (latp1, longp1, latp2, longp2) => {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat =  rad(latp2 - latp1);
    var dLong = rad(longp2 - longp1); 
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(latp1)) * Math.cos(rad(latp2)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d // returns the distance in meter
}

export const calcularDistancias = (unidades, location) => {
    const arr = [] //vetor de distancias 
   
    unidades.map((u,i) => {
        arr.push(getDistance(location.latitude, location.longitude, u.lat, u.long))
    })

    return arr
}

export  const calcularUnidadeMaisProxima = (unidades, location) => {
    
    const arr = calcularDistancias(unidades, location)
  

    //jose wilson
    // Funcao para retornar o menor valor de um array
    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };

    const min = Array.min(arr) //Retorna a KM menor 

     //Retorna o indice do elemento no vetor
     const indice = arr.indexOf(min)

     const obj = {unidade: unidades[indice], distancia: min/1000}
     
     return obj
}

export  const unidadesMaisProximas = (unidades, location) => {
    console.log("calculando unidades Próximas", unidades.length)
   
    // Vetor de distâncias desordenado
    let arr = calcularDistancias(unidades, location)
    arr = arr.map((item) => (item/1000).toFixed(2))
    
    return arr
}
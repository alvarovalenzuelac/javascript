//1.Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function uno_a_doscientoscincuentaycinco(){
    contenedor = [];
    for(let i=1;i<=255;i++){
        contenedor.push(i);
    }
    return contenedor;
}

//2.Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
function suma_pares(){
    acum = 0;
    for(i=1;i<=1000;i++){
        if(i%2==0){
            acum = acum + i;
        }
    }
    return acum
}

//3.Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function suma_impares(){
    acum = 0;
    for(i=1;i<=5000;i++){
        if(i%2!=0){
            acum = acum + i;
        }
    }
    return acum
}

//4.Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function suma_array(arreglo){
    acum = 0;
    for(i=0;i<arreglo.length;i++){
        acum = acum + arreglo[i];
    }
    return acum
}
console.log(suma_array([-5,2,5,12]))


//5.Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function mayor(arreglo){
    num_mayor = arreglo[0];
    for(i=1;i<arreglo.length;i++){
        if(arreglo[i]>num_mayor){
            num_mayor = arreglo[i];
        }
        
    }
    return num_mayor
}
console.log(mayor([-5,2,5,12]))

//6.Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function avg_array(arreglo){
    acum = 0;
    for(i=0;i<arreglo.length;i++){
        acum = acum + arreglo[i];
    }
    return acum / arreglo.length
}
console.log(avg_array([-5,2,5,12]))

//7.Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function arreglo_impares(){
    impares = [];
    for(i=1;i<=50;i++){
        if(i%2!=0){
            impares.push(i)
        }
    }
    return impares
}
console.log(arreglo_impares())

//8.Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function mayor_que_y(numero,arreglo){
    contador = 0;
    for(let i = 0; i<arreglo.length;i++){
        if(arreglo[i]>numero){
            contador = contador + 1;
        }
    }
    return contador
}
console.log(mayor_que_y(4,[-5,2,5,12]))

//9.Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function cuadrados(arreglo){
    for(let i = 0 ; i<arreglo.length ; i++){
        arreglo[i] = arreglo[i] * arreglo[i]
    }
    return arreglo
}
console.log(cuadrados([-5,2,5,12]))

//10.Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function negativos(arreglo){
    for(let i = 0; i<arreglo.length; i++){
        if(arreglo[i]<0){
            arreglo[i] = 0
        }
    }
    return arreglo
}
console.log(negativos([1,5,10,-2]))


//11.Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function max_min_avg(arreglo){
    maximo = arreglo[0]
    minimo = arreglo[0]
    acum = arreglo[0]
    for(let i=1;i<arreglo.length;i++){
        if(maximo<arreglo[i]){
            maximo = arreglo[i];
        }
        if(minimo>arreglo[i]){
            minimo = arreglo[i];
        }
        acum += arreglo[i];
    }
    return [maximo, minimo, acum/arreglo.length]
}
console.log(max_min_avg([1,5,10,-2]))

//12.Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function intercambio(arreglo){
    temp = arreglo[0]
    arreglo[0] = arreglo[arreglo.length-1]
    arreglo[arreglo.length-1] = temp
    return arreglo
}
console.log(intercambio([1,5,10,-2]))
//13.De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function negativo_dojo(arreglo){
    for(let i = 0; i<arreglo.length; i++){
        if(arreglo[i]<0){
            arreglo[i]= "Dojo"
        }
    }
    return arreglo
}
console.log(negativo_dojo([-1,-3,2]))
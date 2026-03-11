
## Arrays, Funciones de Arrays y Funciones Flecha

Un **array (arreglo)** es una estructura de datos que permite almacenar varios valores dentro de una sola variable.

Los elementos de un array se guardan en **posiciones llamadas índices**, que empiezan desde **0**.

### Ejemplo

let numeros = [10, 20, 30, 40];

En este ejemplo:

| Índice | Valor |
| ------ | ----- |
| 0      | 10    |
| 1      | 20    |
| 2      | 30    |
| 3      | 40    |

Para acceder a un valor:

console.log(numeros[1]);

Resultado:

20


---

# 2. Funciones Flecha (Arrow Functions)

Las **funciones flecha** son una forma más corta de escribir funciones en JavaScript.

Sintaxis:

(parametros) => resultado
```

### Ejemplo

Función normal:


function duplicar(n) {
    return n * 2;
}

Función flecha:

let duplicar = n => n * 2;
```

Ambas hacen lo mismo, pero la función flecha es más corta.

---

# 3. Funciones Preestablecidas de Arrays

JavaScript tiene varias funciones integradas para trabajar con arrays.

## 3.1 map()

La función **map()** crea un nuevo array transformando cada elemento del array original.

### Ejemplo

let numeros = [1, 2, 3, 4];

let resultado = numeros.map(n => n * 2);

console.log(resultado);

Resultado:

[2, 4, 6, 8]

---

## 3.2 filter()

La función **filter()** permite filtrar elementos que cumplan una condición.

### Ejemplo

let numeros = [5, 10, 15, 20];

let mayores = numeros.filter(n => n > 10);

console.log(mayores);

Resultado:


[15, 20]


---

## 3.3 find()

La función **find()** devuelve el primer elemento que cumple una condición.

### Ejemplo

let numeros = [5, 10, 15, 20];

let numero = numeros.find(n => n > 10);

console.log(numero);

Resultado:

15


## 3.4 forEach()

La función **forEach()** recorre cada elemento del array.

### Ejemplo

let numeros = [5, 10, 15];

numeros.forEach(n => {
    console.log(n);
});

Resultado:

5
10
15


## 3.5 some()

La función **some()** verifica si al menos un elemento cumple una condición.

### Ejemplo

let numeros = [5, 10, 15];

let existe = numeros.some(n => n > 12);

console.log(existe);


Resultado:


true

## 3.6 every()

La función **every()** verifica si todos los elementos cumplen una condición.

### Ejemplo

let numeros = [5, 10, 15];

let todos = numeros.every(n => n > 3);

console.log(todos);

Resultado:

true

## 3.7 reduce()

La función **reduce()** permite reducir todos los valores del array a un solo resultado.

### Ejemplo

let numeros = [5, 10, 15];

let suma = numeros.reduce((acum, n) => acum + n, 0);

console.log(suma);

Resultado:

30

# 4. Resumen de funciones de arrays

| Función   | Uso                        |
| --------- | -------------------------- |
| map()     | transformar elementos      |
| filter()  | filtrar elementos          |
| find()    | encontrar un elemento      |
| forEach() | recorrer el array          |
| some()    | verificar si alguno cumple |
| every()   | verificar si todos cumplen |
| reduce()  | reducir a un valor         |

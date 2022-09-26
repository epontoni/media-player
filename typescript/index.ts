// Boolean
let muted: boolean = true;

// Number
let num: number = 30;

// String
let firstName: string = "Emanuel";

// Array de strings
let people: string[] = [];
people = ["Emanuel", "José", "Pedro"];

// Array alfanuméricos
let stringsAndNumbers: Array< string | number > = [];
stringsAndNumbers.push("Un string");
stringsAndNumbers.push(2);

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard"}

// Object
let obj: object = {}

// Function
function add(a: number, b: number):number {
    return a + b;
}

const sum: number = add(4, 6);

function fullName(firstName: string = 'Fulano', lastName?: string): string {
    return `${firstName} ${lastName}`;
}

console.log(fullName('Emanuel', 'Pontoni'));
console.log(fullName(undefined, 'Pontoni'));
console.log(fullName(undefined));

// Interface (forma de un objeto)
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
};

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

console.log(area(rect));

rect.toString = function() {
    return this.color ? `Un rectángulo ${this.color}` : `Sin color`;
}

console.log(rect.toString())
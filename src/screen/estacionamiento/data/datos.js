export const Datos = [
  {Piso: 1, Zona: "A", Posicion: 1, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 2, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 3, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 4, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 5, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 6, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 7, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 8, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 9, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 10, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 11, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 12, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 13, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 14, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 15, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 16, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 17, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 18, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 19, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 20, sel: false, user:'', auto:''},
  {Piso: 1, Zona: "A", Posicion: 21, sel: false, user:'', auto:''}
];

export function SelLugar(posicion, zona, piso, datos){
  return datos.map((elem) => {
    if (elem.Posicion == posicion && elem.Zona == zona && elem.Piso == piso) {
      console.log(posicion, zona, piso)
      elem.sel = !elem.sel;
    }
    return elem;
  });
}
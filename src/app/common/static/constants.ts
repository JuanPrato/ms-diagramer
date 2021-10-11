export class Constants {

  constructor() {
    throw new Error("Utility class");
  }

  static registerErrors: any = {
    "required": "Campo obligatorio",
    "length": "El valor debe tener entre %i y %i caracteres de largo",
    "email": "El mail no es valido",
    "notEquivalent": "Las contraseñas deben considir",
    "pattern": "La contraseña debe incluir al menos una minuscula, una mayuscula y un número"
  };
}

conect = new Mongo("localhost");
db = conect.getDB('optica');

db.createCollection("persona");
db.createCollection("producto");
db.createCollection("venta");

db.persona.insert([
  {persona_id: 1,
    tipo: "empleado",
    nombre: [{ nom: "juan" }, { apellido1: "López" }, { apellido2: "Pérez" }],
    contacto: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      pais: "España",
      telefono: 932589632,
    },
    presentador: {
      nombre: "Dell",
    },
  },
  {
    persona_id: 2,
    tipo: "proveedor",
    nombre: "GafasGuays",
    contacto: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      pais: "España",
      telefono: 932589632,
    },
    presentador: {
      nombre: "Dell",
    },
  },
  {
    persona_id: 3,
    tipo: "cliente",
    nombre: [
      { nom: "Pol" },
      { apellido1: "Hernández" },
      { apellido2: "Gómez" },
    ],
    contacto: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      pais: "España",
      telefono: 932589632,
    },
  },
  {
    persona_id: 4,
    tipo: "empelado",
    nombre: [{ nom: "juan" }, { apellido1: "López" }, { apellido2: "Pérez" }],
    contacto: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      pais: "España",
      telefono: 932589632,
    },
  },
]);

db.producto.insert(
  {
    producto_id: 1,
    marca: "Dell",
    caracteristicas: {
      graducacion_derecho: 5.5,
      graduacion_izquierdo: 4,
      color: "rojo",
      montura: "pasta",
    },
    proveedor: {
      id: 1,
    },
  },
  {
    producto_id: 2,
    marca: "Neo",
    caracteristicas: {
      graducacion_derecho: 3.2,
      graduacion_izquierdo: 3,
      color: "verde",
    },
    proveedor: {
      id: 2,
    },
  }
);
db.venta.insert({
  date: new Date(),
  productos: [{ producto_id: 1 }, { cantidad: 2 }],
  persona: [{ tipo: "empleado" }, { persona_id: 1 }],
});


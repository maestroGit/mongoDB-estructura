conect = new Mongo("localhost");
db = conect.getDB("pizzeria");
db.createCollection("persona");
db.createCollection("producto");
db.createCollection("venta");

db.persona.insert([
  {
    persona_id: 1,
    tipo: "empleado",
    nombre: [{ nom: "juan" }, { apellido1: "López" }, { apellido2: "Pérez" }],
    direccion: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      pais: "España",
      telefono: 932589632,
    },
    provincia: "Barcelona",
  },
  {
    persona_id: 2,
    tipo: "cliente",
    nombre: [{ nom: "Luis" }, { apellido1: "Mariñas" }, { apellido2: "Pérez" }],
    direccion: {
      calle: "roja",
      numero: 8,
      piso: 25,
      puerta: "c",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      telefono: 932589632,
    },
    provincia: "Barcelona",
  },
  {
    persona_id: 3,
    tipo: "cliente",
    nombre: [
      { nom: "Pol" },
      { apellido1: "Hernández" },
      { apellido2: "Gómez" },
    ],
    direccion: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      telefono: 932589632,
    },
    provincia: "Barcelona",
  },
  {
    persona_id: 4,
    tipo: "empelado",
    nombre: [{ nom: "juan" }, { apellido1: "López" }, { apellido2: "Pérez" }],
    direccion: {
      calle: "mayor",
      numero: 5,
      piso: 2,
      puerta: "a",
      ciudad: "Barcelona",
      codigo_postal: 08026,
      telefono: 932589632,
    },
    provincia: "Barcelona",
  },
]);

db.producto.insert(
  {
    producto_id: 1,
    nombre: "margarita",
    precio: 8,
    tipo: [{ clase: "pizza" }, { categoria_id: 1, nomcateg: "masa fina" }],
  },
  {
    producto_id: 2,
    nombre: "barbacoa",
    precio: 6,
    tipo: [{ clase: "pizza" }, { categoria_id: 1, nomcateg: "masa gruesa" }],
  },
  {
    producto_id: 3,
    nombre: "hamburguesa",
    precio: 6,
    tipo: [{ clase: "burguer" }],
  },
  {
    producto_id: 4,
    nombre: "agua",
    precio: 5,
    tipo: [{ clase: "bebida" }],
  }
);

db.venta.insert({
  date: new Date(),
  productos: [{ producto_id: 1 }, { cantidad: 2 }],
  persona: [{ tipo: "empleado" }, { persona_id: 4 }],
  tienda: {
    info: {
      nombre: "pizzeria-2",
      contacto: {
        calle: "mayor",
        numero: 5,
        piso: 2,
        puerta: "a",
        ciudad: "Madrid",
        codigo_postal: 28013,
        pais: "España",
        telefono: 915822635,
      },
    },
    pizzeria_id: 1,
  },
});

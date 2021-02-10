// databases
// collections
// documents
// db.help()
// dropDatabase()
// db.persona.find()
// db.persona.find().pretty()
// db.provedor.find({name:'Dell'})
// db.persona.update({'provedor':'GafasGuay'},{$set:{'description:'gafas bonitas'}})
// db.persona.update({'provedor':'NuevoProveedor'},{$set:{'description:'gafas feas'}},{upsert:true})
// db.persona.remove({name:'Dell'})
// operador $gt (abreviatura de “greater than”
// db.restaurants.count()
// db.restaurants.find().forEach(restaurant => print("Nombre Restaurante :"+restaurant.name)) //don't work
// operation sorts the documents first by the age field in descending order and then by the posts field in ascending order:
// db.users.find({ }).sort( { age : -1, posts: 1 } )

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
  persona: [{ tipo: "empleado" }, { persona_id: 4 }],
  tienda:{info:{ nombre: "pizzeria-2",
    contacto: {calle: "mayor", numero: 5, piso: 2, puerta: "a",
    ciudad: "Madrid",
    codigo_postal: 28013,
    pais: "España",
    telefono:915822635}},
    pizzeria_id:1},
});


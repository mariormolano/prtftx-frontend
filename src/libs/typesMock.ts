import { TypesInterface } from "@/features/types/typesInterface";

export const typesMock: TypesInterface[] = [
  {
    id: 1,
    name: "Persona",
    description: "Registro de información personal",
    createdAt: "2021-10-01",
    properties: [
      { id: 1, name: "Nombre", value: "TEXT", createdAt: "2021-10-01" },
      { id: 2, name: "Edad", value: "NUMBER", createdAt: "2021-10-01" },
      {
        id: 3,
        name: "Fecha Nacimiento",
        value: "DATE",
        createdAt: "2021-10-01",
      },
      {
        id: 4,
        name: "Es Estudiante",
        value: "BOOLEAN",
        createdAt: "2021-10-01",
      },
    ],
  },
  {
    id: 2,
    name: "Proyecto",
    description: "Gestión de iniciativas",
    createdAt: "2021-10-01",
    properties: [
      {
        id: 5,
        name: "Nombre Proyecto",
        value: "TEXT",
        createdAt: "2021-10-01",
      },
      { id: 6, name: "Presupuesto", value: "NUMBER", createdAt: "2021-10-01" },
      { id: 7, name: "Fecha Inicio", value: "DATE", createdAt: "2021-10-01" },
      { id: 8, name: "Fecha Fin", value: "DATE", createdAt: "2021-10-01" },
      {
        id: 9,
        name: "Proyecto Activo",
        value: "BOOLEAN",
        createdAt: "2021-10-01",
      },
    ],
  },
  {
    id: 3,
    name: "Sensor",
    description: "Dispositivo de monitoreo",
    createdAt: "2021-10-01",
    properties: [
      { id: 10, name: "Temperatura", value: "NUMBER", createdAt: "2021-10-01" },
      {
        id: 11,
        name: "Última Lectura",
        value: "DATE",
        createdAt: "2021-10-01",
      },
      {
        id: 12,
        name: "Sensor Activo",
        value: "BOOLEAN",
        createdAt: "2021-10-01",
      },
    ],
  },
  {
    id: 4,
    name: "Libro",
    description: "Registro bibliográfico",
    createdAt: "2021-10-01",
    properties: [
      { id: 13, name: "Título", value: "TEXT", createdAt: "2021-10-01" },
      { id: 14, name: "Páginas", value: "NUMBER", createdAt: "2021-10-01" },
      { id: 15, name: "Publicación", value: "DATE", createdAt: "2021-10-01" },
      {
        id: 16,
        name: "En Biblioteca",
        value: "BOOLEAN",
        createdAt: "2021-10-01",
      },
      { id: 17, name: "Género", value: "TEXT", createdAt: "2021-10-01" },
    ],
  },
  {
    id: 5,
    name: "Pedido",
    description: "Transacción comercial",
    createdAt: "2021-10-01",
    properties: [
      { id: 18, name: "Número Pedido", value: "TEXT", createdAt: "2021-10-01" },
      { id: 19, name: "Monto Total", value: "NUMBER", createdAt: "2021-10-01" },
      { id: 20, name: "Fecha Entrega", value: "DATE", createdAt: "2021-10-01" },
      { id: 21, name: "Entregado", value: "BOOLEAN", createdAt: "2021-10-01" },
    ],
  },
  {
    id: 6,
    name: "Usuario",
    description: "Cuenta de sistema",
    createdAt: "2021-10-01",
    properties: [
      { id: 22, name: "Email", value: "TEXT", createdAt: "2021-10-01" },
      { id: 23, name: "Último Acceso", value: "DATE", createdAt: "2021-10-01" },
      {
        id: 24,
        name: "Usuario Activo",
        value: "BOOLEAN",
        createdAt: "2021-10-01",
      },
      {
        id: 25,
        name: "Intentos Fallidos",
        value: "NUMBER",
        createdAt: "2021-10-01",
      },
    ],
  },
  {
    id: 7,
    name: "Vehículo",
    description: "Registro automotor",
    createdAt: "2021-10-01",
    properties: [
      { id: 26, name: "Placa", value: "TEXT", createdAt: "2021-10-01" },
      { id: 27, name: "Kilometraje", value: "NUMBER", createdAt: "2021-10-01" },
      {
        id: 28,
        name: "Último Mantenimiento",
        value: "DATE",
        createdAt: "2021-10-01",
      },
      { id: 29, name: "Disponible", value: "BOOLEAN", createdAt: "2021-10-01" },
      { id: 30, name: "Modelo", value: "NUMBER", createdAt: "2021-10-01" },
    ],
  },
  {
    id: 8,
    name: "Receta",
    description: "Instrucciones culinarias",
    createdAt: "2021-10-01",
    properties: [
      { id: 31, name: "Nombre Receta", value: "TEXT", createdAt: "2021-10-01" },
      {
        id: 32,
        name: "Tiempo Preparación",
        value: "NUMBER",
        createdAt: "2021-10-01",
      },
      {
        id: 33,
        name: "Fecha Creación",
        value: "DATE",
        createdAt: "2021-10-01",
      },
      {
        id: 34,
        name: "Vegetariana",
        value: "BOOLEAN",
        createdAt: "2021-10-01",
      },
      { id: 35, name: "Dificultad", value: "TEXT", createdAt: "2021-10-01" },
    ],
  },
];

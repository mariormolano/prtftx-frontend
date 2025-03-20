"use server";

import { PropertiesInterface } from "./propertiesInterface";

const BackendUrl = process.env.BACKEND_URL || "http://localhost:3001";

const getProperties = async (token: string) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BackendUrl}/properties`, config);

  console.log("Respuesta de propiedades", res);

  const properties = await res.json();

  return properties.properties
    ? (properties.properties[0] as PropertiesInterface[])
    : ([] as PropertiesInterface[]);
};

const getPropertiesById = async (token: string, id: number) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BackendUrl}/properties/${id}`, config);

  const property = await res.json();

  return property;
};

const createProperty = async (
  token: string,
  properties: Pick<PropertiesInterface, "name" | "value">
) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(properties),
  };
  const res = await fetch(`${BackendUrl}/properties`, config);

  const property = await res.json();

  return property;
};

const updateProperty = async (
  token: string,
  properties: PropertiesInterface
) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(properties),
  };
  const res = await fetch(`${BackendUrl}/properties/${properties.id}`, config);

  const property = await res.json();

  return property;
};

const deletedProperty = async (token: string, propertyId: number) => {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BackendUrl}/properties/${propertyId}`, config);

  const property = await res.json();

  return property;
};

export {
  getProperties,
  getPropertiesById,
  createProperty,
  updateProperty,
  deletedProperty,
};

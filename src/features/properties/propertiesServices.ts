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
  const data = await res.json();
  if (res.status < 300) {
    console.log(data);
    return data;
  }
  return { success: false, message: data.message };
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
  const data = await res.json();
  if (res.status < 300) {
    return data;
  }
  return { success: false, message: data.message };
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
  const data = await res.json();
  if (res.status < 300) {
    return data;
  }
  return { success: false, message: data.message };
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
  const data = await res.json();
  if (res.status < 300) {
    return data;
  }
  return { success: false, message: data.message };
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
  const data = await res.json();
  if (res.status < 300) {
    return data;
  }
  return { success: false, message: data.message };
};

export {
  getProperties,
  getPropertiesById,
  createProperty,
  updateProperty,
  deletedProperty,
};

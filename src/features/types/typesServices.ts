"use server";

import { TypesInterface } from "./typesInterface";

const BackendUrl = process.env.BACKEND_URL || "http://localhost:3001";

const getTypes = async (token: string) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BackendUrl}/types`, config);
  const data = await res.json();
  if (res.status < 300) {
    console.log(data);
    return data;
  }
  return { success: false, message: data.message };
};

const getTypesById = async (token: string, id: number) => {
  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BackendUrl}/types/${id}`, config);
  const data = await res.json();
  if (res.status < 300) {
    console.log(data);
    return data;
  }
  return { success: false, message: data.message };
};

const createType = async (
  token: string,
  types: Pick<TypesInterface, "name" | "description" | "properties">
) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(types),
  };
  const res = await fetch(`${BackendUrl}/types`, config);
  const data = await res.json();
  if (res.status < 300) {
    console.log(data);
    return data;
  }
  return { success: false, message: data.message };
};

const updateType = async (token: string, types: TypesInterface) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(types),
  };
  const res = await fetch(`${BackendUrl}/types/${types.id}`, config);
  const data = await res.json();
  if (res.status < 300) {
    console.log(data);
    return data;
  }
  return { success: false, message: data.message };
};

const deletedType = async (token: string, id: number) => {
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(`${BackendUrl}/types/${id}`, config);
  const data = await res.json();
  if (res.status < 300) {
    console.log(data);
    return data;
  }
  return { success: false, message: data.message };
};

export { getTypes, getTypesById, createType, updateType, deletedType };

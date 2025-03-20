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

  const types = await res.json();

  return types.types
    ? (types.types[0] as TypesInterface[])
    : ([] as TypesInterface[]);
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

  const type = await res.json();

  return type;
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

  const type = await res.json();

  return type;
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

  const type = await res.json();

  return type;
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

  const type = await res.json();

  return type;
};

export { getTypes, getTypesById, createType, updateType, deletedType };

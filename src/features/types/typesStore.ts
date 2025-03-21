"use client";
import { Exome } from "exome";
import { TypesInterface } from "./typesInterface";
import { Modes } from "./modes";
//import { typesMock } from "@/libs/typesMock";

import {
  getTypes,
  //getTypesById,
  createType,
  updateType,
  deletedType,
} from "./typesServices";

class TypesStore extends Exome {
  typesMode: Modes = Modes.NEW;
  selectedType: TypesInterface | null = null;
  typesList: TypesInterface[] = [];
  typesState: boolean = true;

  showTypes() {
    this.typesState = true;
  }

  showProperties() {
    this.typesState = false;
  }

  setTypesMoodeEdit() {
    this.typesMode = Modes.EDIT;
  }

  setTypesModeNew() {
    this.typesMode = Modes.NEW;
    this.selectedType = null;
  }

  setSelectedType(type: TypesInterface) {
    this.selectedType = type;
  }

  async getTypesList(token: string) {
    const data = await getTypes(token);
    console.log("Solicitud de datos de tipos");
    console.table(data);
    if (data.success) {
      const types = data.types
      this.typesList = types as TypesInterface[];
      return true
    } 
    return false;
  }

  async saveType(
    token: string,
    type: Pick<TypesInterface, "name" | "description" | "properties">
  ) {
    console.log("Guardando tipo");
    console.log(type);
    const data = await createType(token, type);
    console.table(data);
    if (data.success) {
      return await this.getTypesList(token);
    }
    return false;
  }

  async updateType(token: string, type: TypesInterface) {
    console.log("Actualizando tipo");
    console.log(type);
    const data = await updateType(token, type);
    console.table(data);
    if (data.success) {
      return await this.getTypesList(token);
    }
    return false;
  }

  async deleteType(token: string, typeId: number) {
    console.log("Eliminando tipo");
    console.log(typeId);
    const data = await deletedType(token, typeId);
    console.table(data);
    if (data.success) {
      return await this.getTypesList(token);
    }
    return false;
  }
}

export const typesStore = new TypesStore();

"use client";
import { Exome } from "exome";
import { TypesInterface } from "./typesInterface";
import { Modes } from "./modes";

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
    const data = await createType(token, type);
    if (data.success) {
      return await this.getTypesList(token);
    }
    return false;
  }

  async updateType(token: string, type: TypesInterface) {
    const data = await updateType(token, type);
    if (data.success) {
      return await this.getTypesList(token);
    }
    return false;
  }

  async deleteType(token: string, typeId: number) {
    const data = await deletedType(token, typeId);
    if (data.success) {
      return await this.getTypesList(token);
    }
    return false;
  }
}

export const typesStore = new TypesStore();

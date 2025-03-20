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
    data.map((type: TypesInterface) => {
      this.typesList.push(type);
    });
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
      const newType = {
        id: this.typesList.length + 1,
        createdAt: new Date().toISOString(),
        ...type,
      } as TypesInterface;
      this.typesList.push(newType);
    }
  }

  async updateType(token: string, type: TypesInterface) {
    console.log("Actualizando tipo");
    console.log(type);

    const data = await updateType(token, type);
    console.table(data);
    if (data.success) {
      const newTypeList = this.typesList.map((t) =>
        t.id === type.id ? type : t
      );
      const validate = {
        oldTypeList: this.typesList,
        newTypeList: newTypeList,
      };
      console.table(validate);
      this.typesList = newTypeList;
    }
  }

  async deleteType(token: string, typeId: number) {
    console.log("Eliminando tipo");
    console.log(typeId);
    const data = await deletedType(token, typeId);
    console.table(data);
    if (data.success) {
      this.typesList = this.typesList.filter((t) => t.id !== typeId);
    }
  }
}

export const typesStore = new TypesStore();

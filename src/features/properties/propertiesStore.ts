import { Exome } from "exome";
import { PropertiesInterface } from "./propertiesInterface";
import { Modes } from "../types/modes";
//import { propertiesMock } from "@/libs/propertiesMock";

import {
  getProperties,
  //getPropertiesById,
  createProperty,
  updateProperty,
  deletedProperty,
} from "./propertiesServices";

class PropertiesStore extends Exome {
  propertiesMode: Modes = Modes.NEW;
  selectedProperty: PropertiesInterface | null = null;
  propertiesList: PropertiesInterface[] = [];
  propertiesState: boolean = false;

  showTypes() {
    this.propertiesState = true;
  }

  showProperties() {
    this.propertiesState = false;
  }

  setPropertiesModeEdit() {
    this.propertiesMode = Modes.EDIT;
  }

  setPropertiesModeNew() {
    this.propertiesMode = Modes.NEW;
    this.selectedProperty = null;
  }

  setSelectedProperty(property: PropertiesInterface) {
    this.selectedProperty = property;
  }

  async getPropertiesList(token: string) {
    const data = await getProperties(token);
    console.log("Solocitud de datos de propiedades");
    console.table(data);
    if (data.success) {
      const properties = data.properties;
      this.propertiesList = properties as PropertiesInterface[];
      return true;
    }
    return false;
  }

  async saveProperty(
    token: string,
    property: Pick<PropertiesInterface, "name" | "value">
  ) {
    console.log("Guardando propiedad");
    console.log(property);
    const data = await createProperty(token, property);
    console.table(data);
    if (data.success) {
      return await this.getPropertiesList(token);
    }
    return false;
  }

  async updateProperty(token: string, property: PropertiesInterface) {
    console.log("Actualizando propiedad");
    console.log(property);
    const data = await updateProperty(token, property);
    console.table(data);
    if (data.success) {
      return await this.getPropertiesList(token);
    }
    return false;
  }

  async deleteProperty(token: string, propertyId: number) {
    console.log("Eliminando propiedad");
    console.log(propertyId);
    const data = await deletedProperty(token, propertyId);
    console.table(data);
    if (data.success) {
      return await this.getPropertiesList(token);
    }
    return false;
  }
}

export const propertiesStore = new PropertiesStore();

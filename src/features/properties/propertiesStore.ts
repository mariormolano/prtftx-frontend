import { Exome } from "exome";
import { PropertiesInterface } from "./propertiesInterface";
import { Modes } from "../types/modes";

import {
  getProperties,
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
    if (data.success) {
      const properties = data.properties;
      this.propertiesList = properties as PropertiesInterface[];
      return true;
    } else {
      return false;
    }
  }

  async saveProperty(
    token: string,
    property: Pick<PropertiesInterface, "name" | "value">
  ) {
    const data = await createProperty(token, property);
    if (data.success) {
      return await this.getPropertiesList(token);
    }
    return false;
  }

  async updateProperty(token: string, property: PropertiesInterface) {
    const data = await updateProperty(token, property);
    if (data.success) {
      return await this.getPropertiesList(token);
    }
    return false;
  }

  async deleteProperty(token: string, propertyId: number) {
    const data = await deletedProperty(token, propertyId);
    if (data.success) {
      return await this.getPropertiesList(token);
    }
    return false;
  }
}

export const propertiesStore = new PropertiesStore();

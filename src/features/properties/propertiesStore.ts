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
    data.map((property: PropertiesInterface) => {
      this.propertiesList.push(property);
    });
    //this.propertiesList = propertiesMock as PropertiesInterface[];
  }

  async saveProperty(
    token: string,
    property: Pick<PropertiesInterface, "name" | "value">
  ) {
    console.log("Guardando propiedad");
    console.log(property);
    const data = await createProperty(token, property);
    console.table(data);
    // const newProperty = {
    //   id: this.propertiesList.length + 1,
    //   createdAt: new Date(),
    //   name: property.name,
    //   value: property.value,
    // } as PropertiesInterface;
    // const validate = {
    //   newProperty,
    //   selectedProperty: this.selectedProperty,
    // };
    // console.table(validate);
    // this.propertiesList.push(newProperty);
  }

  async updateProperty(token: string, property: PropertiesInterface) {
    console.log("Actualizando propiedad");
    console.log(property);

    const data = await updateProperty(token, property);
    console.table(data);
    // if (data.success) {
    //   const newPropertyList = this.propertiesList.map((p) =>
    //     p.id === property.id ? property : p
    //   );
    //   const validate = {
    //     newPropertyList,
    //     oldPropertyList: this.propertiesList,
    //   };
    //   console.table(validate);
    //   this.propertiesList = newPropertyList;
    // }
  }

  //   const newPropertyList = this.propertiesList.map((p) =>
  //     p.id === property.id ? property : p
  //   );
  //   const validate = {
  //     newPropertyList,
  //     oldPropertyList: this.propertiesList,
  //   };
  //   console.table(validate);
  //   this.propertiesList = newPropertyList;
  //   // this.propertiesList = this.propertiesList.map((p) =>
  //   //   p.id === property.id ? property : p
  //   // );
  // }

  async deleteProperty(token: string, propertyId: number) {
    console.log("Eliminando propiedad");
    console.log(propertyId);
    const data = await deletedProperty(token, propertyId);
    console.table(data);

    // this.propertiesList = this.propertiesList.filter(
    //   (p) => p.id !== propertyId
    // );
  }
}

export const propertiesStore = new PropertiesStore();

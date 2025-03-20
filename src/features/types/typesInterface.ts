import { PropertiesInterface } from "../properties/propertiesInterface";

export interface TypesInterface {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  properties: PropertiesInterface[];
}

"use client";

import { useStore } from "exome/react";

import {
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Modes } from "@/features/types/modes";
import { PropertiesInterface } from "@/features/properties/propertiesInterface";
import { TypesInterface } from "@/features/types/typesInterface";

import { typesStore } from "@/features/types/typesStore";
import { propertiesStore } from "@/features/properties/propertiesStore";
import { drawerStore } from "@/features/Drawer/drawerStore";
import useAuthToken from "@/features/auth/useAuthToken";

const TypeForm = () => {
  const { token } = useAuthToken();
  const { typesMode, selectedType, saveType, updateType } =
    useStore(typesStore);
  const { propertiesList, getPropertiesList } = useStore(propertiesStore);
  const { setIsOpen } = useStore(drawerStore);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [propertiesOptiones, setPropertiesOptions] = useState<string[]>([]);

  useEffect(() => {
    if (typesMode === Modes.EDIT && selectedType && propertiesList.length > 0) {
      setName(selectedType.name);
      setDescription(selectedType.description);
      setPropertiesOptions(selectedType.properties.map((prop) => prop.name));
    }
  }, [propertiesList.length, selectedType, typesMode]);

  useEffect(() => {
    if (token) {
      if (propertiesList.length === 0) {
        getPropertiesList(token);
      }
    }
  }, [getPropertiesList, propertiesList.length, token]);

  const handleSave = () => {
    if (typesMode === Modes.EDIT && selectedType) {
      const updatedType = {
        id: selectedType.id,
        name,
        description,
        createdAt: selectedType.createdAt,
        properties: propertiesOptiones.map((prop) => {
          return propertiesList.find(
            (p) => p.name === prop
          ) as PropertiesInterface;
        }),
      } as TypesInterface;
      if (token) {
        updateType(token, updatedType);
      }

      setIsOpen(false);
    } else {
      if (token) {
        saveType(token, {
          name,
          description,
          properties: propertiesOptiones.map((prop) => {
            return propertiesList.find(
              (p) => p.name === prop
            ) as PropertiesInterface;
          }),
        });
        setIsOpen(false);
      }
    }
  };

  return (
    <FormGroup
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        height: "380px",
        mt: 2,
      }}
    >
      <FormLabel>Editar Tipo</FormLabel>
      <FormControl variant="standard" sx={{ width: "95%", maxWidth: "600px" }}>
        <InputLabel htmlFor="name">Nombre</InputLabel>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
        />
        <FormHelperText>Ingresa el nombre</FormHelperText>
      </FormControl>
      <FormControl variant="standard" sx={{ width: "95%", maxWidth: "600px" }}>
        <InputLabel htmlFor="">Descripción</InputLabel>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        />
        <FormHelperText>Ingresa la descripción del tipo</FormHelperText>
      </FormControl>

      <FormControl variant="standard" sx={{ width: "95%", maxWidth: "600px" }}>
        <InputLabel id="demo-simple-select-label">Propiedades</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={propertiesOptiones}
          label="Propiedades"
          onChange={(e) => setPropertiesOptions(e.target.value as string[])}
          renderValue={(selected) => selected.join(", ")}
          multiple
        >
          {propertiesList.map((property, id) => {
            return (
              <MenuItem key={id} value={property.name}>
                <Checkbox
                  checked={
                    propertiesOptiones.includes(property.name) ? true : false
                  }
                />
                <ListItemText primary={property.name} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleSave}>
        Guardar
      </Button>
    </FormGroup>
  );
};

export default TypeForm;

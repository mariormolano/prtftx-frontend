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
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Modes } from "@/features/types/modes";

import { PropertiesValuesEnum } from "@/features/properties/PropertiesValuesEnum";

import { propertiesStore } from "@/features/properties/propertiesStore";
import { drawerStore } from "@/features/Drawer/drawerStore";

import useAuthToken from "@/features/auth/useAuthToken";

const ProperyForm = () => {
  const { token } = useAuthToken();
  const {
    propertiesList,
    getPropertiesList,
    propertiesMode,
    selectedProperty,
    updateProperty,
    saveProperty,
  } = useStore(propertiesStore);
  const { setIsOpen } = useStore(drawerStore);

  const [name, setName] = useState("");
  const [propertyValue, setPropertyValue] = useState<PropertiesValuesEnum>(
    PropertiesValuesEnum.TEXT
  );

  useEffect(() => {
    if (
      propertiesMode === Modes.EDIT &&
      selectedProperty &&
      propertiesList.length > 0
    ) {
      setName(selectedProperty.name);
      setPropertyValue(selectedProperty.value as PropertiesValuesEnum);
    }
  }, [propertiesList.length, selectedProperty, propertiesMode]);

  useEffect(() => {
    if (propertiesList.length === 0) {
      if (token) {
        getPropertiesList(token);
      }
    }
  }, [getPropertiesList, propertiesList.length]);

  const handleSave = () => {
    if (propertiesMode === Modes.EDIT && selectedProperty) {
      const updatedProperty = {
        id: selectedProperty.id,
        name,
        createdAt: selectedProperty.createdAt,
        value: propertyValue,
      };
      if (token) {
        updateProperty(token, updatedProperty);
        setIsOpen(false);
      }
    } else {
      if (token) {
        saveProperty(token, {
          name,
          value: propertyValue,
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
      <FormLabel>Editar Propiedad</FormLabel>
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
        <InputLabel id="valores">Valores</InputLabel>
        <Select
          labelId="valores"
          id="valores"
          value={propertyValue}
          label="Propiedades"
          onChange={(e) =>
            setPropertyValue(e.target.value as PropertiesValuesEnum)
          }
          renderValue={(selected) => selected}
        >
          <MenuItem value={PropertiesValuesEnum.TEXT}>
            <ListItemText primary={PropertiesValuesEnum.TEXT} />
          </MenuItem>
          <MenuItem value={PropertiesValuesEnum.NUMBER}>
            <ListItemText primary={PropertiesValuesEnum.NUMBER} />
          </MenuItem>
          <MenuItem value={PropertiesValuesEnum.DATE}>
            <ListItemText primary={PropertiesValuesEnum.DATE} />
          </MenuItem>
          <MenuItem value={PropertiesValuesEnum.BOOLEAN}>
            <ListItemText primary={PropertiesValuesEnum.BOOLEAN} />
          </MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleSave}>
        Guardar
      </Button>
    </FormGroup>
  );
};

export default ProperyForm;

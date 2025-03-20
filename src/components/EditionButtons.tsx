"use client";
import { useStore } from "exome/react";

import { ButtonGroup, IconButton } from "@mui/material";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import EditIcon from "@mui/icons-material/Edit";

import { TypesInterface } from "@/features/types/typesInterface";
import { PropertiesInterface } from "@/features/properties/propertiesInterface";

import { drawerStore } from "@/features/Drawer/drawerStore";
import { typesStore } from "@/features/types/typesStore";
import { propertiesStore } from "@/features/properties/propertiesStore";
import useAuthToken from "@/features/auth/useAuthToken";

interface EditionButtonsProps {
  types?: TypesInterface;
  properties?: PropertiesInterface;
}

const EditionButtons: React.FC<EditionButtonsProps> = ({
  types,
  properties,
}) => {
  const { token } = useAuthToken();
  const { setSelectedType, setTypesMoodeEdit, deleteType } =
    useStore(typesStore);
  const { setIsOpen } = useStore(drawerStore);
  const { setSelectedProperty, setPropertiesModeEdit, deleteProperty } =
    useStore(propertiesStore);

  const handleEdit = () => {
    if (types) {
      console.log(types);
      setSelectedType(types);
      setTypesMoodeEdit();
      setIsOpen(true);
    }
    if (properties) {
      console.log(properties);
      setSelectedProperty(properties);
      setPropertiesModeEdit();
      setIsOpen(true);
    }
  };

  const handleDelete = () => {
    if (token) {
      if (types) {
        console.log(types);
        deleteType(token, types.id);
      }
      if (properties) {
        console.log(properties);
        deleteProperty(token, properties.id);
      }
    }
  };

  return (
    <ButtonGroup sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
      <IconButton edge="end" aria-label="editar" onClick={handleEdit}>
        <EditIcon sx={{ color: "text.secondary" }} />
      </IconButton>
      <IconButton edge="end" aria-label="borrar" onClick={handleDelete}>
        <DeleteOutlineTwoToneIcon sx={{ color: "error.main" }} />
      </IconButton>
    </ButtonGroup>
  );
};

export default EditionButtons;

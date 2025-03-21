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
import { authStore } from "@/features/auth/authStore";

import useAuthToken from "@/features/auth/useAuthToken";
import { roleEnum } from "@/features/auth/roleEnum";

interface EditionButtonsProps {
  types?: TypesInterface;
  properties?: PropertiesInterface;
}

const EditionButtons: React.FC<EditionButtonsProps> = ({
  types,
  properties,
}) => {
  const { token } = useAuthToken();
  const { role } = useStore(authStore);
  const { setSelectedType, setTypesMoodeEdit, deleteType } =
    useStore(typesStore);
  const { setIsOpen } = useStore(drawerStore);
  const { setSelectedProperty, setPropertiesModeEdit, deleteProperty } =
    useStore(propertiesStore);

  const handleEdit = () => {
    if (types) {
      setSelectedType(types);
      setTypesMoodeEdit();
      setIsOpen(true);
    }
    if (properties) {
      setSelectedProperty(properties);
      setPropertiesModeEdit();
      setIsOpen(true);
    }
  };

  const handleDelete = () => {
    if (token) {
      if (types) {
        deleteType(token, types.id);
      }
      if (properties) {
        deleteProperty(token, properties.id);
      }
    }
  };

  return role === roleEnum.ADMIN ? (
    <ButtonGroup sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
      <IconButton edge="end" aria-label="editar" onClick={handleEdit}>
        <EditIcon sx={{ color: "text.secondary" }} />
      </IconButton>
      <IconButton edge="end" aria-label="borrar" onClick={handleDelete}>
        <DeleteOutlineTwoToneIcon sx={{ color: "error.main" }} />
      </IconButton>
    </ButtonGroup>
  ) : null;
};

export default EditionButtons;

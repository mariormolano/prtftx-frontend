"use client";
import { useStore } from "exome/react";
import useAuthToken from "@/features/auth/useAuthToken";
import { Box, Button } from "@mui/material";
import { typesStore } from "@/features/types/typesStore";

const Header = () => {
  const { isAuthenticated } = useAuthToken();
  const { typesState, showTypes, showProperties } = useStore(typesStore);
  return isAuthenticated() && (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
        my: 2,
      }}
    >
      <Button
        variant={typesState ? "contained" : "outlined"}
        sx={{ width: "150px" }}
        onClick={showTypes}
      >
        Tipos
      </Button>
      <Button
        variant={typesState ? "outlined" : "contained"}
        sx={{ width: "150px" }}
        onClick={showProperties}
      >
        Propiedades
      </Button>
    </Box>
  );
};

export default Header;

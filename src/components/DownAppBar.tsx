"use client";
import { useStore } from "exome/react";
import { AppBar, Box, Fab, IconButton, styled, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { drawerStore } from "@/features/Drawer/drawerStore";

import { typesStore } from "@/features/types/typesStore";
import { propertiesStore } from "@/features/properties/propertiesStore";
import { useRouter } from "next/navigation";

const DownAppBar = () => {
  const router = useRouter();
  const { setIsOpen } = useStore(drawerStore);
  const { setTypesModeNew, typesMode } = useStore(typesStore);
  const { setPropertiesModeNew, propertiesMode } = useStore(propertiesStore);
  const StyledFab = styled(Fab)({
    position: "absolute",
    Index: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });

  const handleNew = () => {
    console.log(typesMode);

    if (typesMode === "NEW") {
      setTypesModeNew();
      setIsOpen(true);
    }

    if (typesMode === "EDIT") {
      setTypesModeNew();
      setIsOpen(true);
    }

    if (propertiesMode === "NEW") {
      setPropertiesModeNew();
      setIsOpen(true);
    }

    if (propertiesMode === "EDIT") {
      setPropertiesModeNew();
      setIsOpen(true);
    }
  };

  const handleLog = () => {
    router.push("/login");
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <StyledFab color="secondary" aria-label="add" onClick={handleNew}>
          <AddIcon />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={handleLog}>
          <AccountBoxIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DownAppBar;

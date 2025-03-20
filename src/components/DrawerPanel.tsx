import { useStore } from "exome/react";
import TypeForm from "./forms/TypeForm";
import { Drawer } from "@mui/material";

import { drawerStore } from "@/features/Drawer/drawerStore";
import { typesStore } from "@/features/types/typesStore";
import ProperyForm from "./forms/ProperyForm";

export default function DrawerPanel() {
  const { isOpen, setIsOpen } = useStore(drawerStore);
  const { typesState } = useStore(typesStore);

  return (
    <>
      <Drawer anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
        {typesState ? <TypeForm /> : <ProperyForm />}
      </Drawer>
    </>
  );
}

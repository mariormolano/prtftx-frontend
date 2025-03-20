import { Exome } from "exome";

class DrawerStore extends Exome {
  isOpen = false;

  setIsOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}

export const drawerStore = new DrawerStore();

"use client";
import { useEffect } from "react";
import { useStore } from "exome/react";
import { useRouter } from "next/navigation";
import useAuthToken from "@/features/auth/useAuthToken";

import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Tables from "@/components/tables/Tables";
import DrawerPanel from "@/components/DrawerPanel";

import { authStore } from "@/features/auth/authStore";
import { typesStore } from "@/features/types/typesStore";
import { propertiesStore } from "@/features/properties/propertiesStore";
import { Button } from "@mui/material";

export default function Dashboard() {
  const router = useRouter();

  const { token, isAuthenticated, removeToken } = useAuthToken();

  const { logout, serverToken } = useStore(authStore);
  const { getTypesList } = useStore(typesStore);
  const { getPropertiesList } = useStore(propertiesStore);

  useEffect(() => {
    const getTypes = async () => {
      if (isAuthenticated()) {
        console.log("Solicitud de tipos");
        const res = await getTypesList(token as string);
        if (!res) {
          console.log(
            "Error en la solicitud de tipos redirigiendo a login ",
            res
          );
          logout();
          removeToken();
          router.push("/login");
        }
      }
    };

    const getProperties = async () => {
      if (isAuthenticated()) {
        console.log("Solicitud de propiedades");
        const res = await getPropertiesList(token as string);
        if (!res) {
          console.log(
            "Error en la solicitud de propiedades redirigiendo a login ",
            res
          );
          logout();
          removeToken();
          router.push("/login");
        }
      }
    };

    getTypes();
    getProperties();
  }, [isAuthenticated(), serverToken]);

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <Header />
      <Box my={2} mb={10}>
        <DrawerPanel />
        {isAuthenticated() ? (
          <Tables />
        ) : (
          <Button onClick={handleLogin}>Iniciar sesión</Button>
        )}
      </Box>
    </>
  );
}

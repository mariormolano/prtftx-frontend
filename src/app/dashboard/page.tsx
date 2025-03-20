"use client";
import { useStore } from "exome/react";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Tables from "@/components/tables/Tables";
import { authStore } from "@/features/auth/authStore";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import DrawerPanel from "@/components/DrawerPanel";
import useAuthToken from "@/features/auth/useAuthToken";
import { validate } from "@/features/auth/authService";

export default function Dashboard() {
  const { isValidate, logout } = useStore(authStore);
  const [tokenStatus, setTokenStatus] = useState(false);
  const { token, removeToken } = useAuthToken();

  useEffect(() => {
    console.log("Token", token);

    if (token) {
      validate(token)
        .then((res) => {
          if (res) {
            setTokenStatus(true);
            isValidate();
            console.log("Token is valid");
          } else {
            logout();
            removeToken();
            console.log("Token is invalid");
            redirect("/login");
          }
        })
        .catch(() => {
          logout();
          removeToken();
          console.log("Token is invalid");
          redirect("/login");
        });
    }
  }, [isValidate, token]);
  return (
    <>
      <Header />
      <Box my={2} mb={10}>
        <DrawerPanel />
        {tokenStatus ? <Tables /> : "No autorizado"}
      </Box>
    </>
  );
}

"use client";
import { useStore } from "exome/react";
import { useEffect } from "react";

import Box from "@mui/material/Box";
import { Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import LoginFrom from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import LogoutForm from "@/components/forms/LogoutForm";

import { authStore } from "@/features/auth/authStore";

import useAuthToken from "@/features/auth/useAuthToken";
export default function Login() {
  const { loginModal, showLoginModal, showRegisterModal } = useStore(authStore);

  const { tokenStatus, setTokenStatus } = useStore(authStore);
  const { token } = useAuthToken();

  useEffect(() => {
    if (tokenStatus === 0) {
      if (typeof token !== "object") {
        if (token.length > 0) {
          setTokenStatus(2);
        } else {
          setTokenStatus(1);
        }
      }
    }
  }, [token]);

  const SelectForm = () => {
    console.log("Token", tokenStatus);
    if (tokenStatus > 0) {
      if (tokenStatus === 2) {
        return <LogoutForm />;
      }
      if (tokenStatus === 1) {
        return <LoginFrom />;
      }
    }
  };

  return (
    <>
      <Box
        my={2}
        mb={10}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TabContext value={loginModal}>
          <TabList>
            <Tab label="Iniciar sesión" value={1} onClick={showLoginModal} />
            <Tab label="Registro" value={2} onClick={showRegisterModal} />
          </TabList>
        </TabContext>
        {loginModal === 1 ? <SelectForm /> : <RegisterForm />}
      </Box>
    </>
  );
}

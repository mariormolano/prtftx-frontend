"use client";
import { useStore } from "exome/react";
import Box from "@mui/material/Box";
import { authStore } from "@/features/auth/authStore";
import { Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import LoginFrom from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import LogoutForm from "@/components/forms/LogoutForm";
import { useEffect, useState } from "react";
import useAuthToken from "@/features/auth/useAuthToken";
import { validate } from "@/features/auth/authService";

export default function Login() {
  const { loginModal, showLoginModal, showRegisterModal } = useStore(authStore);

  const { isValidate } = useStore(authStore);
  const [tokenStatus, setTokenStatus] = useState<number>(0);
  const { token, removeToken } = useAuthToken();

  useEffect(() => {
    console.log("Valor Token", typeof token);

    if (typeof token === "string") {
      if (token.length === 0) {
        setTokenStatus(1);
      } else {
        validate(token)
          .then((res) => {
            if (res) {
              setTokenStatus(2);
              isValidate();
              console.log("Token is valid");
            } else {
              setTokenStatus(1);
              removeToken();
              console.log("Token is invalid");
            }
          })
          .catch(() => {
            setTokenStatus(1);
            removeToken();
            console.log("Token is invalid");
          });
      }
    }
  }, [isValidate, token]);

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

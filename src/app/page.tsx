"use client";
import { useStore } from "exome/react";
import { authStore } from "@/features/auth/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthToken from "@/features/auth/useAuthToken";
import { validate } from "@/features/auth/authService";

export default function App() {
  const router = useRouter();

  const { isValidate, logout } = useStore(authStore);
  const { token, removeToken } = useAuthToken();

  useEffect(() => {
    console.log("Valor Token", typeof token, token);

    if (typeof token === "string") {
      if (token.length === 0) {
        router.push("/login");
      } else {
        console.log("Validando token");

        validate(token)
          .then((res) => {
            console.log("Respuesta:", res);

            if (res) {
              isValidate();
              console.log("Token is valid");
              router.push("/dashboard");
            } else {
              removeToken();
              logout();
              console.log("Token is invalid");
              router.push("/login");
            }
          })
          .catch(() => {
            removeToken();
            logout();
            console.log("Token is invalid");
            router.push("/login");
          });
      }
    }
  }, [isValidate, removeToken, router, token]);

  return <></>;
}

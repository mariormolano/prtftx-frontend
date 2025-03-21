"use client";
import { useStore } from "exome/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthToken from "@/features/auth/useAuthToken";
import { authStore } from "@/features/auth/authStore";

export default function App() {
  const { tokenStatus, setTokenStatus } = useStore(authStore);
  const router = useRouter();

  const { token } = useAuthToken();

  useEffect(() => {
    if (tokenStatus === 0) {
      if (typeof token !== "object") {
        if (token.length > 0) {
          setTokenStatus(2);
          router.push("/dashboard");
        } else {
          setTokenStatus(1);
          console.log("Redireccionando a login desde home");
          router.push("/login");
        }
      }
    }
  }, [token]);
}

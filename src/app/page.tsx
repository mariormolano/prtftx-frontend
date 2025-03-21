"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthToken from "@/features/auth/useAuthToken";

export default function App() {
  const router = useRouter();

  const { isAuthenticated } = useAuthToken();

  useEffect(() => {
    if (!isAuthenticated()) {
      console.log("No autenticado redirigiendo a login desde home");
      router.push("/login");
    } else {
      console.log("Autenticado redirigiendo a dashboard desde home");
      router.push("/dashboard");
    }
  }, []);
}

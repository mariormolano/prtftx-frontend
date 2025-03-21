"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    console.log("Autenticado redirigiendo a dashboard desde home");
    router.push("/dashboard");
  }, []);
}

"use client";
import { useStore } from "exome/react";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Tables from "@/components/tables/Tables";
import { authStore } from "@/features/auth/authStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DrawerPanel from "@/components/DrawerPanel";
import useAuthToken from "@/features/auth/useAuthToken";

export default function Dashboard() {
  const router = useRouter();
  const { tokenStatus, setTokenStatus } = useStore(authStore);
  const { token } = useAuthToken();

  useEffect(() => {
    if (tokenStatus === 0) {
      if (typeof token !== "object") {
        if (token.length > 0) {
          setTokenStatus(2);
        } else {
          setTokenStatus(1);
          router.push("/login");
        }
      }
    }
  }, [token]);
  return (
    <>
      <Header />
      <Box my={2} mb={10}>
        <DrawerPanel />
        {tokenStatus === 2 ? <Tables /> : "No autorizado"}
      </Box>
    </>
  );
}

import { useStore } from "exome/react";
import { Paper, TableContainer } from "@mui/material";
import TypesTable from "./TypesTable";
import PropertiesTable from "./PropertiesTable";
import DownAppBar from "../DownAppBar";
import { typesStore } from "@/features/types/typesStore";

const Tables = () => {
  const { typesState } = useStore(typesStore);
  return (
    <Paper square sx={{ pb: "50px", borderColor: "palette.secondary.dark" }}>
      <TableContainer component={Paper}>
        {typesState ? <TypesTable /> : <PropertiesTable />}
      </TableContainer>
      <DownAppBar />
    </Paper>
  );
};

export default Tables;

import { useStore } from "exome/react";
import { styled, Table, TableBody, TableHead, TableRow } from "@mui/material";
import EditionButtons from "../EditionButtons";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { typeOptionEnum } from "@/types/typeOptionEnum";
import { useEffect } from "react";

import useAuthToken from "@/features/auth/useAuthToken";

import { propertiesStore } from "@/features/properties/propertiesStore";

const PropertiesTable = () => {
  const { token } = useAuthToken();
  const { getPropertiesList, propertiesList } = useStore(propertiesStore);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    if (token) {
      if (propertiesList.length === 0) {
        getPropertiesList(token);
      }
    }
  }, [getPropertiesList, propertiesList, propertiesList.length, token]);
  return (
    <Table size="small" sx={{ minWidth: 650, width: "100%" }}>
      <TableHead>
        <TableRow>
          <StyledTableCell>Nombre</StyledTableCell>
          <StyledTableCell align="left">Valor</StyledTableCell>
          <StyledTableCell align="left">Creación</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {propertiesList.map((property, key) => (
          <StyledTableRow
            key={key}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell align="center" component="th" scope="row">
              <strong>{property.name}</strong>

              <EditionButtons properties={property} />
            </StyledTableCell>
            <StyledTableCell align="center">
              {property.value as typeOptionEnum}
            </StyledTableCell>
            <StyledTableCell align="center">2020-10-01</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PropertiesTable;

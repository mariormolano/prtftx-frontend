"use client";
import { useStore } from "exome/react";
import {
  Chip,
  Stack,
  styled,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import EditionButtons from "../EditionButtons";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import { TypesInterface } from "@/features/types/typesInterface";

import { typesStore } from "@/features/types/typesStore";

const TypesTable = () => {
  const { typesList } = useStore(typesStore);

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

  return (
    <Table size="small" sx={{ minWidth: 650, width: "100%" }}>
      <TableHead>
        <TableRow>
          <StyledTableCell>Nombre</StyledTableCell>
          <StyledTableCell align="left">Descripción</StyledTableCell>
          <StyledTableCell align="left">Creación</StyledTableCell>
          <StyledTableCell align="left">Propiedades</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {typesList.map((type) => (
          <StyledTableRow
            key={type.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell align="center" component="th" scope="row">
              <strong>{type.name}</strong>

              <EditionButtons types={type as TypesInterface} />
            </StyledTableCell>
            <StyledTableCell align="left">{type.description}</StyledTableCell>
            <StyledTableCell align="center">2020-10-01</StyledTableCell>
            <StyledTableCell align="right">
              <Stack direction="row" spacing={1}>
                {type.properties &&
                  type.properties.map((property) => (
                    <div key={property.name}>
                      <Tooltip title={property.value} arrow>
                        <Chip
                          key={property.name}
                          label={property.name}
                          variant="outlined"
                          clickable
                        />
                      </Tooltip>
                    </div>
                  ))}
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TypesTable;

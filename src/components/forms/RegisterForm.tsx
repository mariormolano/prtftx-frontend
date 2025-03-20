import {
  FormGroup,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  InputLabel,
  Input,
} from "@mui/material";

const RegisterForm = () => {
  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "300px",
        mt: 2,
      }}
    >
      <FormLabel>Registrar usuario nuevo</FormLabel>
      <FormControl variant="standard">
        <InputLabel htmlFor="role">Rol</InputLabel>
        <Select id="role" defaultValue={1}>
          <MenuItem value={1}>USER</MenuItem>
          <MenuItem value={2}>ADMIN</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="Name" />
        <FormHelperText>Ingresa el nombre</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" />
        <FormHelperText>Ingresa en email</FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="password">Contaseña</InputLabel>
        <Input id="password" type="password" />
        <FormHelperText>Ingresa la contraseña</FormHelperText>
      </FormControl>

      <Button variant="contained">Registrar</Button>
    </FormGroup>
  );
};

export default RegisterForm;

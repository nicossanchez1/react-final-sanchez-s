import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageAlert = ({ idCompra }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Su numero de orden de compra es: {idCompra}
      </Alert>
    </Stack>
  );
};

export default MessageAlert;

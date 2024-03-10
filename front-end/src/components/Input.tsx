import { InputBase, InputLabel } from "@mui/material";

export default function Input(props: any) {
  const { placeholder, type, onChange, height } = props;

  return (
    <InputBase
      sx={{
        width: "380px",
        height: { height },
        bgcolor: "#ECEDF0",
        borderRadius: "4px",
        paddingInline: "8px",
      }}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

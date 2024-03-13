import { InputBase, InputLabel } from "@mui/material";

export default function Input(props: any) {
  const { placeholder, type, onChange, height, name } = props;

  return (
    <InputBase
      sx={{
        width: "380px",
        height: height,
        bgcolor: "#F7F7F8",
        borderRadius: "4px",
        paddingInline: "8px",
      }}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}

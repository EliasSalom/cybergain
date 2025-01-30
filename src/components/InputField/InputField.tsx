import { TextField, MenuItem } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type: "text" | "email" | "number" | "select";
  control: any;
  options?: string[];
  className?:any
}

const InputField: FC<InputFieldProps> = ({
  name,
  label,
  type,
  control,
  options,
  className
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          select={type === "select"}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          fullWidth
          InputLabelProps={{ style: { color: '#fff' } }}
          InputProps={{
            style: { color: '#fff' }, 
          }}
          className={className}     
             >
          {type === "select" &&
            options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
};

export default InputField;

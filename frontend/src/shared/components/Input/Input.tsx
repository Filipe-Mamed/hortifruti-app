import { useState } from "react";
import { SInput, SIconButton, SInputWrapper } from "./Input.styled";
import { IoEye, IoEyeOff } from "react-icons/io5";

interface IInputProps {
  type: "text" | "number" | "password" | "email";
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  width?: string;
  height?: string;
  hasError?: boolean;
  style?: React.CSSProperties;
  showPassword?: boolean;
}

export function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
  width,
  height,
  hasError,
  style,
  showPassword,
}: IInputProps) {
  const [security, setSecurity] = useState(showPassword);

  const handlePassword = () => {
    setSecurity((prev) => !prev);
  };

  const inputType =
    type === "password" ? (security ? "text" : "password") : type;

  return (
    <SInputWrapper style={{ width, height, position: "relative", ...style }}>
      <SInput
        type={inputType}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        width={width}
        height={height}
        $hasError={hasError}
        style={style}
      />
      {type === "password" && (
        <SIconButton onClick={handlePassword} type="button">
          {security ? <IoEye /> : <IoEyeOff />}
        </SIconButton>
      )}
    </SInputWrapper>
  );
}

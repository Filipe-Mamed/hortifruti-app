import { SSelect, SOption } from "./Select.styled";

interface IOptionProps {
  label: string | undefined;
  value: string | undefined;
}

interface ISelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOptionProps[];
  placeholder?: string;
}

export function Select({
  name,
  value,
  onChange,
  options,
  placeholder = "Selecione uma categoria",
}: ISelectProps) {
  return (
    <SSelect value={value} name={name} onChange={onChange}>
      <SOption disabled value="">
        {placeholder}
      </SOption>
      {options.map((option) => (
        <SOption value={option.value} key={option.value}>
          {option.label}
        </SOption>
      ))}
    </SSelect>
  );
}

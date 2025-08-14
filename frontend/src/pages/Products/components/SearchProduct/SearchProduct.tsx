import { Input } from "../../../../shared/components/Input";

interface ISearchProduct {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}


export function SearchProduct({onChange, value}: ISearchProduct) {
  return (
    <>
      <Input
        type="text"
        placeholder="Nome do produto ou categoria"
        onChange={onChange}
        value={value}
        name="nome"
      />
    </>
  );
}

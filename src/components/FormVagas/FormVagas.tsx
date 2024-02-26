import { FormEvent, useState } from 'react';
import { FormContainer, SearchButton, SearchInput } from './FormVagas.styles';

type Props = {
  aoPesquisar: (termo: string) => void;
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <SearchInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchButton type="submit">
        Pesquisar
      </SearchButton>
    </FormContainer>
  );
}

export default FormVagas;

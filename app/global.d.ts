export {};

declare global {
  interface Window {
    minhaFuncao: (cpf: string, token: string) => void;
  }
}
export {};

type UpdateFcmParams = {
  token: string;
  cpf: string;
  customer: string;
  tenant: string; 
}

declare global {
  interface Window {
    updateUserFcm: (data: UpdateFcmParams) => void;
  }
}
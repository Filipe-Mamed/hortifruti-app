import { AxiosError } from "axios";

export function getErrorMessage(error: AxiosError) {
  if (typeof error === "string") {
    return error;
  }

  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    (error as AxiosError).response?.data
  ) {
    const data = (error as AxiosError).response?.data as {
      error?: string;
      message?: string;
    };
    return data.error || data.message || "Erro inesperado. Tente novamente.";
  }
  return "Erro desconhecido";
}

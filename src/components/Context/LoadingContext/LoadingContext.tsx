// Contexto global pra tela de Loading
import { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";

type LoadingContextType = {
  isLoading:boolean;
  setIsLoading: (Value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);


type LoadingProviderProps = {
  children: ReactNode;
}
export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if(context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context;
}

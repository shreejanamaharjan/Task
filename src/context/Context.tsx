import { createContext, ReactNode, useState } from "react";

interface IButtonContextProps {
  showOverlay: boolean;
  toggleOverlay: () => void;
  showPayment: boolean;
  togglePayment: () => void;
}

const ButtonContext = createContext<IButtonContextProps | undefined>(undefined);

interface BooleanProviderProps {
  children: ReactNode;
}

export const BooleanProvider: React.FC<BooleanProviderProps> = ({
  children,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const toggleOverlay = () => {
    setShowPayment(false);
    setShowOverlay((prev) => !prev);
  };

  const togglePayment = () => {
    setShowPayment((prev) => !prev);
  };

  return (
    <ButtonContext.Provider
      value={{ showOverlay, toggleOverlay, showPayment, togglePayment }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;

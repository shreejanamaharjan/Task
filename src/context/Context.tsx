import { createContext, ReactNode, useReducer, useState } from "react";

// Define AuthState and AuthAction interfaces
interface AuthState {
  userId: string | null;
  accesstoken: string | null;
  refreshtoken: string | null;
}

interface AuthAction {
  type: string;
  payload?: any;
}

// Define context properties
interface IButtonContextProps {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  showOverlay: boolean;
  toggleOverlay: () => void;
  showPayment: boolean;
  togglePayment: () => void;
}

// Initial Auth State
const initialAuthState: AuthState = {
  userId: localStorage.getItem("userId"),
  accesstoken: localStorage.getItem("accessToken"),
  refreshtoken: localStorage.getItem("refreshToken"),
};

// Create Context
const ButtonContext = createContext<IButtonContextProps>({
  state: initialAuthState,
  dispatch: () => undefined,
  showOverlay: false,
  toggleOverlay: () => {},
  showPayment: false,
  togglePayment: () => {},
});

// Auth Reducer function
const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        userId: action.payload.userId,
        accesstoken: action.payload.accesstoken,
        refreshtoken: action.payload.refreshtoken,
      };

    case "LOGOUT":
      return {
        userId: null,
        accesstoken: null,
        refreshtoken: null,
      };
    case "SET_TOKEN":
      return {
        ...state,
        accesstoken: action.payload?.accesstoken || null,
        refreshtoken: action.payload?.refreshtoken || null,
      };
    case "CLEAR_TOKEN":
      return {
        ...state,
        accesstoken: null,
        refreshtoken: null,
      };

    default:
      return state;
  }
};

// BooleanProvider Component
interface BooleanProviderProps {
  children: ReactNode;
}

export const BooleanProvider: React.FC<BooleanProviderProps> = ({
  children,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  const toggleOverlay = () => {
    setShowPayment(false);
    setShowOverlay((prev) => !prev);
  };

  const togglePayment = () => {
    setShowPayment((prev) => !prev);
  };

  return (
    <ButtonContext.Provider
      value={{
        state,
        dispatch,
        showOverlay,
        toggleOverlay,
        showPayment,
        togglePayment,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;

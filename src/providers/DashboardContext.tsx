import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import Modal from "react-modal";
import { NewProductModal } from "../components/NewProductModal";

Modal.setAppElement("#__next");

interface DashboardProviderProps {
  children: ReactNode;
  id: string;
}

interface DashboardContextProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  setSummary: Dispatch<SetStateAction<Summary>>;
  accountID: string;
  updateTable: boolean;
  isOpenModal: boolean;
  summary: Summary;
}

interface Summary {
  qtdProducts: number;
  totalValueProducts: number;
  ticketAverage: number;
}

export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children, id }: DashboardProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const [summary, setSummary] = useState({} as Summary);
  const accountID = id;

  return (
    <DashboardContext.Provider
      value={{
        setSummary,
        setIsOpenModal,
        setUpdateTable,
        summary,
        updateTable,
        isOpenModal,
        accountID,
      }}
    >
      <NewProductModal />
      {children}
    </DashboardContext.Provider>
  );
}

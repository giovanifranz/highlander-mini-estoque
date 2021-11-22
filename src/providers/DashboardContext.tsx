import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";
import { NewProductModal } from "../components/NewProductModal";

Modal.setAppElement("#__next");

interface DashboardProviderProps {
  children: ReactNode;
}

interface DashboardContextProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  accountID: string;
  updateTable: boolean;
  isOpenModal: boolean;
}

export const DashboardContext = createContext({} as DashboardContextProps);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const accountID = useRouter().query.id as string;

  return (
    <DashboardContext.Provider
      value={{ setIsOpenModal, setUpdateTable, updateTable, isOpenModal, accountID }}
    >
      <NewProductModal />
      {children}
    </DashboardContext.Provider>
  );
}

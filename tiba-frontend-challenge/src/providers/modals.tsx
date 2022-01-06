import {
  createContext,
  useContext,
  useState,
  ReactChildren,
  ReactChild,
} from 'react';

interface TsxProps {
  children: ReactChildren | ReactChild;
}

export type ModalContextData = {
  openModal: boolean;
  setOpenModal(prev: boolean): void;
};

const ModalHooksContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

export const ModalProvider = ({ children }: TsxProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <ModalHooksContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModalHooksContext.Provider>
  );
};

export function useModal() {
  const context = useContext(ModalHooksContext);

  if (!context) {
    throw new Error('useModal must be use within an defaultHooksProvider');
  }

  return context;
}

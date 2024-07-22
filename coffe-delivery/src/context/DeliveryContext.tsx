import React, { createContext, ReactNode, useContext, useState } from "react";

interface DeliveryData {
  postalCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

interface DeliveryContextProps {
  deliveryData: DeliveryData;
  setDeliveryData: (data: Partial<DeliveryData>) => void;
}

const DeliveryContext = createContext<DeliveryContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useDeliveryContext = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error("useDeliveryContext must be used within a DeliveryProvider");
  }
  return context;
};

interface DeliveryProviderProps {
  children: ReactNode;
}

export const DeliveryProvider: React.FC<DeliveryProviderProps> = ({ children }) => {
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    postalCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    paymentMethod: "",
  });

  const updateDeliveryData = (data: Partial<DeliveryData>) => {
    setDeliveryData((prev) => ({ ...prev, ...data }));
  };

  return (
    <DeliveryContext.Provider value={{ deliveryData, setDeliveryData: updateDeliveryData }}>
      {children}
    </DeliveryContext.Provider>
  );
};

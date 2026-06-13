import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TreatmentContextType {
  activeTreatment: string;
  setActiveTreatment: (treatment: string) => void;
}

const TreatmentContext = createContext<TreatmentContextType | undefined>(undefined);

export function TreatmentProvider({ children }: { children: ReactNode }) {
  const [activeTreatment, setActiveTreatment] = useState<string>('');

  const updateActiveTreatment = (treatment: string) => {
    setActiveTreatment(treatment);
  };

  return (
    <TreatmentContext.Provider value={{ activeTreatment, setActiveTreatment: updateActiveTreatment }}>
      {children}
    </TreatmentContext.Provider>
  );
}

export function useTreatment() {
  const context = useContext(TreatmentContext);
  if (!context) {
    throw new Error('useTreatment must be used within a TreatmentProvider');
  }
  return context;
}

"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type DataType = {
  name: string;
  packages: {
    name: string;
    rating: number;
    price: number;
    cartVal: number
  }[];
}[];

type ContextType = {
  data: DataType | null;
  setData: Dispatch<SetStateAction<DataType | null>> | null;
};

export const DataContext = createContext<ContextType>({data: null, setData: null});

const exampleData = [
  {
    name: "Super saver packages",
    packages: [
      {
        name: "Foam-jet service (2ACs)",
        rating: 4.81,
        price: 1298,
        cartVal: 0
      },
      {
        name: "Foam-jet service (3ACs)",
        rating: 4.81,
        price: 1298,
        cartVal: 0
      },
      {
        name: "Foam-jet service (4ACs)",
        rating: 4.81,
        price: 1298,
        cartVal: 0
      },
      {
        name: "Foam-jet service (5ACs)",
        rating: 4.81,
        price: 1298,
        cartVal: 0
      },
    ],
  },
  {
    name: "Service",
    packages: [
      {
        name: "Foam-jet AC service",
        rating: 4.81,
        price: 1298,
        cartVal: 0
      },
      {
        name: "Water-jet AC Service",
        rating: 4.81,
        price: 1298,
        cartVal: 0
      },
    ],
  },
];

export default function ContextWrapper({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataType | null>(exampleData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

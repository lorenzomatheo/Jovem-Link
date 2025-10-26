// src/data/crasData.ts
export interface CrasData {
  id: number;
  name: string;
  address: string;
  position: [number, number];
}

export const crasData: CrasData[] = [
  {
    id: 1,
    name: "CRAS Jardim América",
    address: "Rua das Acácias, 123, Jardim América, São Paulo - SP",
    position: [-23.5613, -46.6565],
  },
  {
    id: 2,
    name: "CRAS Itaim Paulista",
    address: "Rua das Flores, 456, Itaim Paulista, São Paulo - SP",
    position: [-23.5165, -46.4006],
  },
  {
    id: 3,
    name: "CRAS Lapa",
    address: "Rua dos Pinheiros, 789, Lapa, São Paulo - SP",
    position: [-23.526, -46.7034],
  },
  {
    id: 4,
    name: "CRAS Sé",
    address: "Praça da Sé, s/n, Sé, São Paulo - SP",
    position: [-23.5505, -46.6333],
  },
];

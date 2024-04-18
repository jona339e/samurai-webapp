export interface Samurai {
    id?: number;
    name?: string;
    age?: number;
    weapon?: string;
    clan?: string;
    status?: string;
    image?: string;
    description?: string;
  }


  export interface SamuraiApiModel {
    id: number;
    name: string;
    description: string;
    age: number;
    krigere?: KrigerApiModel[];
  }

  export interface KrigerApiModel {
    id: number;
    name: string;
    description: string;
    kills: number;
    samurais?: SamuraiApiModel[];
  }
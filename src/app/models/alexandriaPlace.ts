import { AlexandriaTour } from './alexandriaTour';

export interface AlexandriaPlace {
  id: string;
  path: string;
  title: string;
  img: string;
  imgMobile: string;
  begin: string;
  alexandriaTour: AlexandriaTour;
}

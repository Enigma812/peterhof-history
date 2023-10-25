import { AlexandriaPlace } from './alexandriaPlace';

export interface Alexandria {
  id: string;
  title: string;
  path: string;
  img: string;
  imgMobile: string;
  alexandriaPlaces: AlexandriaPlace[];
}

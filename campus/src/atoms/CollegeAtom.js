import { atom } from 'recoil';

export const collegesState = atom({
  key: 'collegesState', // unique ID
  default: [],
});
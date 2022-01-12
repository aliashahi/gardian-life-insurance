import { atom } from "recoil";

export const stepIndexState = atom<1 | 2>({
  key: "stepIndex",
  default: 2,
});

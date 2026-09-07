// kazakh_paths_index.ts — объединяет все части
export type { KazakhRegion } from "./kazakh_paths_part1";
import { kazakhRegions_part1 } from "./kazakh_paths_part1";
import { kazakhRegions_part2 } from "./kazakh_paths_part2";
import { kazakhRegions_part3 } from "./kazakh_paths_part3";
import { kazakhRegions_part4 } from "./kazakh_paths_part4";
import { kazakhRegions_part5 } from "./kazakh_paths_part5";

export const kazakhRegions = [
  ...kazakhRegions_part1,
  ...kazakhRegions_part2,
  ...kazakhRegions_part3,
  ...kazakhRegions_part4,
  ...kazakhRegions_part5,
];

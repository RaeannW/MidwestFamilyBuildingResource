export type GrantData = {
  raised: number;
  goal: number;
  families: number;
  perGrant: number;
  awardDate: String;
};

export const currentGrantCycle: GrantData = {
  raised: 840,
  goal: 2000,
  families: 2,
  perGrant: 1000,
  awardDate: "Q1",
};

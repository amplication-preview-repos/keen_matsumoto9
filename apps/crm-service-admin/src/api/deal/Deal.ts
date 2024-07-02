export type Deal = {
  amount: number | null;
  closeDate: Date | null;
  createdAt: Date;
  id: string;
  stage?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};

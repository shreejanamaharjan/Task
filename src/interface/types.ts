export interface IClaimDetailsProps {
  title?: string;
  description?: string;
  image?: boolean;
  dropdown?: boolean;
  user?: boolean;
  assignedTo?: boolean;
  onSelect?: (image: string, description: string) => void;
}
export interface ISubletProps {
  sublet?: string;
  quantity?: number;
  costPer?: number;
  requested?: number;
}

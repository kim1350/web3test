export type Option = {
  value: string;
  title?: string;
  address?: string | null;
  amount?: string | number;
  currency?: string;
};

export interface DropdownProps {
  options: Option[];
  placeholder?: string;
  value?: string | null;
  onSelect?: (v: Option) => void;
  style?: ViewStyle;
  openDelay?: number;
}

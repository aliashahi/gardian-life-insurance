export interface InputDto {
  id: string;
  label: string;
  onChange?: (event: any) => void;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  className?: string;
  hide?: boolean;
  type: string;
  placeholder?: string;
  suffix?: string;
}

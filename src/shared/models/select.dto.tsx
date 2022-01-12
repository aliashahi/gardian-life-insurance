import { InputDto } from ".";

export interface SelectOption {
  label: string;
  value: any;
}

export interface SelectDto extends InputDto {
  options: SelectOption[];
}

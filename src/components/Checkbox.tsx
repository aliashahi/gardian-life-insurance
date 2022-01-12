import { InputDto } from "../shared";

export default function Checkbox(props: InputDto) {
  return (
    <div
      className={"form-control flex justify-start " + (props.className ?? "")}
    >
      <label className="cursor-pointer label my_ltr flex justify-end">
        <span className="label-text">{props.label}</span>
        <input type="checkbox" className="checkbox mx-2" />
      </label>
    </div>
  );
}

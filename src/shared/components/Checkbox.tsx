import { InputDto } from "..";

export function Checkbox(props: InputDto) {
  const onCheckboxChange = (e: any) => {
    if (typeof props.onChange === "function") {
      props.onChange({
        ...e,
        target: {
          ...e.target,
          name: e.target.name,
          value: e.target.checked,
        },
      });
    }
  };
  return (
    <div
      className={"form-control flex justify-start " + (props.className ?? "")}
    >
      <label className="cursor-pointer label my_ltr flex justify-end">
        <span className="label-text">{props.label}</span>
        <input
          name={props.id}
          value={props.value as string}
          onChange={(e) => onCheckboxChange(e)}
          type="checkbox"
          className="checkbox mx-2"
        />
      </label>
    </div>
  );
}

import { InputDto } from "../shared";

export function Input(props: InputDto) {
  return (
    <div
      className={"form-control px-2 w-full md:w-1/3 " + props.className ?? ""}
    >
      <label className="label">
        <span className="label-text">
          {props.label}
          {props.required ? <span className="text-red-600">*</span> : ""}
        </span>
      </label>
      <input
        value={props.value as string}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder ?? ""}
        className={"input input-bordered " + props.error ?? ""}
        onInput={props.onChange}
      />
      {props.error ? (
        <span className="text-2xs text-red-600 transition-all">
          {props.error ?? ""}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

import { SelectDto } from "..";

export function Select(props: SelectDto) {
  return (
    <div className="w-full md:w-1/3">
      <label className="label">
        <span className="label-text">
          {props.label}
          {props.required ? <span className="text-red-600">*</span> : ""}
        </span>
      </label>
      <select className="select select-bordered w-full max-w-xs">
        {props.options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

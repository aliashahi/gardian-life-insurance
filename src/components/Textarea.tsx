import { InputDto } from "../shared";

export default function Textarea(props: InputDto) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <textarea
        className="textarea h-24 textarea-bordered"
        placeholder={props.placeholder ?? ""}
      ></textarea>
    </div>
  );
}
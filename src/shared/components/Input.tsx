import { useState } from "react";
import { InputDto } from "..";

export function Input(props: InputDto) {
  const [focused, setFocused] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [valid, setValid] = useState<boolean | null>(null);
  const checkValidation = (event: any) => {
    if (focused) {
      if (props.required && (!event.target.value || event.target.value == "")) {
        setValid(false);
        setMessage("این فیلد اجباری است");
      }
      if (typeof props.validateFn === "function") {
        if (!props.validateFn(event.target.value, props)) {
          setMessage("لطفا اطلاعات مناسب وارد کنید");
          setValid(false);
        } else {
          setValid(true);
          setMessage("");
        }
      }
    }
  };

  const changeFocusState = (e: any, state: boolean) => {
    setFocused(state);
    if (props.required && (!e.target.value || e.target.value == "")) {
      setValid(false);
      setMessage("این فیلد اجباری است");
    } else {
      setValid(true);
      setMessage("");
    }
  };
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
        onFocus={(e) => changeFocusState(e, true)}
        onBlur={(e) => changeFocusState(e, false)}
        className={
          "input input-bordered " +
          (!focused && valid == false && props.required ? "border-red-600" : "")
        }
        onInput={(event) => {
          if (typeof props.onChange === "function") props.onChange(event);
          checkValidation(event);
        }}
      />
      {message && !focused ? (
        <span className="text-2xs text-red-600 transition-all">
          {message ?? ""}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

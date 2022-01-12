import { useState } from "react";
import { useRecoilState } from "recoil";
import FooterActions from "./FooterActions";
import { ACTIONS, FieldPropertys } from "../shared";
import { ErrorMessage, Textarea, Checkbox, Input } from "../shared";
import { BtnConfig, SecondaryFormDto, stepIndexState } from "../shared";

const btnsConfig: BtnConfig[] = [
  {
    id: ACTIONS.CANCEL,
    label: "بازگشت",
    class: "btn-outline btn-warning",
  },
  {
    id: ACTIONS.SUBMIT,
    label: "ثبت نهایی",
    class: "btn-success",
  },
  // {
  //   id: ACTIONS.CLEAR_FORM,
  //   label: "پاک کردن فرم",
  //   class: "btn-outline btn-error",
  // },
];

const getBoilerplateOfForm = () => ({
  smoke_sigaret: { label: "سیگار میکشم", id: "smoke_sigaret", value: false },
  smoke_pot: { label: "قلیان میکشم", id: "smoke_pot", value: false },
  pot_count: { label: "تعداد قلیان در روز", id: "pot_count", value: null },
  sigaret_count: {
    label: "تعداد سیگار در روز",
    id: "sigaret_count",
    value: null,
  },
  illness: { label: "بیماری", id: "illness", value: "" },
});

export default function SecondaryInfoForm(props: any) {
  const [loadingPersent, setloadingPersent] = useState(0);
  const [stepIndex, setStepIndex] = useRecoilState(stepIndexState);
  const [form, setForm] = useState<SecondaryFormDto>(getBoilerplateOfForm());
  const [formMessage, setFormMessage] = useState<string>();

  const setValidationMessages = (old_form: SecondaryFormDto, id: string) => {
    let new_form: any = { ...old_form };
    Object.entries(old_form).forEach((field: [string, FieldPropertys]) => {
      if (field[1].value && field[1].error && field[0] != id) {
        new_form = {
          ...new_form,
          [field[0]]: {
            ...field[1],
            error: undefined,
          },
        };
      }
    });
    return new_form;
  };

  const onChangeValue = (event: any) => {
    const id = event.target.name;
    const value = event.target.value;
    console.log(id, value);
    const new_form: any = { ...form };
    setForm(
      setValidationMessages(
        {
          ...form,
          [id]: {
            ...new_form[id],
            value,
          },
        },
        id
      )
    );
  };

  const checkValidation = (): { valid: boolean; message: string | null } => {
    let valid = true;
    let message = null;
    if (
      form.smoke_pot.value == true &&
      (form.pot_count == null ||
        (form.pot_count.value as number) <= 0 ||
        form.pot_count.value == "")
    ) {
      valid = false;
      message = "قلیان";
      message = `لطفا فیلد تعداد "${message}" را پر کنید`;
    } else if (
      form.smoke_sigaret.value == true &&
      (form.sigaret_count == null ||
        (form.sigaret_count.value as number) <= 0 ||
        form.sigaret_count.value == "")
    ) {
      valid = false;
      message = "سیگار";
      message = `لطفا فیلد تعداد "${message}" را پر کنید`;
    }
    return {
      valid,
      message,
    };
  };

  const onActionEvent = (action: string) => {
    switch (action) {
      case ACTIONS.CANCEL:
        setStepIndex(1);
        break;
      case ACTIONS.SUBMIT:
        const validation_result = checkValidation();
        if (validation_result.valid) {
          alert("شما با موفقیت ثبت نام کردید");
        } else setFormMessage(validation_result.message ?? "");
        break;
      case ACTIONS.CLEAR_FORM:
        setForm(getBoilerplateOfForm());
        break;
    }
  };

  return (
    <div>
      <div className="h-[1px] w-4/5 m-auto bg-gray-200 my-4 rounded-full"></div>
      <form className="flex flex-wrap mt-4">
        <Checkbox
          id={form.smoke_sigaret.id}
          value={form.smoke_sigaret.value}
          type="checkbox"
          className={
            "w-full " + (form.smoke_sigaret.value == true ? "md:w-1/2" : "")
          }
          label={form.smoke_sigaret.label}
          onChange={onChangeValue}
        />
        {form.smoke_sigaret.value == true ? (
          <Input
            id={form.sigaret_count.id}
            value={form.sigaret_count.value}
            type="number"
            label={form.smoke_sigaret.label}
            onChange={onChangeValue}
          />
        ) : (
          ""
        )}
        <Checkbox
          id={form.smoke_pot.id}
          value={form.smoke_pot.value}
          type="checkbox"
          className={
            "w-full " + (form.smoke_pot.value == true ? "md:w-1/2" : "")
          }
          label={form.smoke_pot.label}
          onChange={onChangeValue}
        />
        {form.smoke_pot.value == true ? (
          <Input
            id={form.pot_count.id}
            value={form.pot_count.value}
            type="number"
            className="w-full md:w-1/2"
            label={form.pot_count.label}
            onChange={onChangeValue}
          />
        ) : (
          ""
        )}
        <Textarea
          id={form.illness.id}
          value={form.illness.value}
          type="textarea"
          label={form.illness.label}
          onChange={onChangeValue}
          placeholder="لطفا بیماری های خود را در این کادر بنویسید"
        />
      </form>
      {/* ProgressIndicator */}
      {/* <ProgressIndicator max={5} value={2} /> */}
      {/* footer (actions) */}
      {formMessage ? <ErrorMessage message={formMessage} /> : ""}
      <FooterActions btnsConfig={btnsConfig} onAction={onActionEvent} />
    </div>
  );
}

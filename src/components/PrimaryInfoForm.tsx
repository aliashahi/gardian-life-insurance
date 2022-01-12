import { Input } from "./Input";
import { useState } from "react";
import { useRecoilState } from "recoil";
import FooterActions from "./FooterActions";
import { ACTIONS, FieldPropertys } from "../shared";
import { BtnConfig, stepIndexState } from "../shared";
import { INSURANCE_BRANCHES, PrimaryFormDto } from "../shared";
import ErrorMessage from "./ErrorMessage";
import Select from "./Select";

const btnsConfig: BtnConfig[] = [
  {
    id: ACTIONS.NEXT,
    label: "صفحه بعد",
    class: "btn-success",
  },
  {
    id: ACTIONS.CLEAR_FORM,
    label: "پاک کردن فرم",
    class: "btn-outline btn-error",
  },
];

const getBoilerplateOfForm = () => ({
  first_name: { label: "نام", id: "first_name", value: null },
  last_name: { label: "نام خانوادگی", id: "last_name", value: null },
  phone: { label: "شماره تلفن", id: "phone", value: null },
  email: { label: "ایمیل", id: "email", value: null },
  age: { label: "سن", id: "age", value: null },
  height: { label: "قد", id: "height", value: 170 },
  weight: { label: "وزن", id: "weight", value: 70 },
  insurance_branch: {
    label: "شعبه بیمه",
    id: "insurance_branch",
    value: 1,
  },
});

export default function PrimaryInfoForm() {
  const [stepIndex, setStepIndex] = useRecoilState(stepIndexState);
  const [form, setForm] = useState<PrimaryFormDto>(getBoilerplateOfForm());
  const [formMessage, setFormMessage] = useState<string>();

  const setValidationMessages = (old_form: PrimaryFormDto, id: string) => {
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
    Object.entries(form).forEach((field: [string, FieldPropertys]) => {
      if (valid && (!field[1].value || field[1].error)) {
        valid = false;
        message = `لطفا اطلاعات وارد شده در فیلد "${field[1].label}" را دوباره بررسی کنید`;
      }
    });
    return {
      valid,
      message,
    };
  };

  const onActionEvent = (action: string) => {
    switch (action) {
      case ACTIONS.NEXT:
        //if form was valid
        const validation_result = checkValidation();
        if (validation_result.valid) {
          setStepIndex(2);
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
      <form className="flex flex-wrap ">
        <Input
          type="text"
          id={form.first_name.id}
          error={form.first_name.error}
          label={form.first_name.label}
          required={true}
          onChange={onChangeValue}
        />
        <Input
          type="text"
          id={form.last_name.id}
          error={form.last_name?.error}
          required={true}
          label={form.last_name.label}
          onChange={onChangeValue}
        />
        <Input
          type="tel"
          id={form.phone.id}
          error={form.phone.error}
          required={true}
          label={form.phone.label}
          onChange={onChangeValue}
        />
        <Input
          type="email"
          id={form.email.id}
          error={form.email.error}
          required={true}
          label={form.email.label}
          onChange={onChangeValue}
        />
        <Input
          type="number"
          id={form.age.id}
          error={form.age.error}
          required={true}
          label={form.age.label}
          onChange={onChangeValue}
        />
        <Input
          type="number"
          id={form.height.id}
          error={form.height.error}
          required={true}
          label={form.height.label}
          onChange={onChangeValue}
          suffix="CM"
        />
        <Input
          type="number"
          id={form.weight.id}
          error={form.weight.error}
          required={true}
          label={form.weight.label}
          onChange={onChangeValue}
          suffix="KG"
        />
        <Select
          type="text"
          id={form.insurance_branch.id}
          error={form.insurance_branch.error}
          required={true}
          label={form.insurance_branch.label}
          onChange={onChangeValue}
          options={INSURANCE_BRANCHES}
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

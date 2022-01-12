import { Input } from "./Input";
import { useState } from "react";
import { BtnConfig, stepIndexState } from "../shared";
import { PrimaryFormDto } from "../shared";
import FooterActions from "./FooterActions";
import ProgressIndicator from "./ProgressIndicator";
import { ACTIONS } from "../shared";
import { useRecoilState } from "recoil";

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
  first_name: { id: "first_name", value: null },
  last_name: { id: "last_name", value: null },
  phone: { id: "phone", value: null },
  email: { id: "email", value: null },
  age: { id: "age", value: null },
  height: { id: "height", value: 170 },
  weight: { id: "weight", value: 70 },
  insurance_branch: { id: "insurance_branch", value: 1 },
});

export default function PrimaryInfoForm() {
  // const [loadingPersent, setloadingPersent] = useState(0);
  const [stepIndex, setStepIndex] = useRecoilState(stepIndexState);
  const [form, setForm] = useState<PrimaryFormDto>(getBoilerplateOfForm());

  const createErrorMessage = (id: string, value: any) => {
    return undefined;
  };
  const onChangeValue = (event: any) => {
    const id = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [id]: {
        value,
        [id]: id,
        error: createErrorMessage(id, value),
      },
    });
  };

  const onActionEvent = (action: string) => {
    switch (action) {
      case ACTIONS.NEXT:
        //if form was valid
        setStepIndex(2);
        break;
      case ACTIONS.CLEAR_FORM:
        setForm(getBoilerplateOfForm());
        break;
    }
  };

  return (
    <div>
      <form className="flex flex-wrap">
        <Input
          type="text"
          id={form.first_name.id}
          error={form.first_name?.error}
          required={true}
          onChange={onChangeValue}
          label="نام"
        />
        <Input
          type="text"
          id={form.last_name.id}
          error={form.last_name?.error}
          required={true}
          label="نام خانوادگی"
          onChange={onChangeValue}
        />
        <Input
          type="tel"
          id={form.phone.id}
          error={form.phone.error}
          required={true}
          label="شماره تلفن"
          onChange={onChangeValue}
        />
        <Input
          type="email"
          id={form.first_name.id}
          error={form.email.error}
          required={true}
          label="ایمیل"
          onChange={onChangeValue}
        />
        <Input
          type="number"
          id={form.age.id}
          error={form.age.error}
          required={true}
          label="سن"
          onChange={onChangeValue}
        />
        <Input
          type="number"
          id={form.height.id}
          error={form.height.error}
          required={true}
          label="قد"
          onChange={onChangeValue}
          suffix="CM"
        />
        <Input
          type="number"
          id={form.weight.id}
          error={form.weight.error}
          required={true}
          label="وزن"
          onChange={onChangeValue}
          suffix="KG"
        />
        <Input
          type="text"
          id={form.insurance_branch.id}
          error={form.insurance_branch.error}
          required={true}
          label="شعبه بیمه"
          onChange={onChangeValue}
        />
      </form>
      {/* ProgressIndicator */}
      <ProgressIndicator max={5} value={2} />
      {/* footer (actions) */}
      <FooterActions btnsConfig={btnsConfig} onAction={onActionEvent} />
    </div>
  );
}

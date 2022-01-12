import { useState } from "react";
import { useRecoilState } from "recoil";
import { BtnConfig, SecondaryFormDto, stepIndexState } from "../shared";
import { ACTIONS } from "../shared";
import Checkbox from "./Checkbox";
import FooterActions from "./FooterActions";
import { Input } from "./Input";
import ProgressIndicator from "./ProgressIndicator";
import Textarea from "./Textarea";

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
  {
    id: ACTIONS.CLEAR_FORM,
    label: "پاک کردن فرم",
    class: "btn-outline btn-error",
  },
];

const getBoilerplateOfForm = () => ({
  smoke_sigaret: { id: "smoke_sigaret", value: null },
  smoke_pot: { id: "smoke_pot", value: null },
  pot_count: { id: "pot_count", value: null },
  sigaret_count: { id: "sigaret_count", value: null },
  illness: { id: "illness", value: null },
});

export default function SecondaryInfoForm(props: any) {
  const [loadingPersent, setloadingPersent] = useState(0);
  const [stepIndex, setStepIndex] = useRecoilState(stepIndexState);
  const [form, setForm] = useState<SecondaryFormDto>(getBoilerplateOfForm());

  const onActionEvent = (action: string) => {
    switch (action) {
      case ACTIONS.CANCEL:
        setStepIndex(1);
        break;
      case ACTIONS.SUBMIT:
        ////if form is valid
        // hooooooooooooooooooraaaaaaaaaaaaa
        break;
      case ACTIONS.CLEAR_FORM:
        setForm(getBoilerplateOfForm());
        break;
    }
  };

  return (
    <div>
      <form className="flex flex-wrap">
        <Checkbox
          id={form.smoke_sigaret.id}
          value={form.smoke_sigaret.value}
          type="checkbox"
          className={
            "w-full " + (form.smoke_sigaret.value === true ? "md:w-1/2" : "")
          }
          label="سیگار میکشم"
        />
        <Input
          id={form.sigaret_count.id}
          value={form.sigaret_count.value}
          type="number"
          label="تعداد سیگار در روز"
        />
        <Checkbox
          id={form.smoke_pot.id}
          value={form.smoke_pot.value}
          type="checkbox"
          className={
            "w-full " + (form.smoke_sigaret.value === true ? "md:w-1/2" : "")
          }
          label="قلیان میکشم"
        />
        <Input
          id={form.pot_count.id}
          value={form.pot_count.value}
          type="number"
          className="w-full md:w-1/2"
          label="تعداد قلیان در روز"
        />
        <Textarea
          id={form.illness.id}
          value={form.illness.value}
          type="textarea"
          label="بیماری ها"
          placeholder="لطفا بیماری های خود را در این کادر بنویسید"
        />
      </form>
      {/* ProgressIndicator */}
      <ProgressIndicator max={5} value={2} />
      {/* footer (actions) */}
      <FooterActions btnsConfig={btnsConfig} onAction={onActionEvent} />
    </div>
  );
}

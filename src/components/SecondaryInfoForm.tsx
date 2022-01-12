import { useState } from "react";
import { SecondaryFormDto } from "../shared";
import Checkbox from "./Checkbox";
import FooterActions from "./FooterActions";
import { Input } from "./Input";
import ProgressIndicator from "./ProgressIndicator";
import Textarea from "./Textarea";

export default function SecondaryInfoForm(props: any) {
  const [loadingPersent, setloadingPersent] = useState(0);
  const [form, setForm] = useState<SecondaryFormDto>({
    smoke_sigaret: { id: "smoke_sigaret", value: null },
    smoke_pot: { id: "smoke_pot", value: null },
    pot_count: { id: "pot_count", value: null },
    sigaret_count: { id: "sigaret_count", value: null },
    illness: { id: "illness", value: null },
  });

  return (
    <div>
      <form className="flex flex-wrap">
        <Checkbox
          id={form.smoke_sigaret.id}
          type="checkbox"
          className={
            "w-full " + (form.smoke_sigaret.value === true ? "md:w-1/2" : "")
          }
          label="سیگار میکشم"
        />
        <Input
          id={form.sigaret_count.id}
          type="number"
          label="تعداد سیگار در روز"
        />
        <Checkbox
          id={form.smoke_pot.id}
          type="checkbox"
          className={
            "w-full " + (form.smoke_sigaret.value === true ? "md:w-1/2" : "")
          }
          label="قلیان میکشم"
        />
        <Input
          id={form.pot_count.id}
          type="number"
          className="w-full md:w-1/2"
          label="تعداد قلیان در روز"
        />
        <Textarea
          id={form.illness.id}
          type="textarea"
          label="بیماری ها"
          placeholder="لطفا بیماری های خود را در این کادر بنویسید"
        />
      </form>
      {/* ProgressIndicator */}
      <ProgressIndicator max={5} value={2} />
      {/* footer (actions) */}
      <FooterActions />
    </div>
  );
}

import { useRecoilValue } from "recoil";
import { stepIndexState } from "../shared";

export default function Stepper() {
  const stepIndex = useRecoilValue(stepIndexState);

  return (
    <div>
      <ul className="w-full steps my_ltr">
        <li
          data-content="2"
          className={
            "text-xs md:text-lg step " + (stepIndex === 2 ? "step-neutral" : "")
          }
        >
          وضعیت جسمانی و سلامتی
        </li>
        <li data-content="1" className="text-xs md:text-lg step step-neutral">
          اطلاعات اصلی
        </li>
      </ul>
    </div>
  );
}

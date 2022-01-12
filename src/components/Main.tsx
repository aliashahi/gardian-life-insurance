import Header from "./Header";
import Stepper from "./Stepper";
import { useRecoilValue } from "recoil";
import PrimaryInfoForm from "./PrimaryInfoForm";
import { stepIndexState } from "../shared/atoms";
import SecondaryInfoForm from "./SecondaryInfoForm";

export function Main() {
  const stepIndex = useRecoilValue(stepIndexState);

  return (
    <div className="w-11/12 md:w-4/5 border-2 border-gray-200 rounded-lg p-2 my-4 md:my-2 transition-all">
      {/* header */}
      <Header />
      <div className="divider"></div>
      {/* body */}
      <Stepper />
      {stepIndex === 1 ? <PrimaryInfoForm /> : <SecondaryInfoForm />}
    </div>
  );
}

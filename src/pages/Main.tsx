import Header from "./Header";
import Stepper from "./Stepper";
import { useRecoilValue } from "recoil";
import { stepIndexState } from "../shared";
import PrimaryInfoForm from "./PrimaryInfoForm";
import SecondaryInfoForm from "./SecondaryInfoForm";

export function Main() {
  const stepIndex = useRecoilValue(stepIndexState);

  return (
    <div className="bg-white w-11/12 md:w-4/5 border-2 border-gray-200 rounded-lg p-2 my-4 md:my-2 transition-all">
      {/* header */}
      <Header />
      <div className="divider"></div>
      {/* body */}
      <Stepper />
      {stepIndex === 1 ? <PrimaryInfoForm /> : <SecondaryInfoForm />}
    </div>
  );
}

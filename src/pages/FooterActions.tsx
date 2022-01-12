import { BtnConfig } from "../shared";

export default function FooterActions({
  btnsConfig,
  onAction,
}: {
  btnsConfig: BtnConfig[];
  onAction?: (action: string) => void;
}) {
  return (
    <div className="w-full md:flex md:justify-end mt-4">
      {btnsConfig.map((config) => {
        return (
          <button
            key={config.id}
            onClick={() => (onAction ? onAction(config.id) : "")}
            className={"btn mx-1 " + config.class}
          >
            {config.label}
          </button>
        );
      })}
    </div>
  );
}

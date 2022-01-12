export default function ProgressIndicator(props: {
  max: number;
  value: number;
}) {
  return (
    <div className="w-full flex flex-col justify-center md:flex-row md:items-center">
      <progress className="progress progress-succes my-5" {...props}></progress>
      <span className="px-2 w-20 text-center">
        {props.value} از {props.max}
      </span>
    </div>
  );
}

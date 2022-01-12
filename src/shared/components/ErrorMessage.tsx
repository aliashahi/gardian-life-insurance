export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="alert alert-error my-2">
      <div className="flex-1">
        <label>{message}</label>
      </div>
    </div>
  );
}

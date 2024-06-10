import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <span className="text-xl text-primary-200">Loading Cars data.... </span>
    </div>
  );
}

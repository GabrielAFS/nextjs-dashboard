import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  const isPending = status === "pending";
  const isPaid = status === "paid";

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": isPending,
          "bg-green-500 text-white": isPaid,
        }
      )}
    >
      {isPending ? (
        <>
          Pending
          <ClockIcon className='ml-1 w-4 text-gray-500' />
        </>
      ) : null}
      {isPaid ? (
        <>
          Paid
          <CheckIcon className='ml-1 w-4 text-white' />
        </>
      ) : null}
    </span>
  );
}

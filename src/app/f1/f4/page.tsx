import Link from "next/link";

export default function F4() {
  return (
    <div>
      F3 Page
      <div>
        <Link href="/f1/f3">Go to F3</Link>
        <Link href="/complex-dashboard">Go to Complex Dashboard</Link>
      </div>
    </div>
  );
}

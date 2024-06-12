import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <Link href="/complex-dashboard/archived">Archived</Link>
      Notification
    </Card>
  );
}

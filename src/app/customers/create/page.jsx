import { Suspense } from "react";
import ConfirmPageClient from "./ConfirmPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <ConfirmPageClient />
    </Suspense>
  );
}

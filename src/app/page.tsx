import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/features/auth/components/authScreen";

export default function Home() {
  return (
    <div className="text-rose-500 h-[100vh]">
      <AuthScreen />
    </div>
  );
}

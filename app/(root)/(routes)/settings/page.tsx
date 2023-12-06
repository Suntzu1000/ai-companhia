import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Configurações</h3>
      <div className="text-muted-foreground text-sm">
        {isPro ? "Você está atualmente em um plano Pro." : "Você está atualmente em um plano gratuito."}
      </div>
      <SubscriptionButton isPro={isPro} />
    </div>
   );
}
 
export default SettingsPage;

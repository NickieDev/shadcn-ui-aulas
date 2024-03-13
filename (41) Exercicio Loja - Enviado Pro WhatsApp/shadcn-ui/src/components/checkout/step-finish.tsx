import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"

export const StepFinish = () => {
   const { name } = useCheckoutStore(state => state)

   const message = 'Hello World'

   const linkZap = `https://wa.me//${ process.env.NEXT_PUBLIC_ZAP }?text=${ encodeURI(message) }`

   return(
      <div className="text-center flex flex-col gap-5">
         <p>Perfeito <strong>{ name }</strong>!</p>

         <p>Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente irá te guiar sobre o andamentodo seu pedido.</p>

         <Button>
            <Link href={ linkZap } target="_blank">Enviar para o WhatsApp</Link>
         </Button>
      </div>
   )
}
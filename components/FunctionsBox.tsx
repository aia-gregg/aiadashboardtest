import { Progress } from "@/components/ui/progress"
import Image from "next/image"


const FunctionsBox = ({totalCurrentBalance}: FunctionsBoxProps) => {
  return (
    <div className="function-box">
        <div className="flex flex-col w-[40%]">
            <div className="pl-2 pr-2">
                <figure
                    className="flex-center h-fit rounded-full bg-yellow"
                >
                    <Image
                    src="/icons/recharge.svg"
                    width={20}
                    height={20}
                    alt="Recharge Icon"
                    className="m-2 min-w-5 brightness-[0]"
                    />
                <p className="text-[#000000] font-semibold pr-2">Recharge</p>
                </figure>
            </div>
            <div className="pl-2 pr-2 pt-2">
                <figure
                    className="flex-center h-fit rounded-full bg-yellow"
                >
                    <Image
                    src="/icons/pin-no.svg"
                    width={20}
                    height={20}
                    alt="Recharge Icon"
                    className="m-2 min-w-5 brightness-[0]"
                    />
                <p className="text-[#000000] font-semibold pr-2">View PIN</p>
                </figure>
            </div>
            <div className="pl-2 pr-2 pt-2">
                <figure
                    className="flex-center h-fit rounded-full bg-yellow"
                >
                    <Image
                    src="/icons/card-loss.svg"
                    width={20}
                    height={20}
                    alt="Recharge Icon"
                    className="m-2 min-w-5 brightness-[0]"
                    />
                <p className="text-[#000000] font-semibold pr-2">Report Loss</p>
                </figure>
            </div>
        </div>
        <div className="flex flex-col w-[60%]">
            <div className="pb-5">
            <h2 className="header-2">
                Monthly Limit
            </h2>
            </div>
            <div className="p-2 bg-gray-1000 rounded-full gap-3">
                <Progress value={totalCurrentBalance / 100} />
            </div>
            <div className="pt-1 pl-3">
                <p className="text-gray-300">&#36;{totalCurrentBalance} / &#36;10,000</p>
            </div>
        </div>
    </div>
  )
}

export default FunctionsBox
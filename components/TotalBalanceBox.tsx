
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="gap-6">
                    <div className="w-full">
                        <h2 className="header-2">
                        Bank Accounts: {totalBanks}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row pt-6 max-lg:hidden">
                <div className="w-[50%] pr-20">
                    <div className="flex flex-col gap-2">
                        <p className="total-balance-label">
                            Total Current Balance
                        </p>
                        
                        <div className="total-balance-amount flex-center gap-2">
                            <AnimatedCounter amount={totalCurrentBalance} />
                        </div>
                    </div>
                </div>
                <div className="w-[50%] pr-20">
                    <div className="flex flex-col gap-2">
                        <p className="total-balance-label">
                            Total Top-Up
                        </p>
                        
                        <div className="total-balance-amount flex-center gap-2">
                            <AnimatedCounter amount={13520} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row pt-6 lg:hidden">
                <div className="">
                    <div className="flex flex-col gap-2">
                        <p className="total-balance-label">
                            Total Current Balance
                        </p>
                        
                        <div className="total-balance-amount flex-center gap-2">
                            <AnimatedCounter amount={totalCurrentBalance} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
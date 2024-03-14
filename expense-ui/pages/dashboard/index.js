import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-slate-100">
        <div className="flex gap-6 justify-center">
          <div>
            <div className="card w-96 bg-blue-600 text-white mt-8 mb-6">
              <div className="card-body">
                <h2 className="card-title mb-16">Geld</h2>
                <p>Cash</p>
                <p className="text-2xl">10,000.00</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-white mt-8 mb-6">
              <div className="card-body">
                <h2 className="card-title mb-6">Your income</h2>
                <p className="text-4xl">1,200,000</p>
                <p>Your income Amount</p>
                <p>32% from last month</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-white mt-8 mb-6">
              <div className="card-body">
                <h2 className="card-title mb-6">Total Expenses</h2>
                <p className="text-4xl">-1,200,000</p>
                <p>Your income Amount</p>
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

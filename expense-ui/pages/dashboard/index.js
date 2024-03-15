import { Header } from "@/components/Header";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

export const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Income-Expense",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const expanse = [100, 123, 100, 123, 100, 123, 100, 123, 100, 123, 100, 100];
const income = [100, 80, 100, 123, 100, 123, 100, 123, 123, 100, 123, 100];

export const barData = {
  labels,
  datasets: [
    {
      label: "Expanse",
      data: expanse,
      backgroundColor: "orange",
      stack: "Stack 0",
    },
    {
      label: "Income",
      data: income,
      backgroundColor: "green",
      stack: "Stack 1",
    },
  ],
};

export function DashboardPage() {
  const [amount, setAmount] = useState();

  useEffect(() => {
    amountSum();
  }, []);

  const amountSum = async () => {
    try {
      await axios
        .get("http://localhost:3000/transactions/sum")
        .then((response) => {
          setAmount(response.data);
        });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occured while creating the new articles");
    }
  };

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
                {amount && <p className="text-4xl">{amount.incomeSum}</p>}
                <p>Your income Amount</p>
                <p>32% from last month</p>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white mt-8 mb-6">
            <div className="card-body">
              <h2 className="card-title mb-6">Total Expenses</h2>
              {amount && <p className="text-4xl ">{amount.expenseSum}</p>}
              <p>Your income Amount</p>
              <p>32% from last month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly bg-slate-100">
        <div className="w-[588px]">
          <Bar options={options} data={barData} />
        </div>
        <div>
          <Pie data={pieData} />
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;

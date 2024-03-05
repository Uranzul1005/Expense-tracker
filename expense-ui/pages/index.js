import { useEffect, useState } from "react";
import { Logo } from "../components/icons/Logo";
import { Plus } from "../components/icons/Plus";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
// import Select from "react-select";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    getTransaction();
    // , selectCategory();
  }, []);

  const getTransaction = async () => {
    try {
      await axios.get("http://localhost:3000/transactions").then((response) => {
        setTransactions(response.data);
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occured while creating the new articles");
    }
  };

  // const selectCategory = async () => {
  //   try {
  //     await axios.get("http://localhost:3000/categories").then((response) => {
  //       setCategories(response.data);
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occured while creating the new articles");
  //   }
  // };

  // const options = categories.map((category) => {
  //   return {
  //     value: category.id,
  //     label: category.name,
  //   };
  // });

  // function handleSubmit() {
  //   console.log({ amount });
  // }

  const createTransaction = async () => {
    if (!amount) {
      alert("Please enter amount");
      return;
    }
    try {
      await axios.post("http://localhost:3000/transactions", {
        amount,
      });
      setAmount();
      getTransaction();
      toggleModal();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occured while creating the new articles");
    }
  };

  // const deleteTask = async (id) => {
  //   if (confirm("Delete?"))
  //     try {
  //       await axios.delete(`http://localhost:3000/transactions/${id}`, {
  //         name,
  //         amount,
  //         description,
  //       });
  //       getTask();
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("An error occured while creating the new articles");
  //     }
  // };

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <main>
      <header className="flex justify-between bg-white mb-6">
        <div className="flex p-2 ml-[120px] my-[16px]">
          <Logo />
          <div className="mx-6">Dashboard</div>
          <div className="font-semibold">Records</div>
        </div>
        <div className="flex mr-[120px] my-[20px]">
          <button
            className="rounded-2xl bg-blue-600 p-2 text-white mr-9 flex items-center gap-1"
            onClick={toggleModal}
          >
            <Plus />
            Record
          </button>
        </div>
      </header>
      <div>
        <div className="flex ml-[120px] mr-[120px]">
          <div className=" bg-slate-50 rounded-xl">
            <div className="mx-4 my-6">
              <div className="font-semibold text-2xl">Records</div>
              <button
                className="rounded-2xl bg-blue-600 p-2 text-white my-6 flex items-center gap-1"
                onClick={toggleModal}
              >
                <Plus />
                Add
              </button>
              <input
                className="bg-slate-100 py-1 px-4"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="mt-6 ml-6">
              <div className="flex items-center mb-6">
                <button className="rounded-xl bg-slate-300 p-1">
                  <GrFormPrevious />
                </button>
                <div className="mx-4">Last 30 days</div>
                <button className="rounded-xl bg-slate-300 p-1">
                  <GrFormNext />
                </button>
              </div>
              <div className="flex justify-between bg-white py-3 px-6 rounded-xl">
                <div>
                  <input className="mr-4" type="checkbox" id="selectall" />
                  <label for="selectall"> Select all</label>
                </div>
                <div>2</div>
              </div>
            </div>
            <div className="mt-3 ml-6 font-semibold">Today</div>
            {transactions.map((transaction) => (
              <div key={transaction.id} className="mt-3 ml-6">
                <div className="flex justify-between bg-white py-3 px-6 rounded-xl">
                  <div>
                    <input className="mr-4" type="checkbox" />
                    <label for="selectall">Food & Drinks</label>
                  </div>
                  <div>{transaction.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="showmodal"
          className={`fixed inset-0 justify-center items-center ${
            isShowModal ? "flex" : "hidden"
          }`}
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>
          <div className="bg-white relative rounded-xl">
            <div className="flex justify-between items-center py-6 px-5">
              <div className="text-xl">Add record</div>
              <div className="cursor-pointer" onClick={toggleModal}>
                <AiOutlineClose />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-5 p-6">
                <div className=" flex justify-around text-center">
                  <button className="rounded-2xl p-2 items-center bg-slate-100 hover:bg-blue-600 hover:text-white hover:flex-1">
                    Expense
                  </button>
                  <button className="flex items-center rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white hover:flex-1 p-2 ">
                    Income
                  </button>
                </div>
                <div>
                  <div>Amount</div>
                  <input
                    className="bg-slate-100 py-1 px-4"
                    type="text"
                    placeholder="₮ 000.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div>Category</div>
                {/* <Select options={options} /> */}
                <div>DATE</div>
                <input
                  className="bg-slate-100 py-1 px-4"
                  type="text"
                  placeholder="YEAR-MONTH-DAY"
                />
                <button
                  className="rounded-2xl bg-blue-600 p-2 text-white my-6 flex items-center gap-1 justify-center"
                  onClick={createTransaction}
                >
                  Add record
                </button>
              </div>
              <div className="flex flex-col gap-5 p-6">
                <div>Payee</div>
                <input
                  className="bg-slate-100 py-1 px-4"
                  type="text"
                  placeholder="Write here"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
                <div>Note</div>
                <input
                  className="bg-slate-100 py-1 px-4"
                  type="text"
                  placeholder="Write here"
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </main>
  );
}

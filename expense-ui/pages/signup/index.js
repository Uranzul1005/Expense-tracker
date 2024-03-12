export default function Home() {
  return (
    <div className="container ml-52">
      <div className="flex mb-10 font-semibold text-2xl mt-72">
        <div>Geld</div>
      </div>
      <h2 className="mb-2 font-semibold text-2xl">Create Geld account</h2>
      <p>Sign up below to create your Wallet account</p>
      <div className="flex flex-col gap-4 mt-10 mb-4">
        <input
          className="bg-slate-100 py-1 px-4 w-96"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-slate-100 py-1 px-4 w-96"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-slate-100 py-1 px-4 w-96"
          type="text"
          placeholder="Password"
        />
        <input
          className="bg-slate-100 py-1 px-4 w-96"
          type="text"
          placeholder="Re-password"
        />
      </div>
      <button className="rounded-2xl bg-blue-600 py-2 w-96 text-white mr-9 flex justify-center gap-1">
        Sign up
      </button>
      <div className="flex mt-10 gap-2">
        <p>Already have account?</p>
        <button className="text-blue-600">Log in</button>
      </div>
    </div>
  );
}

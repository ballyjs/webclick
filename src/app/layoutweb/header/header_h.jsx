export default function HeaderH() {
  return (
    <header className="w-full bg-green-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">

        {/* ตรงกลาง */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold">
          .........
        </h1>

        {/* ด้านขวา */}
        <div className="ml-auto flex gap-3">
          <button className="bg-yellow-300 text-green-800 px-4 py-1 rounded-lg font-semibold hover:bg-yellow-400 transition">
            SignUp
          </button>
          <button className="bg-yellow-300 text-green-800 px-4 py-1 rounded-lg font-semibold hover:bg-yellow-400 transition">
            SignIn
          </button>
        </div>
      </div>
    </header>
  );
}

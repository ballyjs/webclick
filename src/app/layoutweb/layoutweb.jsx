import HeaderH from "./header/header_h";
import Ba from "./crud_mox/crud";

export default function LayoutWeb() {
  return (
    <div className="w-full min-h-screen grid grid-rows-[auto_auto_1fr_auto_auto] gap-4 p-4">

      {/* แถว 1 : Header */}
      <header className="bg-green-700 text-white p-4 rounded-xl shadow">
        <h1 className="text-xl font-semibold">ClicK</h1>
        <HeaderH />
      </header>

      {/* แถว 2 : Nav */}
      <nav className="bg-green-600 text-white p-3 rounded-xl shadow">
        <ul className="flex gap-4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
          
        </ul>
      </nav>

      {/* แถว 3 : Main Content */}
      <main className="bg-green-300 p-4 rounded-xl shadow">
        <h2 className="font-bold text-lg">Main Content</h2>
        <p>พื้นที่สำหรับเนื้อหาหลักของเว็บ</p>
        <Ba />
      </main>

      {/* แถว 4 : 2 คอลัมน์ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-yellow-200 p-4 rounded-xl shadow">
          <h3 className="font-bold">Column 1</h3>
          <p>เนื้อหาในคอลัมน์แรก</p>
          
        </div>

        <div className="bg-yellow-300 p-4 rounded-xl shadow">
          <h3 className="font-bold">Column 2</h3>
          <p>เนื้อหาในคอลัมน์ที่สอง</p>
          
        </div>
      </section>

      {/* แถว 5 : Footer */}
      <footer className="bg-green-800 text-white p-4 rounded-xl shadow text-center">
        Footer © 2025
      </footer>

    </div>
  );
}

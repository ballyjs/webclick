import { useState } from "react";

export default function Crud() {
  const [items, setItems] = useState([
    { id: 1, name: "Living Room Sensor", status: "Active", role: "SmartHome" },
    { id: 2, name: "Door Lock", status: "Inactive", role: "SmartHome" },
    { id: 3, name: "Air Purifier", status: "Active", role: "SmartHome" },
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems([
      ...items,
      { id: Date.now(), name: newItem, status: "Active", role: "SmartHome" },
    ]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">

        {/* หัวข้อ */}
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          SmartHome Device Manager
        </h1>

        {/* ฟอร์มเพิ่มรายการ */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="เพิ่มอุปกรณ์ใหม่..."
            className="flex-1 p-2 rounded-xl border border-green-400 focus:ring-2 focus:ring-green-600 outline-none"
          />
          <button
            onClick={addItem}
            className="px-4 py-2 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
          >
            Add
          </button>
        </div>

        {/* ตาราง */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl shadow">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-green-50 transition"
                >
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-green-700 font-semibold">
                    {item.role}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

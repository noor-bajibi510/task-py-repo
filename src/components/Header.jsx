export default function Header(){
  return(<header className="bg-white border-b p-4 flex justify-between items-center">
    <h2 className="font-semibold text-lg">Dashboard</h2>
    <div className="flex items-center gap-4">
      <div className="text-right">
        <p className="font-medium text-sm">Broker User</p>
        <p className="text-xs text-gray-500">broker@company.com</p>
      </div>
      <button className="px-3 py-1 border rounded">Logout</button>
    </div>
  </header>);
}
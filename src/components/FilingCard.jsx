export default function FilingCard({filing}){
  const color=filing.status==="Approved"?"bg-green-100":filing.status==="Pending"?"bg-yellow-100":"bg-red-100";
  return(<div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-600">{filing.customer}</p>
        <p className="font-medium">{filing.id}</p>
      </div>
      <span className={`px-2 py-1 text-xs rounded ${color}`}>{filing.status}</span>
    </div>
    <p className="text-gray-700 mt-3 text-sm">{filing.description}</p>
    <p className="text-xs text-gray-400 mt-2">{filing.createdAt}</p>
  </div>);
}
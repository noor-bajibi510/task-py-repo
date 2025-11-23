export default function SummaryCard({title,value}){
  return(<div className="bg-white p-4 rounded-lg shadow">
    <p className="text-gray-600 text-sm">{title}</p>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>);
}
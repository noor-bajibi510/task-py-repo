import { useEffect,useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import SummaryCard from "../components/SummaryCard";
import FilingCard from "../components/FilingCard";
import { summary as mockSummary, filings as mockFilings } from "../data/mockData";

export default function Dashboard(){
  const[summary,setSummary]=useState([]);
  const[filings,setFilings]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setSummary(mockSummary);
      setFilings(mockFilings);
      setLoading(false);
    },700);
  },[]);

  return(<DashboardLayout>
    {loading?(<p>Loading dashboard...</p>):error?(<p className="text-red-600">{error}</p>):(<>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {summary.map(item=><SummaryCard key={item.id}{...item}/>)}
      </div>
      <div>
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Filings</h3>
          <button className="px-3 py-1 border rounded">+ Add Shipment</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filings.map(f=><FilingCard key={f.id} filing={f}/>)}
        </div>
      </div>
    </>)}
  </DashboardLayout>);
}
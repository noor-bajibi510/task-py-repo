import { NavLink } from "react-router-dom";

const links=[{to:"/dashboard",label:"Dashboard"},{to:"/dashboard/filings",label:"Shipment Filings"},{to:"/dashboard/customers",label:"Customers"},{to:"/dashboard/help",label:"Help"}];

export default function Sidebar(){
  return(<aside className="w-64 bg-white border-r hidden md:block">
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">NexImprove</h1>
      <nav className="space-y-2">
        {links.map(l=><NavLink key={l.to} to={l.to} className={({isActive})=>`block px-3 py-2 rounded ${isActive?"bg-indigo-100 text-indigo-700":"hover:bg-gray-100"}`}>{l.label}</NavLink>)}
      </nav>
    </div>
  </aside>);
}
import HistoryBar from "@/components/dashboard/history";
import SideBar from "@/components/dashboard/sideBar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex flex-row">
          <SideBar/>
          <HistoryBar/>
          {children}
        </div>
    );
  }

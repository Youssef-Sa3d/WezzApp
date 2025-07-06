
import SideBar from '../../components/dashboard/SideBar'
import ChatBox from '../../components/dashboard/ChatBox'

export default function DashboardPage() {


  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-65px)] mt-18 overflow-hidden bg-[var(--whatsapp-bg)]">
          <SideBar />
          <ChatBox/>      
    </div>
  );
}

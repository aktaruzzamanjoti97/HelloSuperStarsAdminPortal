import AdminRegistration from "./Home/Pages/AdminRegistration/AdminRegistration";
import LiveChatContent from "../Admin/Home/Pages/LiveChatSpStar/LiveChatContent";
import UpcomingEvent from "./Home/Pages/UpcomingEvent/UpcomingEvent";
import SuperStarDashboard from "./Home/SuperStarDashboard";
import AddSessionContent from "./Home/Pages/LiveChatSpStar/AddSessionContent";
import LiveChatProfile from "./Home/Pages/LiveChatSpStar/LiveChatProfile";
import RegistertUser from "./Home/Pages/LiveChatSpStar/RegisterUser/RegistertUser";
import AddSuperStar from "./Home/Pages/AddSuperStar/AddSuperStar";
import WelcomeSuperStarPrint from "./Home/Pages/WelcomSuperStarPrint/WelcomeSuperStarPrint";
import SCheduleViewAdmin from "./Home/Pages/LiveChatSpStar/Content/SCheduleViewAdmin";

import AdminGreetings from "./Home/Pages/AdminGreetings/AdminGreetings"
import AdminGreetingsForm from "./Home/Pages/AdminGreetings/AdminGreetingsForm/AdminGreetingsForm"
import GreetingsDetails from "./Home/Pages/AdminGreetings/GreetingsReadyPage/GreetingsReadyPage"

import Notify from "./Home/Pages/AdminGreetings/NotifyGreetings/NotifyGreetingsContent"
import NotifyRecord from "./Home/Pages/AdminGreetings/NotifyGreetings/NotifyGreetingsRecord"





// import StarVidoRecord from './Home/Pages/SuperstarGreetings/VidoUploadPage/VidoUpload';
// import StarVidoUpload from './Home/Pages/SuperstarGreetings/VidoUploadPage2.js/VidoUploadPage2';



const AdminRoute = [
    { path: '/superstar-admin', exact: true, name: 'Admin' },
    { path: '/superstar-admin/dashboard', exact: true, name: 'Dashboard', component: SuperStarDashboard },
    { path: '/superstar-admin/superstar-registration', exact: true, name: 'Registration', component: AdminRegistration },
    { path: '/superstar-admin/live-chat', exact: true, name: 'LiveChat', component: LiveChatContent },
    { path: '/superstar-admin/live-chat/view', exact: true, name: 'LiveChat', component: SCheduleViewAdmin },
    { path: '/superstar-admin/live-chat/registeruser/:live_chat_id', exact: true, name: 'LiveChat', component: RegistertUser },
    { path: '/superstar-admin/live-chat/add-session', exact: true, name: 'LiveChat', component: AddSessionContent },
    { path: '/superstar-admin/live-chat/chat-star-profile', exact: true, name: 'LiveChat', component: LiveChatProfile },
    { path: '/superstar-admin/upcoming-event', exact: true, name: 'LiveChat', component: UpcomingEvent },
    { path: '/superstar-admin/superstars', exact: true, name: 'LiveChat', component: AddSuperStar },
    { path: '/superstar-admin/agreement-paper/:star_id', exact: true, name: 'LiveChat', component: WelcomeSuperStarPrint }, 
    
    { path: '/superstar-admin/greetings', exact: true, name: 'greetings', component: AdminGreetings },
    { path: '/superstar-admin/greetings/greetingsForm', exact: true, name: 'greetingsForm', component: AdminGreetingsForm },
    { path: '/superstar-admin/greetings/details', exact: true, name: 'details', component: GreetingsDetails },


    { path: '/superstar-admin/notify', exact: true, name: 'notify', component: Notify },
    { path: '/superstar-admin/notify/record', exact: true, name: 'notify', component: NotifyRecord },



    // { path: '/superstar-admin/video_record', exact: true, name: 'greetings', component: StarVidoRecord },
    // { path: '/superstar-admin/video_upload', exact: true, name: 'greetings', component: VidoRecord },
    
];

export default AdminRoute;

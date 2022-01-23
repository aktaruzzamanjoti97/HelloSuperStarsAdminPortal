import LiveChatContent from "../Admin/Home/Pages/LiveChatSpStar/LiveChatContent";
import LiveChatPending from "../Admin/Home/Pages/LiveChatSpStar/LiveChatPending";
import PendingLiveChat from "./Home/Pages/LiveChatSpStar/LiveChatPendingDetails";
import ApprovedLiveChat from "./Home/Pages/LiveChatSpStar/LiveChatApprovedDetails";
import AddSuperStar from "./Home/Pages/AddSuperStar/AddSuperStar";
import AddMeetUp from "./Home/Pages/AdminMeeupEvents/AddMeetup/AddMeetUp";
import LiveMeetUp from "./Home/Pages/AdminMeeupEvents/LiveMeetUp/LiveMeetUp";
import PendingMeetUpList from "./Home/Pages/AdminMeeupEvents/LiveMeetUp/PendingMeetupList";
import PendingMeetUp from "./Home/Pages/AdminMeeupEvents/PendingMeetUp/PendingMeetUp";
import AdminGreetings from "./Home/Pages/AdminGreetings/AdminGreetings";
import AdminGreetingsForm from "./Home/Pages/AdminGreetings/AdminGreetingsForm/AdminGreetingsForm";
import GreetingsDetails from "./Home/Pages/AdminGreetings/GreetingsReadyPage/GreetingsReadyPage";
import Notify from "./Home/Pages/AdminGreetings/NotifyGreetings/NotifyGreetingsContent";
import AdminRegistration from "./Home/Pages/AdminRegistration/AdminRegistration";
import AddSessionContent from "./Home/Pages/LiveChatSpStar/AddSessionContent";
import SCheduleViewAdmin from "./Home/Pages/LiveChatSpStar/Content/SCheduleViewAdmin";
import LiveChatProfile from "./Home/Pages/LiveChatSpStar/LiveChatProfile";
import RegistertUser from "./Home/Pages/LiveChatSpStar/RegisterUser/RegistertUser";
import UpcomingEvent from "./Home/Pages/UpcomingEvent/UpcomingEvent";
import WelcomeSuperStarPrint from "./Home/Pages/WelcomSuperStarPrint/WelcomeSuperStarPrint";
import SuperStarDashboard from "./Home/SuperStarDashboard";
import EventDetails from "./Home/Pages/AdminMeeupEvents/EventDetails/EventDetails";
import EventSlot from "./Home/Pages/AdminMeeupEvents/EventSlot/EventSlot";
import EventSuccess from "./Home/Pages/AdminMeeupEvents/EventSlotSuccess/EventSuccess";
import AdminVideoChat from "./Home/Pages/AdminMeeupEvents/AdminVideoChat/AdminVideoChat";
import AdminVideoChatIcon from "./Home/Pages/AdminMeeupEvents/AdminVideoChat/AdminVideoChatIcon";
import AdminAudition from "./Home/Pages/AdminAudition/AdminAudition";
import AuditionsGrandFinal from "./Home/Pages/Auditions/Content/GrandFinal/AuditionsGrandFinal";
import GrandFinish from "./Home/Pages/Auditions/Content/Finish/GrandFinish";
import LiveNowSouvenir from "./Home/Pages/AdminSouvenir/Content/LiveNowSouvenir";
import AddProductSouvenir from "./Home/Pages/AdminSouvenir/Content/AddProduct/AddProductSouvenir";
import CricketJerseySouvenir from "./Home/Pages/AdminSouvenir/Content/CricketJersey/CricketJerseySouvenir";
import LiveSession from "./Home/Pages/AdminLearningSession/LiveSession/LiveSession";
import LearningAddSession from "./Home/Pages/AdminLearningSession/AddSession/LearningAddSession";
import LearningVideoAdmin from "./Home/Pages/AdminLearningSession/Content/LearningVideoAdmin";
import LearningVideoChatAdmin from "./Home/Pages/AdminLearningSession/Content/LearningVideoChatAdmin";


import AdminAuditionVideo from "./Home/Pages/AdminAudition/AdminAuditionVideo/AdminAuditionVideo";
import AdminAuditionVideoShow from "./Home/Pages/AdminAudition/AdminAuditionVideoShow/AdminAuditionVideoShow";
import AdminAuditionVideoShow2 from "./Home/Pages/AdminAudition/AdminAuditionVideoShow/AdminAuditionVideoShow2";
import LiveChatSchedule from "./Home/Pages/LiveChatSpStar/LiveChatSchedule";
import LiveChatSchedule2 from "./Home/Pages/LiveChatSpStar/LiveChatSchedule2";
import AddSession from "./Home/Pages/LiveChatSpStar/Content/AddSession";
import ScheduleLearnView from "./Home/Pages/AdminLearningSession/AddSession/Content/ScheduleLearnView";
import AdminLearningSessionEventCreate from "./Home/Pages/AdminLearningSession/AddSession/Content/AdminLearningSessionEventCreate";
import AddSessionForm from "./Home/Pages/LiveChatSpStar/Content/AddSessionForm";
import EventScheduleDatePick from '../Admin/Home/Pages/LiveChatSpStar/Content/EventScheduleDatePick/EventScheduleDatePick'


// import NotifyRecord from "./Home/Pages/AdminGreetings/NotifyGreetings/NotifyGreetingsRecord"


// import StarVidoRecord from './Home/Pages/SuperstarGreetings/VidoUploadPage/VidoUpload';
// import StarVidoUpload from './Home/Pages/SuperstarGreetings/VidoUploadPage2.js/VidoUploadPage2';



const AdminRoute = [
    { path: '/superstar-admin', exact: true, name: 'Admin' },
    { path: '/superstar-admin/dashboard', exact: true, name: 'Dashboard', component: SuperStarDashboard },
    { path: '/superstar-admin/superstar-registration', exact: true, name: 'Registration', component: AdminRegistration },

    { path: '/superstar-admin/live-chat', exact: true, name: 'LiveChat', component: LiveChatContent },
    { path: '/superstar-admin/live-chat/live-event-create', exact: true, name: 'live-event-create', component: AddSessionForm },
    { path: '/superstar-admin/live-chat-schedule', exact: true, name: 'live-chat-schedule', component: LiveChatSchedule },
    { path: '/superstar-admin/live-chat-schedule2', exact: true, name: 'live-chat-schedule2', component: LiveChatSchedule2},
    { path: '/superstar-admin/live-chat/pending', exact: true, name: 'LiveChat', component: LiveChatPending },
    { path: '/superstar-admin/pending-livechat/:id', exact: true, name: 'pending-livechat-details', component: PendingLiveChat },
    { path: '/superstar-admin/approved-livechat/:id', exact: true, name: 'pending-livechat-details', component: ApprovedLiveChat },

    { path: '/superstar-admin/live-chat/view', exact: true, name: 'LiveChat', component: SCheduleViewAdmin },
    { path: '/superstar-admin/live-chat/registeruser/:live_chat_id', exact: true, name: 'LiveChat', component: RegistertUser },
    { path: '/superstar-admin/live-chat/add-session', exact: true, name: 'LiveChat', component: AddSessionContent },
    { path: '/superstar-admin/live-chat/chat-star-profile', exact: true, name: 'LiveChat', component: LiveChatProfile },

    

    // Auditions Route
    { path: '/superstar-admin/auditions/grand-final', exact: true, name: 'grand-final', component: AuditionsGrandFinal },
    { path: '/superstar-admin/auditions/finish', exact: true, name: 'grand-final', component: GrandFinish },
    { path: '/superstar-admin/audition', exact: true, name: 'audition', component: AdminAudition },

    { path: '/superstar-admin/audition/audition-video', exact: true, name: 'audition-video', component: AdminAuditionVideo },
    { path: '/superstar-admin/audition/audition-video-show', exact: true, name: 'audition-video-show', component: AdminAuditionVideoShow },
    { path: '/superstar-admin/audition/audition-video-show2', exact: true, name: 'audition-video-show2', component: AdminAuditionVideoShow2 },

    // Learning Session Route
    { path: '/superstar-admin/learning-session', exact: true, name: 'learning-session', component: LiveSession },
    { path: '/superstar-admin/learning-session/schedule', exact: true, name: 'schedule', component: LearningAddSession },
    { path: '/superstar-admin/learning-session/schedule-view', exact: true, name: 'schedule-view', component: ScheduleLearnView},
    { path: '/superstar-admin/live-chat/learning-session/event-create', exact: true, name: 'event-create', component: AdminLearningSessionEventCreate },

    { path: '/superstar-admin/learning-session/video', exact: true, name: 'video', component: LearningVideoAdmin },
    { path: '/superstar-admin/learning-session/video-chat-message', exact: true, name: 'video-chat-message', component: LearningVideoChatAdmin },

    // Route
    { path: '/superstar-admin/upcoming-event', exact: true, name: 'LiveChat', component: UpcomingEvent },
    { path: '/superstar-admin/superstars', exact: true, name: 'LiveChat', component: AddSuperStar },
    { path: '/superstar-admin/agreement-paper/:star_id', exact: true, name: 'LiveChat', component: WelcomeSuperStarPrint }, 

    // MeetUp Event Route
    { path: '/superstar-admin/meetup-events/approved', exact: true, name: 'meetup-events', component: LiveMeetUp },
    { path: '/superstar-admin/meetup-events/pending', exact: true, name: 'meetup-events', component: PendingMeetUpList },
    { path: '/superstar-admin/pending-meetup/:id', exact: true, name: 'pending-meetup', component: PendingMeetUp },
    { path: '/superstar-admin/add-meetup', exact: true, name: 'add-meetup', component: AddMeetUp },

    { path: '/superstar-admin/eventDetails', exact: true, name: 'eventDetails', component: EventDetails },
    { path: '/superstar-admin/meetup-event-slot/:id', exact: true, name: 'meetup-event-slot', component: EventSlot },
    { path: '/superstar-admin/eventsuccess', exact: true, name: 'eventsuccess', component: EventSuccess },
    { path: '/superstar-admin/video-chat', exact: true, name: 'video-chat', component: AdminVideoChatIcon },
    { path: '/superstar-admin/video-chat-message', exact: true, name: 'video-chat-message', component: AdminVideoChat },

    // Greetings Route
    { path: '/superstar-admin/greetings', exact: true, name: 'greetings', component: AdminGreetings },
    { path: '/superstar-admin/greetings/greetingsForm', exact: true, name: 'greetingsForm', component: AdminGreetingsForm },
    { path: '/superstar-admin/greetings/details', exact: true, name: 'details', component: GreetingsDetails },
    { path: '/superstar-admin/greetings/details/:greeting_id', exact: true, name: 'details', component: GreetingsDetails },

    // Souvenir Route
    { path: '/superstar-admin/souvenir', exact: true, name: 'souvenir', component: LiveNowSouvenir },
    { path: '/superstar-admin/souvenir/add-products', exact: true, name: 'add-products', component: AddProductSouvenir },

    { path: '/superstar-admin/souvenir/test', exact: true, name: 'test', component: CricketJerseySouvenir },


    { path: '/superstar-admin/notify', exact: true, name: 'notify', component: Notify },
    

    {path: '/superstar-admin/live-chat/select-schedule', exact: true, name: 'select-schedule', component: EventScheduleDatePick}


    // { path: '/superstar-admin/video_record', exact: true, name: 'greetings', component: StarVidoRecord },
    // { path: '/superstar-admin/video_upload', exact: true, name: 'greetings', component: VidoRecord },
    
];

export default AdminRoute;

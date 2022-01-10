import AuditionsStar from './Pages/AnudionsStar/AuditionsStar';
import JoinNoWMeetUp from './Pages/MeetupEventsStar/Content/JoinNoWMeetUp';
import StarMeetUpEvent from './Pages/MeetupEventsStar/StarMeetUpEvent';
import StarMeetUpEventList from './Pages/MeetupEventsStar/StarMeetUpEventList';
import StarMeetUpEventListApproved from './Pages/MeetupEventsStar/StarMeetUpEventListApproved';
import NotifyRecord from './Pages/NotifySuperstar/NotifyGreetingsRecord';
import StarScheduleView from './Pages/StarLiveChat/Content/StarScheduleView';
import StarAddSessionContent from './Pages/StarLiveChat/StarAddSessionContent';
import StarLiveChatContent from './Pages/StarLiveChat/StarLiveChatContent';
import StarPendingContent from './Pages/StarLiveChat/StarPendingContent';
import StarUpcomingEvent from './Pages/StarUpcomingEvent/StarUpcomingEvent';
import StarVideoChat from './Pages/StarVideoChat/StarVideoChat';
import SuperstarGreetings from './Pages/SuperstarPageGreetings/SuperstarPageGreetings';
import SuperstarGreetingsVideoRecord from './Pages/VidoUploadPage/VidoUpload';
import SuperstarGreetingsVideoUpload from './Pages/VidoUploadPage2.js/VidoUploadPage2';
import DashboardStar from './StarHader/DashboardStar';



const SuperstarRoute = [
    { path: '/superstar', exact: true, name: 'SuperStar' },
    { path: '/superstar/dashboard', exact: true, name: 'Dashboard', component: DashboardStar },
    { path: '/superstar/live-chat', exact: true, name: 'LiveChat', component: StarLiveChatContent },
    { path: '/superstar/Live-chat/view', exact: true, name: 'LiveChat_view', component: StarScheduleView },
    { path: '/superstar/live-chat/pending-session', exact: true, name: 'LiveChat_pending_session', component: StarPendingContent },
    { path: '/superstar/live-chat/pending-session/view/:id', exact: true, name: 'LiveChat_pending_session', component: StarAddSessionContent },
    { path: '/superstar/live-chat/add-session', exact: true, name: 'add_session', component: StarAddSessionContent },

    { path: '/superstar/auditions', exact: true, name: 'auditions', component: AuditionsStar },

    { path: '/superstar/upcoming-event', exact: true, name: 'upcoming-event', component: StarUpcomingEvent },

    { path: '/superstar/meetup-events/pending', exact: true, name: 'meetup-events', component: StarMeetUpEventList },
    { path: '/superstar/meetup-events/approved', exact: true, name: 'meetup-events', component: StarMeetUpEventListApproved },

    { path: '/superstar/join-meetup-events/:id', exact: true, name: 'join', component: JoinNoWMeetUp },

    { path: '/superstar/meetup-events/:id', exact: true, name: 'meetup-events', component: StarMeetUpEvent },


    

    { path: '/superstar/greetings', exact: true, name: 'greetings', component: SuperstarGreetings },

    { path: '/superstar/star-video-chat', exact: true, name: 'star-video-chat', component: StarVideoChat },



    { path: '/superstar/notify/record', exact: true, name: 'notify', component: NotifyRecord },
    { path: '/superstar/greetings/video-record', exact: true, name: 'greetings', component: SuperstarGreetingsVideoRecord },
    { path: '/superstar/greetings/video-upload', exact: true, name: 'greetings', component: SuperstarGreetingsVideoUpload },

    
];

export default SuperstarRoute

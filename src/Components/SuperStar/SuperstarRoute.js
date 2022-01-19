import AuditionsStar from './Pages/AnudionsStar/AuditionsStar';
import JoinNoWMeetUp from './Pages/MeetupEventsStar/Content/JoinNoWMeetUp';
import StarMeetUpEvent from './Pages/MeetupEventsStar/StarMeetUpEvent';
import StarMeetUpEventList from './Pages/MeetupEventsStar/StarMeetUpEventList';
import StarMeetUpEventListApproved from './Pages/MeetupEventsStar/StarMeetUpEventListApproved';
import NotifyRecord from './Pages/NotifySuperstar/NotifyGreetingsRecord';
import CricketJersey from './Pages/Souvenir/CricketJersey/CricketJersey';
import StarVideoLearnig from './Pages/StarLearningSession/Content/StarVideoLearnig';
import StarLearnSessionTime from './Pages/StarLearningSession/StarLearnSessionTime';
import StarLeranings from './Pages/StarLearningSession/StarLeranings';
import StarScheduleView from './Pages/StarLiveChat/Content/StarScheduleView';
import StarAddSessionContent from './Pages/StarLiveChat/StarAddSessionContent';
import StarLiveChatContent from './Pages/StarLiveChat/StarLiveChatContent';
import JoinLiveChat from './Pages/StarLiveChat/RegisterUser/StarRegistertUser'


import StarPendingContent from './Pages/StarLiveChat/StarPendingContent';
import StarPendingContentDetails from './Pages/StarLiveChat/StarPendingContentDetails';
import StarApprovedContentDetails from './Pages/StarLiveChat/StarApprovedContentDetails';
import StarUpcomingEvent from './Pages/StarUpcomingEvent/StarUpcomingEvent';
import StarVideoChat from './Pages/StarVideoChat/StarVideoChat';
import SuperstarGreetings from './Pages/SuperstarPageGreetings/SuperstarPageGreetings';
import SuperstarGreetingsVideoRecord from './Pages/VidoUploadPage/VidoUpload';
import SuperstarGreetingsVideoUpload from './Pages/VidoUploadPage2.js/VidoUploadPage2';
import DashboardStar from './StarHader/DashboardStar';
import LiveChatScheduleList from './Pages/StarLiveChat/Content/LiveChatScheduleList/LiveChatScheduleList';
import StarLiveChatApprove from './Pages/StarLiveChat/StarLiveChatApprove';




const SuperstarRoute = [
    { path: '/superstar', exact: true, name: 'SuperStar' },
    { path: '/superstar/dashboard', exact: true, name: 'Dashboard', component: DashboardStar },
    { path: '/superstar/live-chat', exact: true, name: 'LiveChat', component: StarLiveChatContent },

    {path: '/superstar/live-chat/schedule-list/:id', name: 'Schedule_list', component: LiveChatScheduleList},

    { path: '/superstar/live-chat-approve', exact: true, name: 'live-chat-approve', component: StarLiveChatApprove },

    { path: '/superstar/Live-chat/view', exact: true, name: 'LiveChat_view', component: StarScheduleView },
    { path: '/superstar/live-chat/pending-session', exact: true, name: 'LiveChat_pending_session', component: StarPendingContent },
    { path: '/superstar/live-chat/pending-session/details/:id', exact: true, name: 'LiveChat_pending_session', component: StarPendingContentDetails },
    { path: '/superstar/live-chat/approved-session/details/:id', exact: true, name: 'LiveChat_pending_session', component: StarApprovedContentDetails },
    { path: '/superstar/live-chat/join/:id', exact: true, name: 'LiveChat_pending_session', component: JoinLiveChat },

    { path: '/superstar/live-chat/pending-session/view/:id', exact: true, name: 'LiveChat_pending_session', component: StarAddSessionContent },
    { path: '/superstar/live-chat/add-session', exact: true, name: 'add_session', component: StarAddSessionContent },

    { path: '/superstar/auditions', exact: true, name: 'auditions', component: AuditionsStar },

    // Learning Session
    { path: '/superstar/learning-session/test', exact: true, name: 'test', component: StarLeranings },
    { path: '/superstar/learning-session/test1', exact: true, name: 'test1', component: StarLearnSessionTime },
    { path: '/superstar/learning-session/video', exact: true, name: 'test1', component: StarVideoLearnig },




    { path: '/superstar/upcoming-event', exact: true, name: 'upcoming-event', component: StarUpcomingEvent },

    { path: '/superstar/meetup-events/pending', exact: true, name: 'meetup-events', component: StarMeetUpEventList },
    { path: '/superstar/meetup-events/approved', exact: true, name: 'meetup-events', component: StarMeetUpEventListApproved },

    { path: '/superstar/join-meetup-events/:id', exact: true, name: 'join', component: JoinNoWMeetUp },

    { path: '/superstar/meetup-events/:id', exact: true, name: 'meetup-events', component: StarMeetUpEvent },


    

    { path: '/superstar/greetings', exact: true, name: 'greetings', component: SuperstarGreetings },

    { path: '/superstar/star-video-chat/:id', exact: true, name: 'star-video-chat', component: StarVideoChat },

    { path: '/superstar/star-jersey', exact: true, name: 'star-jersey', component: CricketJersey },


    { path: '/superstar/notify/record', exact: true, name: 'notify', component: NotifyRecord },
    { path: '/superstar/greetings/video-record', exact: true, name: 'greetings', component: SuperstarGreetingsVideoRecord },
    { path: '/superstar/greetings/video-upload', exact: true, name: 'greetings', component: SuperstarGreetingsVideoUpload },

    
];

export default SuperstarRoute

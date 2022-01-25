import AuditionsStar from './Pages/AnudionsStar/AuditionsStar';
import JoinNoWMeetUp from './Pages/MeetupEventsStar/Content/JoinNoWMeetUp';
import StarMeetUpEvent from './Pages/MeetupEventsStar/StarMeetUpEvent';
import StarMeetUpEventList from './Pages/MeetupEventsStar/StarMeetUpEventList';
import StarMeetUpEventListApproved from './Pages/MeetupEventsStar/StarMeetUpEventListApproved';
import NotifyRecord from './Pages/NotifySuperstar/NotifyGreetingsRecord';
import CricketJersey from './Pages/Souvenir/CricketJersey/CricketJersey';
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

import RequestLearn from './Pages/StarLearningSession/Content/Request/RequestLearn';
import ApprovedLearn from './Pages/StarLearningSession/Content/Approved/ApprovedLearn';
import RequestLearnList from './Pages/StarLearningSession/Content/Request/RequestLearnList';
import RequestLearnEvent from './Pages/StarLearningSession/Content/Request/RequestLearnEvent';
import ApprovedLearnList from './Pages/StarLearningSession/Content/Approved/ApprovedLearnList';
import ApprovedLearnSlide from './Pages/StarLearningSession/Content/Approved/ApprovedLearnSlide';
import ApprovedLearnEvent from './Pages/StarLearningSession/Content/Approved/ApprovedLearnEvent';
import StarLearnSessionTime from './Pages/StarLearningSession/Content/Request/StarLearnSessionTime';
import AppLearnSessionTime from './Pages/StarLearningSession/Content/Approved/AppLearnSessionTime';
import VideoLearnSession from './Pages/StarLearningSession/Content/Approved/VideoLearnSession';
import StarMainDashboard from './Dashboard/StarMainDashboard';
import StarDashEvent from './Dashboard/StarDashEvent';




const SuperstarRoute = [
    { path: '/superstar', exact: true, name: 'SuperStar' },
    { path: '/superstar/dashboard', exact: true, name: 'Dashboard', component: StarMainDashboard },
    { path: '/superstar/dashboard/event-list', exact: true, name: 'Dashboard', component: StarDashEvent },
    // Live Chat
    { path: '/superstar/live-chat', exact: true, name: 'LiveChat', component: StarLiveChatContent },
    { path: '/superstar/live-chat/schedule-list/:id', name: 'Schedule_list', component: LiveChatScheduleList},
    { path: '/superstar/live-chat-approve', exact: true, name: 'live-chat-approve', component: StarLiveChatApprove },
    { path: '/superstar/Live-chat/view', exact: true, name: 'LiveChat_view', component: StarScheduleView },
    { path: '/superstar/live-chat/pending-session', exact: true, name: 'LiveChat_pending_session', component: StarPendingContent },
    { path: '/superstar/live-chat/pending-session/details/:id', exact: true, name: 'LiveChat_pending_session', component: StarPendingContentDetails },
    { path: '/superstar/live-chat/approved-session/details/:id', exact: true, name: 'LiveChat_pending_session', component: StarApprovedContentDetails },
    { path: '/superstar/live-chat/join/:id', exact: true, name: 'LiveChat_pending_session', component: JoinLiveChat },
    { path: '/superstar/live-chat/pending-session/view/:id', exact: true, name: 'LiveChat_pending_session', component: StarAddSessionContent },
    { path: '/superstar/live-chat/add-session', exact: true, name: 'add_session', component: StarAddSessionContent },

    // Audition
    { path: '/superstar/auditions', exact: true, name: 'auditions', component: AuditionsStar },

    // Learning Session
    { path: '/superstar/learning-session', exact: true, name: 'learning-session', component: ApprovedLearn },
    { path: '/superstar/learning-session/approved', exact: true, name: 'approved', component: ApprovedLearnSlide },
    { path: '/superstar/learning-session/approved-all', exact: true, name: 'approved-all', component: ApprovedLearnList },
    { path: '/superstar/learning-session/approved/event', exact: true, name: 'event', component: ApprovedLearnEvent },
    { path: '/superstar/learning-session/approved/join', exact: true, name: 'join', component: AppLearnSessionTime },
    { path: '/superstar/learning-session/approved/video', exact: true, name: 'video', component: VideoLearnSession },

    { path: '/superstar/learning-session/request', exact: true, name: 'request', component: RequestLearn },
    { path: '/superstar/learning-session/request-all', exact: true, name: 'request-all', component: RequestLearnList },
    { path: '/superstar/learning-session/request/event', exact: true, name: 'event', component: RequestLearnEvent },
    { path: '/superstar/learning-session/request/approved', exact: true, name: 'approved', component: StarLearnSessionTime },




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

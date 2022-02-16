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
import StarLiveChatEdit from './Pages/StarLiveChat/StarEditSession';
import JoinLiveChat from './Pages/StarLiveChat/RegisterUser/StarRegistertUser'

import AllPost from "./Pages/StarPost/AllPost";
import PendingPost from "./Pages/StarPost/PendingPost";
import ApprovedPost from "./Pages/StarPost/ApprovedPost";
import PostDetails from "./Pages/StarPost/PendingPostDetails";
import CreatePost from "./Pages/StarPost/Content/AddSessionForm";


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
import StarEventCategory from './Dashboard/StarEventCategory';
import StarVideoJoin from './Dashboard/Content/StarVideoJoin';
import StarNotifySchedule from '../Admin/Home/Pages/AdminGreetings/NotifyGreetings/Content/NotifySchedule';
import StartNotifyScheduleView from './Pages/NotifySuperstar/Content/StartNotifyScheduleView';
import StarEventRequesting from './Dashboard/StarEventRequesting';




const SuperstarRoute = [
    { path: '/superstar', exact: true, name: 'SuperStar' },
    { path: '/superstar/dashboard', exact: true, name: 'Dashboard', component: StarMainDashboard },
    { path: '/superstar/event-date', exact: true, name: 'Dashboard', component: StarDashEvent },
    { path: '/superstar/event-category', exact: true, name: 'Dashboard', component: StarEventCategory },
    { path: '/superstar/event-requesting', exact: true, name: 'Dashboard', component: StarEventRequesting },
    { path: '/superstar/event-category/join', exact: true, name: 'Dashboard', component: StarVideoJoin },

    // Post Route
    { path: '/superstar/post', exact: true, name: 'PendingPost', component: AllPost },
    { path: '/superstar/post/create', exact: true, name: 'CreatePost', component: CreatePost },
    { path: '/superstar/post/pending', exact: true, name: 'PendingPost', component: PendingPost },
    { path: '/superstar/post/approved', exact: true, name: 'PendingPost', component: ApprovedPost },
    { path: '/superstar/post/:id', exact: true, name: 'PendingPost', component: PostDetails },
    // { path: '/superstar/post/approved', exact: true, name: 'ApprovedPost', component: PendingPost },

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
    { path: '/superstar/live-chat/edit-session/:id', exact: true, name: 'edit_session', component: StarLiveChatEdit },

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


    // Greetings Route
    { path: '/superstar/greetings', exact: true, name: 'greetings', component: SuperstarGreetings },
    { path: '/superstar/notify/record', exact: true, name: 'notify', component: NotifyRecord },
    { path: '/superstar/notify-schedule', exact: true, name: 'notify-schedule', component: StarNotifySchedule },
    { path: '/superstar/notify-schedule/view', exact: true, name: 'view', component: StartNotifyScheduleView },
    { path: '/superstar/greetings/video-record/:index', exact: true, name: 'greetings', component: SuperstarGreetingsVideoRecord },
    { path: '/superstar/greetings/video-upload', exact: true, name: 'greetings', component: SuperstarGreetingsVideoUpload },


    { path: '/superstar/upcoming-event', exact: true, name: 'upcoming-event', component: StarUpcomingEvent },

    // Meetup Event
    { path: '/superstar/meetup-events/pending', exact: true, name: 'meetup-events', component: StarMeetUpEventList },
    { path: '/superstar/meetup-events/approved', exact: true, name: 'meetup-events', component: StarMeetUpEventListApproved },
    { path: '/superstar/join-meetup-events/:id', exact: true, name: 'join', component: JoinNoWMeetUp },
    { path: '/superstar/meetup-events/:id', exact: true, name: 'meetup-events', component: StarMeetUpEvent },
    { path: '/superstar/star-video-chat/:id', exact: true, name: 'star-video-chat', component: StarVideoChat },

    
    { path: '/superstar/star-jersey', exact: true, name: 'star-jersey', component: CricketJersey },
    
    
];

export default SuperstarRoute

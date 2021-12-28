import DashboardStar from './StarHader/DashboardStar'
import StarLiveChatContent from './Pages/StarLiveChat/StarLiveChatContent'
import StarPendingContent from './Pages/StarLiveChat/StarPendingContent'
import StarAddSessionContent from './Pages/StarLiveChat/StarAddSessionContent'
import StarScheduleView from './Pages/StarLiveChat/Content/StarScheduleView';
import StarUpcomingEvent from './Pages/StarUpcomingEvent/StarUpcomingEvent';




const SuperstarRoute = [
    { path: '/superstar', exact: true, name: 'SuperStar' },
    { path: '/superstar/dashboard', exact: true, name: 'Dashboard', component: DashboardStar },
    { path: '/superstar/live-chat', exact: true, name: 'LiveChat', component: StarLiveChatContent },
    { path: '/superstar/Live-chat/view', exact: true, name: 'LiveChat_view', component: StarScheduleView },
    { path: '/superstar/live-chat/pending-session', exact: true, name: 'LiveChat_pending_session', component: StarPendingContent },
    { path: '/superstar/live-chat/pending-session/view/:id', exact: true, name: 'LiveChat_pending_session', component: StarAddSessionContent },
    { path: '/superstar/live-chat/add-session', exact: true, name: 'add_session', component: StarAddSessionContent },
    { path: '/superstar/upcoming-event', exact: true, name: 'upcoming-event', component: StarUpcomingEvent },
];

export default SuperstarRoute


import AdminAudition2 from "./AdminAudition2";
import AdminRoundTwoAppeal from "./AdminRoundTwoAppeal/AdminRoundTwoAppeal";
import AdminRoundOneAppeal from "./AdminRoundOneAppeal/AdminRoundOneAppeal";
import AdminSelectJury from "./AdminSelectJury/AdminSelectJury";
import dashboard from "./Dashboard/AdminMainDashboard";
import AdminAuditionVideoShow from "./AdminAuditionVideoShow/AdminAuditionVideoShow";
import AdminAuditionVideoShow2 from "./AdminAuditionVideoShow/AdminAuditionVideoShow2";
import AdminAuditionVideo from "./AdminAuditionVideo/AdminAuditionVideo";
import AdminAuditionLive from "./AdminAuditionLive/AdminAuditionLive";
import PendingAudition from "./PendingAudition/PendingAudition";
import AdminAuditionCreateEvent from "./AdminAuditionCreateEvent/AdminAuditionCreateEvent";
import AdminAuditionLiveVideoFilter from "./AdminAuditionLiveVideoFilter/AdminAuditionLiveVideoFilter";
import GrandFinish from "./Dashboard/Content/Finish/GrandFinish";
import AuditionsStatus from "./AuditionStatus/AuditionsStatus";



const AuditionAdminRoute = [
    
    { path: '/audition-admin/dashboard', exact: true, name: 'dashboard', component: dashboard },
    { path: '/audition-admin/auditions/round2-appeal', exact: true, name: 'grand-final', component: AdminRoundTwoAppeal },
    { path: '/audition-admin/auditions/round1-appeal', exact: true, name: 'grand-final', component: AdminRoundOneAppeal },
    { path: '/audition-admin/auditions/jury-select/:id', exact: true, name: 'grand-final', component: AdminSelectJury },
    { path: '/audition-admin/auditions/finish', exact: true, name: 'grand-final', component: GrandFinish },

    // { path: '/audition-admin/auditions/finish', exact: true, name: 'grand-final', component: GrandFinish },
    { path: '/audition-admin/audition', exact: true, name: 'audition', component: AdminAudition2 },
    { path: '/audition-admin/audition/live-upload-show/:id', exact: true, name: 'audition', component: AdminAuditionLiveVideoFilter },
    { path: '/audition-admin/audition/create-event/:id', exact: true, name: 'create-event', component: AdminAuditionCreateEvent },
    { path: '/audition-admin/audition/pending', exact: true, name: 'audition-pending', component: PendingAudition},
    { path: '/audition-admin/audition/pending/:id', exact: true, name: 'audition-details', component: AuditionsStatus},
    { path: '/audition-admin/audition/live', exact: true, name: 'audition-pending', component: AdminAuditionLive},
    { path: '/audition-admin/audition/audition-video/:id', exact: true, name: 'audition-video', component: AdminAuditionVideo },
    { path: '/audition-admin/audition/audition-video-show', exact: true, name: 'audition-video-show', component: AdminAuditionVideoShow },
    { path: '/audition-admin/audition/audition-video-show2', exact: true, name: 'audition-video-show2', component: AdminAuditionVideoShow2 },

    //@TODO: Superstar Route
    

];

export default AuditionAdminRoute;

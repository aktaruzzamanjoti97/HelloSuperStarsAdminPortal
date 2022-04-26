
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
import ParticipantList from "./ParticipantList/ParticipantList";
import AuditionSelectionRound from "./AuditionSelectionRound/AuditionSelectionRound";
import AuditionAssignedStar from "./AuditionAssignedStar/AuditionAssignedStar";
import AdminAuditionRoundThree from "./AdminAuditionRoundThree/AdminAuditionRoundThree";
import AuditionFinalResult from "./AuditionFinalResult/AuditionFinalResult";
import AuditionRounds from "./AuditonRounds/AuditionRounds";
import DashboardAudition from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/DashboardAudition";
import EventsLive from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Event/EventsLive";
import PendingEventAudition from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Event/PendingEventAudition";
import EventRequestApproval from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Event/EventRequestApproval";
import AdminRequestForApproval from "../Admin/Home/Pages/AdminAudition/AdminRequestForApproval/AdminRequestForApproval";
import CreateEventAudition from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Event/CreateEventAudition";
import CreateCertificate from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Certificate/CreateCertificate";
import RequestCertificate from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Certificate/RequestCertificate";
import RegisterUserListAudition from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Register/RegisterUserListAudition";
import LiveAudition from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/LiveAudition/LiveAudition";
import RegisterAuditonList from "../Admin/Home/Pages/AdminAudition/AuditionDasboard/Content/Register/RegisterAuditonList";



const AuditionAdminRoute = [
    
    { path: '/audition-admin/dashboard', exact: true, name: 'dashboard', component: dashboard },
    { path: '/audition-admin/auditions/round2-appeal/:id', exact: true, name: 'grand-final', component: AdminRoundTwoAppeal },
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
    { path: '/audition-admin/audition/participantList', exact: true, name: 'participant-list', component: ParticipantList},
    { path: '/audition-admin/audition/selection-round', exact: true, name: 'participant-list', component: AuditionSelectionRound},
    { path: '/audition-admin/audition/assigned-star', exact: true, name: 'participant-list', component: AuditionAssignedStar},
    { path: '/audition-admin/audition/round-result', exact: true, name: 'participant-list', component: AdminAuditionRoundThree},
    { path: '/audition-admin/audition/final-result', exact: true, name: 'participant-list', component: AuditionFinalResult},

    


    

    { path: '/audition-admin/audition/dashboard', exact: true, name: 'dashboard', component: DashboardAudition },

    { path: '/audition-admin/audition/event', exact: true, name: 'event', component: EventsLive },
    { path: '/audition-admin/audition/event/pending', exact: true, name: 'pending', component: PendingEventAudition },
    { path: '/audition-admin/audition/event/request-approve', exact: true, name: 'pending', component: EventRequestApproval },
    { path: '/audition-admin/audition/event/request-approve-view', exact: true, name: 'pending', component: AdminRequestForApproval },
    { path: '/audition-admin/audition/round', exact: true, name: 'participant-list', component: AuditionRounds},

    { path: '/audition-admin/audition/live-audition', exact: true, name: 'live-audition', component: LiveAudition },

    { path: '/audition-admin/audition/event/create-event', exact: true, name: 'create-event', component: CreateEventAudition },
    
    { path: '/audition-admin/audition/certificate-create', exact: true, name: 'certificate-create', component: CreateCertificate },
    { path: '/audition-admin/audition/certificate-request', exact: true, name: 'certificate-request', component: RequestCertificate },
    { path: '/audition-admin/audition/register-user', exact: true, name: 'certificate-request', component: RegisterUserListAudition },
    { path: '/audition-admin/audition/register-user-list', exact: true, name: 'certificate-request', component: RegisterAuditonList },

    //@TODO: audition Route
    

];

export default AuditionAdminRoute;

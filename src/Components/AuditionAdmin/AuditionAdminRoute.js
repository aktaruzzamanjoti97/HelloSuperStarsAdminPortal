
import AdminAudition2 from "./AdminAudition2";
import AdminAuditionCreateEvent from "./AdminAuditionCreateEvent/AdminAuditionCreateEvent";
import AdminAuditionLive from "./AdminAuditionLive/AdminAuditionLive";
import AdminAuditionLiveVideoFilter from "./AdminAuditionLiveVideoFilter/AdminAuditionLiveVideoFilter";
import AdminAuditionRoundThree from "./AdminAuditionRoundThree/AdminAuditionRoundThree";
import AdminAuditionVideo from "./AdminAuditionVideo/AdminAuditionVideo";
import AdminAuditionVideoShow from "./AdminAuditionVideoShow/AdminAuditionVideoShow";
import AdminAuditionVideoShow2 from "./AdminAuditionVideoShow/AdminAuditionVideoShow2";
import AdminRoundOneAppeal from "./AdminRoundOneAppeal/AdminRoundOneAppeal";
import AdminRoundTwoAppeal from "./AdminRoundTwoAppeal/AdminRoundTwoAppeal";
import AdminSelectJury from "./AdminSelectJury/AdminSelectJury";
import AuditionAssignedStar from "./AuditionAssignedStar/AuditionAssignedStar";
import AuditionFinalResult from "./AuditionFinalResult/AuditionFinalResult";
import AuditionJuryResultForNextRound from "./AuditionJuryResultForNextRound/AuditionJuryResultForNextRound";
import AuditionSelectionRound from "./AuditionSelectionRound/AuditionSelectionRound";
import AuditionsStatus from "./AuditionStatus/AuditionsStatus";
import AuditionRounds from "./AuditonRounds/AuditionRounds";
import CreateEventRound from "./CreateEventRound/CreateEventRound";
import dashboard from "./Dashboard/AdminMainDashboard";
import GrandFinish from "./Dashboard/Content/Finish/GrandFinish";
import JuryRoundResult from "./JuryRoundResult/JuryRoundResult";
import ParticipantList from "./ParticipantList/ParticipantList";
import PendingAudition from "./PendingAudition/PendingAudition";



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
    { path: '/audition-admin/audition/final-result', exact: true, name: 'participant-list', component: AuditionFinalResult},
    { path: '/audition-admin/audition/audition-round', exact: true, name: 'participant-list', component: AuditionRounds},
    { path: '/audition-admin/audition/create-event-round', exact: true, name: 'participant-list', component: CreateEventRound},
    { path: '/audition-admin/audition/jury-round-result', exact: true, name: 'participant-list', component: JuryRoundResult},
    { path: '/audition-admin/audition/jury-next-round-selection', exact: true, name: 'participant-list', component: AuditionJuryResultForNextRound}    

];

export default AuditionAdminRoute;

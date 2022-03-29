
import JuryBoardDashboard from './Dashboard/JuryBoardDashboard';

const JuryBoardRoute = [
    { path: '/jury-board', exact: true, name: 'JuryBoard' },

    { path: '/jury-board/dashboard', exact: true, name: 'Dashboard', component: JuryBoardDashboard },
    






    // //@FIXME: Audition
    // { path: '/superstar/audition', exact: true, name: 'auditions', component: SuperstarAudition },
    // { path: '/superstar/audition/pending', exact: true, name: 'auditions', component:SuperstarAuditionPending},
    // { path: '/superstar/audition/live', exact: true, name: 'auditions', component:SuperstarAuditionLive},
    // { path: '/superstar/auditions/pending/:id', exact: true, name: 'auditions', component: AuditionsStar },

    


];

export default JuryBoardRoute

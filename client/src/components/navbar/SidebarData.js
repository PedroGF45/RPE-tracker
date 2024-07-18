const SidebarData = [
    {
        admin: true,
        user: true,
        title: 'Dashboard',
        path: 'dashboard',
        icon: 'bx bx-home nav_icon',
        active: true
    },
    {
        admin: true,
        user: false,
        title: 'Clubs',
        path: 'clubs',
        icon: 'bx bx-building-house nav_icon',
        active: false
    },
    {
        admin: true,
        user: true,
        title: 'Teams',
        path: 'teams',
        icon: 'bx bx-group nav_icon',
        active: false
    },
    {
        admin: true,
        user: true,
        title: 'Users',
        path: 'users',
        icon: 'bx bx-user nav_icon',
        active: false
    },
    {
        admin: true,
        user: true,
        title: 'Trainings',
        path: 'trainings',
        icon: 'bx bx-dumbbell nav_icon',
        active: false
    },
    {
        admin: true,
        user: true,
        title: 'RPE',
        path: 'rpe',
        icon: 'bx bx-line-chart nav_icon',
        active: false
    },
    {
        admin: true,
        user: false,
        title: 'Server',
        path: 'server',
        icon: 'bx bx-server nav_icon',
        active: false
    }
]

export { SidebarData };
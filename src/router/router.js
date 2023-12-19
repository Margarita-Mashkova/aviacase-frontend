import * as VueRouter from 'vue-router'

const routes = [
    /*{ path: '/auth', component: LoginPage, name:'login', alias:'/' },
    { path: '/registration', component: RegistrationPage, redirect: { path: "/registration/step-1" },
     children: [
        {
            path: 'step-1',
            component: RegistrationForm
        },
        {
            path: 'step-2',
            component: BirthdateCityForm
        },
        {
            path: 'step-3',
            component: PhotoForm
        },
    ] },
    { path: '/feed', component: FeedPage },
    { path: '/:login', component: ProfilePage },
    { path: '/edit-profile', component: EditProfilePage, redirect: { path: "/edit-profile/personal" },
     children: [
        {
            path: 'personal',
            component: PersonalDataForm,
            meta:{reload: true}
        },
        {
            path: 'login-data',
            component: LoginDataForm,
        },
       
    ] },
    { path: '/chats', component: ChatsPage },
    { path: '/chat-create', component: ChatCreatePage },
    { path: '/chat/:id/edit', component: ChatEditPage },
    { path: '/chat/:id/add-members', component: AddMembersPage },
    { path: '/chat/:id/delete-members', component: DeleteMembersPage },
    { path: '/chat/:id', component: ChatPage },
    { path: '/subscribers', component: SubscribersPage },
    { path: '/subscriptions', component: SubscriptionsPage },
    { path: '/search', component: SearchPage },
    { path: '/forbidden', component: ForbiddenPage, name:'forbidden' },
    { path: '/not-found', component: NotFoundPage, name: 'not-found' },
    { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'not-found' },*/
]

let router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes 
})

export default router
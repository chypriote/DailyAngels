export class App {

	configureRouter(config, router) {
		this.router = router;
		config.title = 'DailyAngels';
		config.map([
			{ route: ['', 'home'],	name: 'home',	moduleId: 'home/index',	nav: true,	title: 'Accueil',	settings: { icon: 'dashboard' } },
			{ route: 'daily/create',			name: 'dailyCreate', 		moduleId: 'daily/create/index',		nav:true,		title: 'Ajouter un daily', settings: { icon: 'note_add' } },
			{ route: 'daily/:id/details',	name: 'dailyDetails', 	moduleId: 'daily/details/index'},
			{ route: 'sprint/create',			name: 'sprintCreate', 		moduleId: 'sprint/create/index',		nav:true,		title: 'Ajouter un sprint', settings: { icon: 'alarm_add' } },
			{ route: 'sprint/:id/details',	name: 'sprintDetails', 	moduleId: 'sprint/details/index'}
		]);
	}
}

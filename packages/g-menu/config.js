export default [
	{ path: '/dashboard/homepage', name: 'dashboard', icon: 'icon-index' },
	{ path: '/me', name: 'workspace', icon: 'icon-workspace' },
	{ parent: '/me', path: '/me/data-source', name: 'dataSource' },
	{ parent: '/me', path: '/me/connection', name: 'connection' },
	{ parent: '/me', path: '/me/board/list', name: 'board' },
	{ path: '/favorite', name: 'favorite', icon: 'icon-favorite' },
	{ path: '/share', name: 'share', icon: 'icon-share' }
]
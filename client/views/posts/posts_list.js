var postsData = [
	{
		title: 'GMs first Meteor App',
		author: 'Dave Linskey',
		url: 'http://www.gm.com/'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];
Template.postsList.helpers({
	posts: postsData
});
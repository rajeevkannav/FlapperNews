angular.module('flapperNews', ['ui.router'])

    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })

                .state('posts', {
                    url: '/posts/{id}',
                    templateUrl: '/posts.html',
                    controller: 'PostsCtrl'
                })

            $urlRouterProvider.otherwise('home')

        }
    ])

    .controller('MainCtrl', [
        '$scope',
        'posts',
        function ($scope, posts) {

            $scope.posts = posts.posts;

            $scope.addPost = function () {

                if (!$scope.title || $scope.title === '') {
                    return;
                }

                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes: 0,
                    comments: [
                        {author: 'Joe', body: 'Cool post!', upvotes: 0},
                        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                    ]
                })

                $scope.title = ''
                $scope.link = ''
            }

            $scope.incrementUpvotes = function (post) {
                post.upvotes += 1;
            }

        }])

    .controller('PostsCtrl', [
        '$scope',
        '$stateParams',
        'posts',
        function ($scope, $stateParams, posts) {


            $scope.post = posts.posts[$stateParams.id];


            $scope.addComment = function (post) {
                if (!$scope.body || $scope.body == '') {
                    return;
                }
                $scope.post.comments.push({
                    body: $scope.body,
                    author: 'user',
                    upvotes: 0
                })
                $scope.body = ''
            }

            $scope.incrementUpvotes = function(comment){
                comment.upvotes += 1 ;
            }

        }
    ])


    //angular.module('flapperNews', [])
    .factory('posts', [function () {

        //service body

        var o = {
            posts: [
                {title: 'Post 1', upvotes: 9, comments: []},
                {title: 'Post 2', upvotes: 4, comments: []},
                {title: 'Post 3', upvotes: 2, comments: []},
                {title: 'Post 4', upvotes: 19, comments: []},
                {title: 'Post 5', upvotes: 11, comments: []},
                {title: 'Post 6', upvotes: 90, comments: []}
            ]
        };

        return o;

    }]);

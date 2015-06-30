angular.module('flapperNews')
    .controller('MainCtrl', [
        '$scope',
        'posts',
        function ($scope, posts) {

            $scope.posts = posts.posts;

            $scope.addPost = function () {

                if (!$scope.title || $scope.title === '') {
                    return;
                }

                posts.create({
                    title: $scope.title,
                    link: $scope.link
                });

                //$scope.posts.push({
                //    title: $scope.title,
                //    link: $scope.link,
                //    upvotes: 0,
                //    comments: [
                //        {author: 'Joe', body: 'Cool post!', upvotes: 0},
                //        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                //    ]
                //})

                $scope.title = ''
                $scope.link = ''
            }

            $scope.incrementUpvotes = function (post) {
                posts.upvote(post);
            }

        }])

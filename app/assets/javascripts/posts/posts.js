angular.module('flapperNews')

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

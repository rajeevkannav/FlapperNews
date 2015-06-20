angular.module('flapperNews', [])
    .factory('posts', [function(){

        //service body

        var o = {
            posts: [
                {title: 'Post 1', upvotes: 9},
                {title: 'Post 2', upvotes: 4},
                {title: 'Post 3', upvotes: 2},
                {title: 'Post 4', upvotes: 19},
                {title: 'Post 5', upvotes: 11},
                {title: 'Post 6', upvotes: 90}
            ]
        };

        return o;

    }])

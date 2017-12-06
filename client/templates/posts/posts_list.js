/**
 * Created by elvinntombert on 06/12/2017.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
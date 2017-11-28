import Backbone from "backbone";
import Song from "./song";

export default Backbone.Collection.extend({
    model: Song,

    url: "https://itunes.apple.com/search",

    //Parse the JSON given by itunes
    parse: function(response) {
        return response.results;
    },
    //Fetch request with the value (term)
    search: function(term){
        return this.fetch({
            reset: true,
            data: {term: term}
        });
    }
});

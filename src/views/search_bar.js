import $ from "jquery";
import Backbone from "backbone";
import template from "../templates/search_bar.ejs";

const SearchBar = Backbone.View.extend({
    template: template,

    events: {
        "submit": "_onSubmit"
    },

    initialize: function(options){
        this.handleSubmit = options.handleSubmit;

        this.render();
    },

    render: function() {
        this.$el.empty().append(this.template());

        return this;
    },

   _onSubmit: async function(e) {
        e.preventDefault();
        //Get the name of the artist
        const value = this.$(".inputSearch").val();

        //Wait the response of the Ajax call
        await this.handleSubmit(value);

        //To clean the input
        this.$(".inputSearch").val('');
    }
});
export default SearchBar;

import Backbone from "backbone";
import $ from "jquery";
import template from "../templates/search_bar.ejs";

const SearchBar = Backbone.View.extend({
    template: template,

    events: {
        "submit": "_onSubmit",
        "click .search-form__button": "_onSubmit"
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
        const value = this.$("input[type=search]").val();

        //Wait the response of the Ajax call
        await this.handleSubmit(value);

        //Clean the input
        this.$(".js-search-input").val('');
    }
});
export default SearchBar;

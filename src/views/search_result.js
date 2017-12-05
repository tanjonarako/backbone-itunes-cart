import Backbone from "backbone";
import $ from "jquery";
import template from "../templates/search_result.ejs";

const SearchResult = Backbone.View.extend({
    template: template,

    events: {
        "click .js-btn-add": "_addToCart"
    },

    initialize: function(options){
        this.handleAddToCart = options.handleAddToCart;

        //Listen to the reset of the search collection when there is a new search by the user
        this.listenTo(this.collection, 'reset', this.render);
        //Listen to the change to disable the add button
        this.listenTo(this.collection, 'change', this.render);

        this.render();
    },

    render: function() {
        this.$el.empty().append(this.template({results : this.collection.toJSON()}));

        return this;
    },

    _addToCart: function(e) {
        //Get the current model to add in the cart
        const id = e.currentTarget.getAttribute('data-id');

        this.handleAddToCart(id);
    }  
});
export default SearchResult;

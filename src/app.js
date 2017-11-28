import $ from "jquery";
import Backbone from "backbone";
import _ from "underscore";
import SearchResultCollection from "./models/songs";
import CartCollection from "./models/cart";
import SearchBarView from "./views/search_bar";
import SearchResultView from "./views/search_result";
import CartView from "./views/cart";
import template from "./templates/app.ejs";

var AppView = Backbone.View.extend({
    className: 'app',

    template: template,

    initialize: function(){
        this.searchCollection = new SearchResultCollection();
        this.cartCollection = new CartCollection();

        this.render();
    },

    render: function() {
        this.$el.html(this.template());

        this._renderSearchBar();
        this._renderSearchResult();
        this._renderCart();

        return this;
    },

    //Render the search bar with the handleSubmit callback
    //The submit is in the search bar view
   _renderSearchBar: function() {
        var view = new SearchBarView({
            el           : this.$('.search-bar'),
            handleSubmit : this._submit.bind(this)
        }).render();
        this.$('.container').append(view.el);
    },

    //Render the search result with the handleAddToCart callback
    //The add cart button is in the search result view
   _renderSearchResult: function() {
        var view = new SearchResultView({
            el              : this.$('.search-result'),
            collection      : this.searchCollection,
            handleAddToCart : this._addToCart.bind(this)
        }).render();
        this.$('.container').append(view.el);
    },

    //Render the cart with the handleRemoveFromCart callback
    //The remove cart button is in the cart view
   _renderCart: function() {
        var view = new CartView({
            el                   : this.$('.cart'),
            collection           : this.cartCollection,
            handleRemoveFromCart : this._removeFromCart.bind(this)
        }).render();
        this.$('.container').append(view.el);
    },

    // Callback to the handleSubmit of the searchBar view
    _submit: function(value) {
        //Return the promise of the ajax
        //The Function search() call the fetch with the value
        return this.searchCollection.search(value);
    },

    // Callback to the handleAddToCart of the search result view
    _addToCart: function(id) {
        //Get the current song to add
        const model = this.searchCollection.get(id);

        //Disable the button add of the current song in the search result view
        model.set({disabled: true});

        //If the song doesn't exist in the cart, add it.
        if (!this.cartCollection.get(id))
            this.cartCollection.add(model);
    },

    // Callback to the handleRemoveFromCart of the cart view
    _removeFromCart: function(id) {
        //Get the current song to remove
        const model = this.searchCollection.get(id);

        //Enable the button add of the current song in the search result view
        model.set({disabled: false});

        //If the song exist in the cart, remove it.
        if (this.cartCollection.get(id))
            this.cartCollection.remove(model);
    }
});
export default AppView;

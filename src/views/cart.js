import $ from "jquery";
import Backbone from "backbone";
import template from "../templates/cart.ejs";

const Cart = Backbone.View.extend({
    template: template,

    events: {
        "click .js-btn-remove": "_removeToCart"
    },

    initialize: function(options){
        this.handleRemoveFromCart = options.handleRemoveFromCart;

        //Listen to the add of the cart collection when there is a new model push in the collection
        this.listenTo(this.collection, 'add', this.render);
        //Listen to the remove of the cart collection when we remove a model
        this.listenTo(this.collection, 'remove', this.render);

        this.render();
    },

    render: function() {
        this.$el.empty().append(this.template({results : this.collection.toJSON()}));

        return this;
    },

    _removeToCart: function(e) {
        //Get the current model to remove
        const id = e.currentTarget.getAttribute('data-id')

        this.handleRemoveFromCart(id);
    }
});
export default Cart;

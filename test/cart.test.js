import Backbone from "backbone";
import CartView from "../src/views/cart";
import CartCollection from "../src/models/cart";

describe('views:CartView', function() {
    const list = new CartCollection([
        {trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'},
        {trackId: '2', trackName: 'Perfect', artistName: 'Ed Sheeran'}
    ]);

    it('should render a list', function() {
        const cartView = new CartView({collection: list}).render();

        expect(cartView.$el.html()).toMatchSnapshot();
    });

    it('should call add to cart', function() {
        const spy = jest.fn();
        const cartView = new CartView({collection: list, handleRemoveFromCart: spy}).render();

        cartView.$el.find('.btn-remove[data-id=1]').click();

        expect(spy).toBeCalledWith('1');
    });
});

import Backbone from "backbone";
import AppView from "../src/app";
import sinon from "sinon";

describe('views:AppView', function() {
    it('should render a list', function() {
        const appView = new AppView().render();

        expect(appView.$el.html()).toMatchSnapshot();
    });

    it('should add a song into cart', function() {
        const appView = new AppView().render();

        appView.searchCollection.add({trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'});
        appView.searchCollection.add({trackId: '2', trackName: 'Perfect', artistName: 'Ed Sheeran'});

        appView._addToCart('1');

        expect(appView.cartCollection.length).toEqual(1);
    });

    it('should remove a song into cart', function() {
        const appView = new AppView().render();

        appView.searchCollection.add({trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'});
        appView.cartCollection.add({trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'});

        appView._removeFromCart('1');

        expect(appView.cartCollection.length).toEqual(0);
    });
});

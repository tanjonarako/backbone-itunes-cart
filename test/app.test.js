import Backbone from "backbone";
import AppView from "../src/app";

describe('views:AppView', function() {
    it('should render a list', function() {
        const appView = new AppView().render();

        expect(appView.$el.html()).toMatchSnapshot();
    });

    it('should add a song into cart', function() {
        const appView = new AppView().render();

        appView.searchCollection.add({trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'});
        appView.searchCollection.add({trackId: '2', trackName: 'Perfect', artistName: 'Ed Sheeran'});

        const firstSong = appView.searchCollection.get({trackId: '1'});

        appView._addToCart('1');

        expect(firstSong.attributes.disabled).toBe(true);
        expect(appView.cartCollection.length).toEqual(1);
    });

    it('should remove a song into cart', function() {
        const appView = new AppView().render();

        appView.searchCollection.add({trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'});
        appView.cartCollection.add({trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'});

        const firstSong = appView.searchCollection.get({trackId: '1'});

        appView._removeFromCart('1');

        expect(firstSong.attributes.disabled).toBe(false);
        expect(appView.cartCollection.length).toEqual(0);
    });
});

import Backbone from "backbone";
import SearchResultView from "../src/views/search_result";
import SearchResultCollection from "../src/models/songs";

describe('views:SearchResult', function() {
    const list = new SearchResultCollection([
        {trackId: '1', trackName: 'Shape of you', artistName: 'Ed Sheeran'},
        {trackId: '2', trackName: 'Perfect', artistName: 'Ed Sheeran'}
    ]);

    it('should render a list', function() {
        const listSongsView = new SearchResultView({collection: list}).render();

        expect(listSongsView.$el.html()).toMatchSnapshot();
    });

    it('should call add to cart', function() {
        const spy = jest.fn();
        const listSongsView = new SearchResultView({collection: list, handleAddToCart: spy}).render();

        listSongsView.$el.find('.btn-add[data-id=1]').click();

        expect(spy).toBeCalledWith('1');
    });
});

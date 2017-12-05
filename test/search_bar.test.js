import Backbone from "backbone";
import $ from "jquery";
import SearchBarView from "../src/views/search_bar";

describe('views:SearchBar', function() {
    it('call handleSubmit callback', function() {
        const spy = jest.fn();
        const searchBarView = new SearchBarView({handleSubmit: spy}).render();

        searchBarView.$el.find('input[type=search]').val('ed sheeran');
        searchBarView.$el.find('.search-form__button').click();

        expect(spy).toBeCalledWith('ed sheeran');
        expect(searchBarView.$el.html()).toMatchSnapshot();
    });
});

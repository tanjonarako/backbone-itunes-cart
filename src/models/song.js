import Backbone from "backbone";

export default Backbone.Model.extend({
    idAttribute : "trackId",

    defaults: {
        trackId        : '',
        artistName     : '',
        collectionName : '',
        trackName      : '',
        artworkUrl60   : '',
        disabled       : false
    }
});

import Backbone from "backbone";
import Song from "./song";

export default Backbone.Collection.extend({
    model: Song,
});

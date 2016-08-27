/**
 * Created by martinasprong on 20-06-16.
 */
import {View} from 'backbone';
import AgeRouter from '../routers/AgeRouter';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
const AgeLinks = View.extend({
    router: null,

    events: {
        'click a': 'clickHandler'
    },

    initialize: function ()
    {
        //Initialize the matches router to activate navigation
        this.router = new AgeRouter();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();

        //Get target to retrieve data properties
        let target = e.currentTarget;
        let url = 'ages/' + target.dataset['age'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default AgeLinks;

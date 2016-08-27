/**
 * Created by martinasprong on 27-08-16.
 */
import {View} from 'backbone';
import SexRouter from '../routers/SexRouter';
/**
 * Object representing the SexLinks element
 *
 * @constructor
 */
const SexLinks = View.extend({
    router: null,

    events: {
        'click a': 'clickHandler'
    },

    initialize: function ()
    {
        //Initialize the matches router to activate navigation
        this.router = new SexRouter();
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
        let url = 'sex/' + target.dataset['sex'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default SexLinks;

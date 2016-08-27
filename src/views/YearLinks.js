/**
 * Created by martinasprong on 27-08-16.
 */
import {View} from 'backbone';
import YearRouter from '../routers/YearRouter';

/**
 * Object representing the TeamLinks element
 *
 * @constructor
 */
const YearLinks = View.extend({
    router: null,

    events: {
        'click a': 'clickHandler'
    },

    initialize: function ()
    {
        //Initialize the matches router to activate navigation
        this.router = new YearRouter();
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
        let url = 'year/' + target.dataset['year'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default YearLinks;
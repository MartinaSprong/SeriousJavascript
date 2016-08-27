/**
 * Created by martinasprong on 27-08-16.
 */
import {Router} from 'backbone';

/**
 * Router for the matches URL's
 *
 * @constructor
 */
const YearRouter = Router.extend({
    routes: {
        'year/:year': 'yearAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     */
    yearAction: function (year)
    {
        console.log(year);

        App.events.trigger('newYear', {
            year : year
        });
    }
});

export default YearRouter;
/**
 * Created by martinasprong on 27-08-16.
 */
import {Router} from 'backbone';

/**
 * Router for the matches URL's
 *
 * @constructor
 */
const SexRouter = Router.extend({
    routes: {
        'sex/:sex': 'sexAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     */
    sexAction: function (sex)
    {
        console.log(sex);

        App.events.trigger('newSex', {
            sex : sex
        });
    }
});

export default SexRouter;

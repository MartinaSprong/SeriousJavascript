/**
 * Created by martinasprong on 20-06-16.
 */
import {Router} from 'backbone';

/**
 * Router for the age URL's
 *
 * @constructor
 */
const AgeRouter = Router.extend({
    routes: {
        'ages/:age': 'ageAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     */
    ageAction: function (age)
    {
        console.log(age);

        App.events.trigger('newAge', {
            age : age
        });
    }
});

export default AgeRouter;


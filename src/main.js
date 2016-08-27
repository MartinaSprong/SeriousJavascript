import _ from 'underscore';
import {Events} from 'backbone';
//collections
import Killings from './collections/Killings';

//views
import AgeLinks from './views/AgeLinks'
import AgeMatches from './views/AgeMatches';

import SexLinks from './views/SexLinks';
import SexMatches from './views/SexMatches'

import YearLinks from './views/YearLinks';
import YearMatches from './views/YearMatches';

(function ()
{
    let setGlobalVariables = function (){
        window.App = {};
        App.events = _.clone (Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();
        let killingsCollection = new Killings();

        new AgeLinks({el: "#age-links"});
        new AgeMatches({el: "#age-matches", collection: killingsCollection});

        new SexLinks({el: "#sex-links"});
        new SexMatches({el: "#sex-matches", collection: killingsCollection});

        new YearLinks({el: "#year-links"});
        new YearMatches({el: "#year-matches", collection: killingsCollection});

        Backbone.history.start({pushState: true, root: '/'});
    };

    window.addEventListener('load', init);

})();

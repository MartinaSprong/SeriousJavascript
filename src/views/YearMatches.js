/**
 * Created by martinasprong on 27-08-16.
 */
import {View} from 'backbone';
import _ from 'underscore';

const YearMatches = View.extend({
    templateMatches: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateMatches = _.template(this.$('#template-matches-year').html());
        this.templateError = _.template(this.$('#template-error-year').html());

        //Listen to global events for change of new club
        App.events.on('newYear', this.loadMatches, this);
    },

    /**
     * Wrapper function to load the years through the collection
     *
     * @param data
     */
    loadMatches: function (data)
    {
        this.collection.fetch({
            success: (collection) => this.loadMatchesSuccessHandler(collection),
            error: (collection, response) => this.loadMatchesErrorHandler(collection, response),
            data: {
                year: data.year
            }
        });
    },

    /**
     * Success Handler will add HTML of matches to this $el
     *
     * @param collection
     */
    loadMatchesSuccessHandler: function (collection)
    {
        this.$el.html(this.templateMatches({killings: collection.models}));
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadMatchesErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default YearMatches;
/**
 * Created by martinasprong on 25-08-16.
 */
import {View} from 'backbone';
import _ from 'underscore';

const AgeMatches = View.extend({
    templateMatches: '',
    templateError: '',

    initialize: function ()
    {
        //Set templates to use later on
        this.templateMatches = _.template(this.$('#template-matches').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new club
        App.events.on('newAge', this.loadMatches, this);
    },

    /**
     * Wrapper function to load the companies through the collection
     *
     * @param data
     */
    loadMatches: function (data)
    {
        this.collection.fetch({
            success: (collection) => this.loadMatchesSuccessHandler(collection),
            error: (collection, response) => this.loadMatchesErrorHandler(collection, response),
            data: {
                age: data.age
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

export default AgeMatches;

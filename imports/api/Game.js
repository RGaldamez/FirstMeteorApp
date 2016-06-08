export const Games = new Mongo.Collections('games')

let Schema = {};

Schema.game = new SimpleSchema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

Games.attachSchema(Schema.game);
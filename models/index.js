// import all models
const user = require('./user');
const sports = require('./sports');
const location = require('./location');
// const locationSport = require('./locationSport');
const scheduledEvents = require('./scheduledEvents');
const scheduledParticipants = require('./scheduledParticipants');



// create associations 
user.hasMany(scheduledEvents, {
    foreignKey: 'user_id'
});

scheduledEvents.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

location.hasMany(scheduledEvents, {
    foreignKey: 'location_id'
});

scheduledEvents.belongsTo(location, {
    foreignKey: 'location_id',
    onDelete: 'SET NULL'
});

sports.hasMany(scheduledEvents, {
    foreignKey: 'sports_id'
});

scheduledEvents.belongsTo(sports, {
    foreignKey: 'sports_id'
});

user.belongsToMany(scheduledEvents, {
    through: scheduledParticipants,
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

scheduledEvents.belongsToMany(user, {
    through: scheduledParticipants,
    foreignKey: 'scheduledEvents_id',
    onDelete: 'SET NULL'
});

user.hasMany(scheduledParticipants, {
    foreignKey: 'user_id'
});

scheduledParticipants.hasMany(user, {
    foreignKey: 'scheduledParticipants_id',
    onDelete: 'SET NULL'
});

scheduledEvents.hasMany(scheduledParticipants, {
    foreignKey: 'scheduledEvents_id',
    onDelete: 'SET NULL'
});

scheduledParticipants.hasMany(scheduledEvents, {
    foreignKey: 'scheduledParticipants_id',
    onDelete: 'SET NULL'
});


// sports.hasMany(locationSport, {
//     foreignKey: 'sports_id'
// });

// locationSport.hasMany(sports, {
//     foreignKey: 'locationSport_id'
// });

// location.hasMany(locationSport, {
//     foreignKey: 'location_id'
// });

// locationSport.hasMany(location, {
//     foreignKey: 'locationSport_id'
// });

// sports.belongsToMany(location, {
//     through: locationSport,
//     foreignKey: 'sports_id',
//     onDelete: 'SET NULL'
// });

// location.belongsTo(sports, {
//     through: locationSport,
//     foreignKey: 'location_id',
//     onDelete: 'SET NULL'
// })

module.exports = { user, sports, location, scheduledEvents, scheduledParticipants };
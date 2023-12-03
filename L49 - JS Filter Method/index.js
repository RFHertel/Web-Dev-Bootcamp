//Filterint User Name length:

//validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]

const validUserNames = usernames => usernames.filter(user => user.length < 10);

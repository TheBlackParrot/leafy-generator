// https://i.imgur.com/fURuphl.jpg

var first = [
	"cringiest",
	"most psychotic",
	"most erotic",
	"angriest",
	"most awkward",
	"most offensive",
	"creepiest",
	"most desperate",
	"maddest",
	"most savage",
	"funniest",
	"most racist",
	"most disgusting",
	"most hardcore",
	"saddest",
	"sexiest",
	"most miserable",
	"most insane",
	"absolute worst",
	"absolute best",
	"most terrifying",
	"nastiest",
	"most fabulous",
	"most dirty",
	"unhappiest",
	"scariest",
	"biggest",
	"most offended",
	"most motivational",
	"most sexually aggressive",
	"most sexually appealing",
	"most deprived",
	"merciless"
];

// real talk why is this list (initially) so female-related
var middle = [
	"kid",
	"anime girl",
	"youtuber",
	"man",
	"pedophile",
	"dad",
	"frozen animation",
	"minecraft animation",
	"vegan",
	"manchild",
	"feminist",
	"cyberbully",
	"pussy slayer",
	"emo man",
	"guy",
	"rapper",
	"girls",
	"woman",
	"gamer girl",
	"girl",
	"diss track",
	"video",
	"pimp",
	"music video",
	"enraged feminist",
	"kkk member",
	"boobs",
	"roast",
	"mixtape",
	"meme",
	"men",
	"meninist",
	"top 50 countdown",
	"vine kid",
	"vine god",
	"selfie stick",
	"furry",
	"brony",
	"almighty queen",
	"almighty king"
];

// decided to just 50/50 chance "ever" appearing at the end
// also decided to 33% chance "WANTS TO LITTERALLY KILL ME", "EXPOSES ME", "RAGES AT ME", or "ROASTS ME" appearing
var last = [
	"on planet earth",
	"to ever touch the internet",
	"on youtube",
	"to ever live",
	"ever to live on planet earth",
	"on the entire internet",
	"ever",
	"ever to be witnessed",
	"to ever live in the entire universe",
	"on the internet",
	"to ever live on the entire planet earth",
	"on this entire website",
	"to ever live in this world",
	"on all of youtube",
	"to ever live",
	"on youtube",
	"on planet earth",
	"to ever make a youtube video",
	"to be created on the internet",
	"to ever be created"
];

// i added some
var action = [
	"wants to literally kill me",
	"exposes me",
	"rages at me",
	"roasts me",
	"is spreading rumors about me",
	"is sending me death threats",
	"needs to end",
	"tries to be cute",
	"says they hate white people",
	"says they hate black people",
	"rages at youtube",
	"kills themself on camera",
	"has a mental breakdown on camera",
	"returns with fire",
	"throws shade",
	"will never shave their armpits",
	"is in love with me",
	"wants to have sex with me"
];

// a lot of the last array can be procedurally generated but it's 4:36 in the morning and im ti

function getRandom(max) {
	return Math.floor(Math.random() * (max+1));
}

function getClickbait() {
	var parts = [];
	parts.push(first[getRandom(first.length-1)]);
	parts.push(middle[getRandom(middle.length-1)]);

	var last_part = last[getRandom(last.length-1)];
	if(getRandom(1)) {
		last_part += " ever";
	}
	parts.push(last_part);

	if(!getRandom(3)) {
		var action_part = action[getRandom(action.length-1)];
		if(!getRandom(2)) {
			action_part = "literally " + action_part;
		}
		parts.push(action_part);
	}

	return "the " + parts.join(" ");
}

$("#generate").text(getClickbait());
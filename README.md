# wolf.js


## What is this?

wolf.js is an IRC bot written in the Node.js framework.


## What is Werewolf?

Werewolf is a variant of the party game [Mafia](http://en.wikipedia.org/wiki/Mafia_%28party_game%29).
In summary, the objective is to eliminate members of the opposing team. At
the start of the game, players are privately assigned roles as a wolf, or
villager (all unknown to others). At night, the wolves select one victim
to kill, and when the sun rises, villagers must persecute (lynch) one
person they beleive is the wolf with a majority vote. This is a game of
trust, and deception, as no one can be certain of the roles of everyone
else. The game continues until there are the same amount of wolves as
villagers (wolves win), or all the wolves are dead (villagers win).

## Setup and Configuration

wolf.js requires at least Node.js 0.8. Please refer to [http://nodejs.org](http://nodejs.org) for Node.js installation. After standard git checkout/clone, run the following command to automatically download and install all required dependencies.

```
npm install
```

Then start wolf.js with Node.js

```
node wolf.js
```

## License

wolf.js is distributed under the [MPL 2.0](http://www.mozilla.org/MPL/2.0/) license.
There is also an additional condition that this software may not be sold without
explicit permission of the original creator.

## Status

Not close to ready for prime time.


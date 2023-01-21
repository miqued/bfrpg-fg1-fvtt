# The Basic Fantasy Field Guide Volume 1 module for the Foundry Virtual Tabletop
This is an add-on module for FoundryVTT for use with the [Basic Fantasy RPG system](https://github.com/orffen/basicfantasyrpg) and the [Core Rules module](https://github.com/Stew-rt/basicfantasyrpg-corerules-en). Visit the Basic Fantasy RPG project's [website](https://basicfantasy.org/) for more info about the game system.

## Installation
This module may be installed from within FoundryVTT or can be manually installed using the latest-release manifest link:

https://github.com/miqued/bfrpg-fieldguide1-foundryvtt/releases/latest/download/module.json

## Details
This module's contents are based off of those of the [r29 (print) release](https://basicfantasy.org/downloads/Basic-Fantasy-Field-Guide-r29.pdf) of the [Basic Fantasy Field Guide Volume 1](https://basicfantasy.org/forums/viewtopic.php?t=130) with the following modifications and additions:
* Perceived spelling and grammar mistakes were corrected
* Creatures that have multiple variants were each given their own actor sheets for each variant and organized into folders corresponding with the Field Guide (i.e. the Brown Dragon has 5 actor sheets which are in a folder titled "Dragon, Brown" which is itself within a folder titled "Dragon", to provide consistent means of monster organization)
    - If the dependencies are not enabled, then the monsters will still be present with the correct names, but they will simply be in one big [searchable] list
* Creatures with multiple attack options had their attack routines clarified (e.g. some monsters can attack with a claw and a bite, and some can attack with a claw OR a bite)
* Mechanics for monsters were removed from the description and placed either with the attacks they accompany or in their own "special abilities" entry
* Monsters which can cast spells were given a pre-selected list of spells, so that they may be used without any GM preparation
* Minor mechanical corrections for monsters with mismatched values (e.g. HD/XP, saves, attack bonuses) either within their statblock or their descriptions
* Monster attacks were given a pawprint symbol for attacks natural to them (claws, tails, etc.) and a sword symbol for weapons

## Compatibility
I tested this version of the module with FoundryVTT version 10.290. It should be compatible with any V10 version of Foundry. It may work with V9, but, if not, there is a version which is confirmed for V9 available from the Basic Fantasy Workshop forums [HERE](https://basicfantasy.org/forums/viewtopic.php?f=19&t=4543&p=82532#p82532). Note that those modules are not maintained and were published there to get them "early". They also lack the script that makes the dependencies optional.

### Dependencies (Optional, allow for an organized compendium)
* [Compendium Folders](https://github.com/earlSt1/vtt-compendium-folders)
* [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)
## To-Do
* Update monsters to match the latest digital release of the BFRPG Field Guide, if applicable
* Map monsters to tokens which actually represent them, using artwork from the Field Guide, getting permission from their artists if necessary
* Create artwork for monsters which do not have any

## License
Being merely a reproduction of Basic Fantasy OGL-licensed content, this module as well is licensed using the Open Game License Version 1.0A (see LICENSE.txt)

### Other Copyright Notices
* Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc.
* System Reference Document Copyright 2000-2003, Wizards of the Coast, Inc.; Authors Jonathan Tweet, Monte Cook, Skip Williams, Rich Baker, Andy Collins, David Noonan, Rich Redman, Bruce R. Cordell, John D. Rateliff, Thomas Reid, James Wyatt, based on original material by E. Gary Gygax and Dave Arneson
* Castles & Crusades: Players Handbook, Copyright 2004, Troll Lord Games; Authors Davis Chenault and Mac Golden
* Castles & Crusades: Monsters Product Support, Copyright 2005, Troll Lord Games
* The Basic Fantasy Field Guide Copyright © 2010-2023 Chris Gonnerman and Contributors
* Basic Fantasy Role-Playing Game Copyright © 2006-2023 Chris Gonnerman
* Basic Fantasy RPG for FoundryVTT © 2022-2023 Steve Simenic

## Special Thanks
* [@mxzf](https://github.com/mxzf) for help with js woes

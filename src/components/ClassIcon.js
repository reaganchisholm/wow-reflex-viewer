import React from 'react';
import { capitalize } from './../utils';

// Class Icons
import DK_ICON from './../icons/class-icons/deathknight.png';
import DH_ICON from './../icons/class-icons/demonhunter.png';
import DRUID_ICON from './../icons/class-icons/druid.png';
import HUNTER_ICON from './../icons/class-icons/hunter.png';
import MAGE_ICON from './../icons/class-icons/mage.png';
import MONK_ICON from './../icons/class-icons/monk.png';
import PALADIN_ICON from './../icons/class-icons/paladin.png';
import PRIEST_ICON from './../icons/class-icons/priest.png';
import ROGUE_ICON from './../icons/class-icons/rogue.png';
import SHAMAN_ICON from './../icons/class-icons/shaman.png';
import WARLOCK_ICON from './../icons/class-icons/warlock.png';
import WARRIOR_ICON from './../icons/class-icons/warrior.png';

// Spec Icons
import DK_SPEC_ICON_BLOOD from './../icons/spec-icons/deathknight-blood.png';
import DK_SPEC_ICON_FROST from './../icons/spec-icons/deathknight-frost.png';
import DK_SPEC_ICON_UNHOLY from './../icons/spec-icons/deathknight-unholy.png';
import DH_SPEC_ICON_HAVOC from './../icons/spec-icons/demonhunter-havoc.png';
import DH_SPEC_ICON_VENGEANCE from './../icons/spec-icons/demonhunter-vengeance.png';
import DRUID_SPEC_ICON_FERAL from './../icons/spec-icons/druid-feral.png';
import DRUID_SPEC_ICON_GUARDIAN from './../icons/spec-icons/druid-guardian.png';
import DRUID_SPEC_ICON_RESTORATION from './../icons/spec-icons/druid-restoration.png';
import DRUID_SPEC_ICON_BALANCE from './../icons/spec-icons/druid-balance.png';
import HUNTER_SPEC_ICON_BEASTMASTER from './../icons/spec-icons/hunter-beastmaster.png';
import HUNTER_SPEC_ICON_MARKSMAN from './../icons/spec-icons/hunter-marksman.png';
import HUNTER_SPEC_ICON_SURVIVAL from './../icons/spec-icons/hunter-survival.png';
import MAGE_SPEC_ICON_ARCANE from './../icons/spec-icons/mage-arcane.png';
import MAGE_SPEC_ICON_FIRE from './../icons/spec-icons/mage-fire.png';
import MAGE_SPEC_ICON_FROST from './../icons/spec-icons/mage-frost.png';
import MONK_SPEC_ICON_BREWMASTER from './../icons/spec-icons/monk-brewmaster.png';
import MONK_SPEC_ICON_MISTWEAVER from './../icons/spec-icons/monk-mistweaver.png';
import MONK_SPEC_ICON_WINDWALKER from './../icons/spec-icons/monk-windwalker.png';
import PALADIN_SPEC_ICON_HOLY from './../icons/spec-icons/paladin-holy.png';
import PALADIN_SPEC_ICON_PROTECTION from './../icons/spec-icons/paladin-protection.png';
import PALADIN_SPEC_ICON_RETRIBUTION from './../icons/spec-icons/paladin-retribution.png';
import PRIEST_SPEC_ICON_DISC from './../icons/spec-icons/priest-disc.png';
import PRIEST_SPEC_ICON_HOLY from './../icons/spec-icons/priest-holy.png';
import PRIEST_SPEC_ICON_SHADOW from './../icons/spec-icons/priest-shadow.png';
import ROGUE_SPEC_ICON_ASSASSINATION from './../icons/spec-icons/rogue-assassination.png';
import ROGUE_SPEC_ICON_OUTLAW from './../icons/spec-icons/rogue-outlaw.png';
import ROGUE_SPEC_ICON_SUBTLETY from './../icons/spec-icons/rogue-subtlety.png';
import SHAMAN_SPEC_ICON_ELEMENTAL from './../icons/spec-icons/shaman-elemental.png';
import SHAMAN_SPEC_ICON_ENHANCEMENT from './../icons/spec-icons/shaman-enhancement.png';
import SHAMAN_SPEC_ICON_RESTO from './../icons/spec-icons/shaman-resto.png';
import WARLOCK_SPEC_ICON_AFFLICTION from './../icons/spec-icons/warlock-affliction.png';
import WARLOCK_SPEC_ICON_DEMONOLOGY from './../icons/spec-icons/warlock-demonology.png';
import WARLOCK_SPEC_ICON_DESTRUCTION from './../icons/spec-icons/warlock-destruction.png';
import WARRIOR_SPEC_ICON_ARMS from './../icons/spec-icons/warrior-arms.png';
import WARRIOR_SPEC_ICON_DEFENSE from './../icons/spec-icons/warrior-defense.png';
import WARRIOR_SPEC_ICON_FURY from './../icons/spec-icons/warrior-fury.png';

export const ClassIcon = ({ theClass, theSpec, className }) => {
    let classIcon = '';
    let specIcon = '';
    
    switch (theClass) {
        case 'deathknight':
            classIcon = DK_ICON;
            switch (theSpec) {
                case 'frost':
                    specIcon = DK_SPEC_ICON_FROST;
                    break;
                case 'blood':
                    specIcon = DK_SPEC_ICON_BLOOD;
                    break;
                case 'unholy':
                    specIcon = DK_SPEC_ICON_UNHOLY;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'demonhunter':
            classIcon = DH_ICON;
            switch (theSpec) {
                case 'havoc':
                    specIcon = DH_SPEC_ICON_HAVOC;
                    break;
                case 'vengeance':
                    specIcon = DH_SPEC_ICON_VENGEANCE;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'druid':
            classIcon = DRUID_ICON;
            switch (theSpec) {
                case 'feral':
                    specIcon = DRUID_SPEC_ICON_FERAL;
                    break;
                case 'guardian':
                    specIcon = DRUID_SPEC_ICON_GUARDIAN;
                    break;
                case 'restoration':
                    specIcon = DRUID_SPEC_ICON_RESTORATION;
                    break;
                case 'balance':
                    specIcon = DRUID_SPEC_ICON_BALANCE;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'hunter':
            classIcon = HUNTER_ICON;
            switch (theSpec) {
                case 'marksman':
                    specIcon = HUNTER_SPEC_ICON_MARKSMAN;
                    break;
                case 'beastmaster':
                    specIcon = HUNTER_SPEC_ICON_BEASTMASTER;
                    break;
                case 'survival':
                    specIcon = HUNTER_SPEC_ICON_SURVIVAL;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'mage':
            classIcon = MAGE_ICON;
            switch (theSpec) {
                case 'arcane':
                    specIcon = MAGE_SPEC_ICON_ARCANE;
                    break;
                case 'fire':
                    specIcon = MAGE_SPEC_ICON_FIRE;
                    break;
                case 'frost':
                    specIcon = MAGE_SPEC_ICON_FROST;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'monk':
            classIcon = MONK_ICON;
            switch (theSpec) {
                case 'brewmaster':
                    specIcon = MONK_SPEC_ICON_BREWMASTER;
                    break;
                case 'mistweaver':
                    specIcon = MONK_SPEC_ICON_MISTWEAVER;
                    break;
                case 'windwalker':
                    specIcon = MONK_SPEC_ICON_WINDWALKER;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'paladin':
            classIcon = PALADIN_ICON;
            switch (theSpec) {
                case 'holy':
                    specIcon = PALADIN_SPEC_ICON_HOLY;
                    break;
                case 'protection':
                    specIcon = PALADIN_SPEC_ICON_PROTECTION;
                    break;
                case 'retribution':
                    specIcon = PALADIN_SPEC_ICON_RETRIBUTION;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'priest':
            classIcon = PRIEST_ICON;
            switch (theSpec) {
                case 'discipline':
                    specIcon = PRIEST_SPEC_ICON_DISC;
                    break;
                case 'holy':
                    specIcon = PRIEST_SPEC_ICON_HOLY;
                    break;
                case 'shadow':
                    specIcon = PRIEST_SPEC_ICON_SHADOW;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'rogue':
            classIcon = ROGUE_ICON;
            switch (theSpec) {
                case 'assassination':
                    specIcon = ROGUE_SPEC_ICON_ASSASSINATION;
                    break;
                case 'outlaw':
                    specIcon = ROGUE_SPEC_ICON_OUTLAW;
                    break;
                case 'subtlety':
                    specIcon = ROGUE_SPEC_ICON_SUBTLETY;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'shaman':
            classIcon = SHAMAN_ICON;
            switch (theSpec) {
                case 'elemental':
                    specIcon = SHAMAN_SPEC_ICON_ELEMENTAL;
                    break;
                case 'enhancement':
                    specIcon = SHAMAN_SPEC_ICON_ENHANCEMENT;
                    break;
                case 'restoration':
                    specIcon = SHAMAN_SPEC_ICON_RESTO;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'warlock':
            classIcon = WARLOCK_ICON;
            switch (theSpec) {
                case 'affliction':
                    specIcon = WARLOCK_SPEC_ICON_AFFLICTION;
                    break;
                case 'demonology':
                    specIcon = WARLOCK_SPEC_ICON_DEMONOLOGY;
                    break;
                case 'destruction':
                    specIcon = WARLOCK_SPEC_ICON_DESTRUCTION;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        case 'warrior':
            classIcon = WARRIOR_ICON;
            switch (theSpec) {
                case 'arms':
                    specIcon = WARRIOR_SPEC_ICON_ARMS;
                    break;
                case 'defense':
                    specIcon = WARRIOR_SPEC_ICON_DEFENSE;
                    break;
                case 'fury':
                    specIcon = WARRIOR_SPEC_ICON_FURY;
                    break;
                default:
                    console.error(`${theClass} spec not found: ${theSpec}`);
                    break;
            }
            break;
        default:
            console.error(`Class not found: ${theClass}`);
            break;
    }
    
    return (
        <div className={`relative inline-block ${className}`} title={`${capitalize(theSpec)} ${capitalize(theClass)}`}>
            <div className={`relative rounded-full overflow-hidden w-20 h-20 border-4 border-gray-600`}>
                <img className="absolute top-0 left-0 w-full h-full object-center object-cover" src={classIcon} alt={theClass} />
            </div>
            <div className="absolute -bottom-1 -right-1">
                <div className={`relative block rounded-full overflow-hidden w-10 h-10 border-4 border-gray-600`}>
                    <img className="absolute top-0 left-0 w-full h-full transform scale-110 object-center object-cover" src={specIcon} alt={theSpec} />
                </div>
            </div>
        </div>
        );
    }
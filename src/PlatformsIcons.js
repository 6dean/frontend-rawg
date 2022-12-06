import React from "react";
import Amiga from "./logos/Amiga.png";
import Android from "./logos/Android.png";
import Arcade from "./logos/Arcade.png";
import AtariST from "./logos/Atari ST.png";
import Dreamcast from "./logos/Dreamcast.png";
import GameBoyColor from "./logos/Game Boy Color.png";
import GameBoy from "./logos/Game Boy.png";
import GameCube from "./logos/GameCube.png";
import Iphone from "./logos/iPhone.png";
import Linux from "./logos/Linux.png";
import Macintosh from "./logos/Macintosh.png";
import Nintendo64 from "./logos/Nintendo 64.png";
import NintendoDS from "./logos/Nintendo DS.png";
import NintendoSwitch from "./logos/Nintendo Switch.png";
import Computer from "./logos/PC.png";
import PlayStation2 from "./logos/PlayStation 2.png";
import PlayStation3 from "./logos/PlayStation 3.png";
import PlayStation4 from "./logos/PlayStation 4.png";
import PlayStation5 from "./logos/PlayStation 5.png";
import PlayStationPortable from "./logos/PlayStation Portable.png";
import PlayStation from "./logos/PlayStation.png";
import SuperNintendo from "./logos/Super Nintendo Entertainment System.png";
import WiiU from "./logos/Wii U.png";
import Wii from "./logos/Wii.png";
import Xbox360 from "./logos/Xbox 360.png";
import XboxOne from "./logos/Xbox One.png";
import XboxXS from "./logos/Xbox XS.png";
import Xbox from "./logos/Xbox.png";

const platforms = {
  Amiga: Amiga,
  Android: Android,
  Arcade: Arcade,
  AtariST: AtariST,
  Dreamcast: Dreamcast,
  GameBoyColor: GameBoyColor,
  GameBoy: GameBoy,
  GameCube: GameCube,
  Iphone: Iphone,
  Linux: Linux,
  Macintosh: Macintosh,
  Nintendo64: Nintendo64,
  NintendoDS: NintendoDS,
  NintendoSwitch: NintendoSwitch,
  Computer: Computer,
  PlayStation2: PlayStation2,
  PlayStation3: PlayStation3,
  PlayStation4: PlayStation4,
  PlayStation5: PlayStation5,
  PlayStation: PlayStation,
  PlayStationPortable: PlayStationPortable,
  SuperNintendo: SuperNintendo,
  WiiU: WiiU,
  Wii: Wii,
  Xbox360: Xbox360,
  XboxOne: XboxOne,
  XboxXS: XboxXS,
  Xbox: Xbox,
};

export default function Platform(props) {
  const PlatformLogo = platforms[props.platform];
  return <PlatformLogo width={20} height={20} />;
}

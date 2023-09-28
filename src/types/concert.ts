import ClassicMusicType from "./classicMusic";
import ConcertType from "./concertType";
import OpenAirType from "./openAir";
import PartyType from "./party";

type Concert = {
  concert : ConcertType,
  additionalInfo : OpenAirType | PartyType | ClassicMusicType,
}

export default Concert;
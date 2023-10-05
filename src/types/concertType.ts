type ConcertType = {
  id : number,
  performer : string,
  ticketCount : number,
  date : Date,
  place : string,
  concertType : 'CM' | 'OA' | 'P',
  name : string,
  description : string,
  image : File | string,
}

export default ConcertType;
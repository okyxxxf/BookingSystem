type ConcertType = {
  id : number,
  performer : string,
  ticketCount : number,
  date : Date,
  place : string,
  concertType : 'CM' | 'OA' | 'P',
}

export default ConcertType;
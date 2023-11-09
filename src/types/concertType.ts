type ConcertType = {
  id? : number,
  performer : string,
  tickets_count : number,
  date : Date | string,
  place : string,
  concert_type : 'CM' | 'OA' | 'P',
  name : string,
  description : string,
  image? : string,
  price : number,
}

export default ConcertType;
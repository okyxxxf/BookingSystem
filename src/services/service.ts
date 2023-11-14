interface service {
  url : string;
  getResourse?(id : number) : Promise<any>;
  createResourse?(body : any) : Promise<any>;
  changeResourse?(body : any) : Promise<any>;
  deleteResourse?(id : number) : Promise<any>;
}

export default service;
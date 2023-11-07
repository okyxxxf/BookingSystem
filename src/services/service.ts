interface service {
  url : string;
  getResourse : Function;
  createResourse? : Function;
  changeResourse? : Function;
  deleteResourse? : Function;
}

export default service;
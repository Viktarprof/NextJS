import { socials } from './data/socials'

export default function handler(req, res) {
  console.log(req.method); // оределили тип запроса - get
  if(req.method === 'GET'){ // если метод = get, то показать спсок соц сетей.
    res.status(200).json(socials)
  };
  
}



export const  storeData =(key,value)=> {
    let user = JSON.stringify(value);
   localStorage.setItem(key,user);
}

export const  getData =(key)=> {
    let user = localStorage.getItem(key);
  return  JSON.parse(user) ; 
 }
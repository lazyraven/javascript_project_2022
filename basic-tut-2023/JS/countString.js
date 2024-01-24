let a1=[];
  a1=a.split(" ");
  let obj=null;
  let results=[];
  for(let  i=0; i<a1.length; i++){
    if(obj==null){
      obj={
        name:a1[i],
        count:1
      }
      results.push(obj);
    }
    else{
      if(results.filter(res=>res.name==a1[i]).length>0){
    let res:any= results.find(res=>res.name==a1[i]);
    res.count=res.count+1;
      }
      else{
        obj={
          name:a1[i],
          count:1
        }
        results.push(obj);
      }
    }
  }
 
  console.log(results);
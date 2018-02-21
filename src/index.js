module.exports = function getZerosCount(number, base) {
  var mnoz = [];
  var i = 1;
  do{
    i=1;
    do{
      i++;
    }while(base%i!=0);
    base=base/i;
    mnoz.push(i);
  }while(base!=1);
  console.log(mnoz);
  var maxMn = [];
  var k = 0;
  maxMn.push(mnoz[0]);
  for(i=1;i<mnoz.length;i++){
    if(mnoz[i-1]==mnoz[i]){
      maxMn[k] = maxMn[k]*mnoz[i-1];
    }
    else{
      k++;
      maxMn[k]=mnoz[i];
    }
  }
  console.log(maxMn.sort(function(x,y){
    return y-x;
  }));
  var c = maxMn[0];
  var s = 0;
  do{
    s+=Math.floor(number/c);
    number=Math.floor(number/c);

  }while(number!=0)
  return s;
}
function drink(incomingValue) {
  if (incomingValue== 1){
    return "water";
  }

else if (incomingValue== 2){
  return "latte";
}

else{
  return "error";
}
}

console.log( drink(1) );

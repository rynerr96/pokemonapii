function upperCase (string){

  let stringOperator = string;
  let upperCaseFirst = stringOperator?.[0]?.toUpperCase();
  let subString = stringOperator?.slice(1);
  let upperCaseString = upperCaseFirst + subString

  return{
    upperCaseString
  }

}
export default upperCase
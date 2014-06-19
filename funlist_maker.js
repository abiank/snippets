// List of functions -- Define after functions are defined
//
// SocialCalc.Formula.FunctionList["function_name"] = [function_subroutine, number_of_arguments, arg_def, func_def, func_class]
//   function_subroutine takes arguments (fname, operand, foperand, sheet), returns
//      errortext or null, pushing result on operand stack.
//   number_of_arguments is:
//      0 = no arguments
//      >0 = exactly that many arguments
//      <0 = that many arguments (abs value) or more
//      100 = don't check
//
//   arg_def, if present, is the name of the element in SocialCalc.Formula.FunctionArgDefs.
//   func_def, if present, is a string explaining the function. If not, looked up in SocialCalc.Constants.
//   func_class, if present, is the comma-separated names of the elements in SocialCalc.Formula.FunctionClasses.
//
// To add a function, just add it to this object.

for (ea in formulajs) 
{	
str = 'SocialCalc.Formula.FunctionList["';	
	str = str + ea + '"] = [formulajs.'+ea+','+formulajs[ea].length+',"v", "", "math"];';
console.log(str)
}



bs="";
for (ea in formulajs) 
{	
str = 'SocialCalc.Formula.FunctionList["';	
	str = str + ea + '"] = [formulajs.'+ea+','+formulajs[ea].length+',"v", "", "math"];';
console.log(str)
bs=bs+str+"\n";
}


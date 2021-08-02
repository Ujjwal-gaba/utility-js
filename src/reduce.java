const reducef = (input,func,var) => {
    if(var == null && input.length == 0) return undefined;
    if(var != null) return input.reduce(func,var);
    return input.reduce(func);
} 

module.exports = reducef
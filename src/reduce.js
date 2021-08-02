const reducef = (input,func,variable) => {
    if(variable== null && input.length == 0) return undefined;
    if(variable!= null) return input.reduce(func,variable);
    return input.reduce(func);
} 

module.exports = reducef
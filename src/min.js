const min = (array) => {
    return array.reduce(minimum)
}
function minimum(a,b)
{
    return Math.min(a,b);
}
module.exports = min;
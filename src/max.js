const max = (array) => {
    return array.reduce(maximum)
}

function maximum(a,b)
{
    return Math.max(a,b);
}

module.exports = max;
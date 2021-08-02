const mapf=(array,given)=>{
    if(given=="cube")
    {
        return array.map(cube);
    }
    if(given=="identity")
    {
        return array;
    }
}

function cube(num)
{
    return num*num*num;
}

module.exports = mapf;
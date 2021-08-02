const head = (headinput) => {
    if(headinput == null || headinput.length == 0 ) {
        return null;
    }
    return headinput[0]
}

module.exports = head;
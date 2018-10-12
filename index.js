function Add(numbers){
    console.log(numbers)
    if(numbers === ""){
        return 0;
    }
    var splits = numbers.split(',');
    let tempSplits = [];
    for(let i = 0; i < splits.length; i++){
        tempSplits.push.apply(tempSplits, splits[i].split('\n'));
    }
    splits = tempSplits;
    let returner = 0;
    for(let i = 0; i < splits.length; i++){
        returner += parseInt(splits[i]);
    }
    return returner;
}


module.exports = Add;
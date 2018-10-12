function Add(numbers){
    if(numbers === ""){
        return 0;
    }
    var splits = numbers.split(',');
    let tempSplits = [];
    for(let i = 0; i < splits.length; i++){
        tempSplits.push.apply(tempSplits, splits[i].split('\n'));
    }
    splits = tempSplits;
    let negatives = "";
    let returner = 0;
    for(let i = 0; i < splits.length; i++){
        if(parseInt(splits[i]) < 0){
            negatives += (splits[i] + ",");
        }
        if(!(parseInt(splits[i]) >= 1000)){
            returner += parseInt(splits[i]);
        }
    }
    if(negatives !== ""){
        negatives = negatives.substring(0, negatives.length - 1);
        throw ("Negatives not allowed: " + negatives);
    }
    return returner;
}


module.exports = Add;
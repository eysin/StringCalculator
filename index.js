function Add(numbers){
    if(numbers === ""){
        return 0;
    }
    let negatives = "";
    let returner = 0;
    let splits = [];
    if(!numbers.match(/^\d/)){//Checks if the first letter in the string is a number or not
        let delimiter = numbers[0];
        numbers = numbers.substring(2);
        splits = numbers.split(delimiter);
    }
    else{
        splits = numbers.split(',');
        let tempSplits = [];
        for(let i = 0; i < splits.length; i++){
            tempSplits.push.apply(tempSplits, splits[i].split('\n'));
        }
        splits = tempSplits;
        
    }


    for(let i = 0; i < splits.length; i++){
        if(parseInt(splits[i]) < 0){
            negatives += (splits[i] + ",");
        }
        if(!(parseInt(splits[i]) >= 1000)){
            returner += parseInt(splits[i]);//I forgot to add this to it's own commit, this comment is to let git recognize it as changed
        }
    }
    if(negatives !== ""){
        negatives = negatives.substring(0, negatives.length - 1);
        throw ("Negatives not allowed: " + negatives);
    }
    return returner;
    
}


module.exports = Add;
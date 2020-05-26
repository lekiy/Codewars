


function getPINs(observed) {
    let arr = observed.split('');
    let values = arr.map(val => getOptions(parseInt(val)));
    let perms = 0;
    let totalPerms = 1;
    values.map(v => totalPerms *= v.length);
    let incrementors = values.map(v => 0);
    let combinations = [];

    while(perms < totalPerms){
    let comb = "";
        values.map((val, i) => {
            comb += val[incrementors[i]];
            
        });
        // console.log(`inc: ${incrementors} value: ${comb}`)
        combinations.push(comb);
        incrementors[0]++;
        for(let i = 0; i < incrementors.length-1; i++){
            if(incrementors[i] >= values[i].length){
                incrementors[i] = 0;
                incrementors[i+1]++;
            }
        }
        perms++;
    }
    
    return combinations;
}

function getOptions(value){
    let options = [];
    switch(value){
        case 1: options.push(1, 2, 4); break;
        case 2: options.push(1, 2, 3, 5); break;
        case 3: options.push(2, 3, 6); break;
        case 4: options.push(1, 4, 5, 7); break;
        case 5: options.push(2, 4, 5, 6, 8); break;
        case 6: options.push(3, 5, 6, 9); break;
        case 7: options.push(4, 7, 8); break;
        case 8: options.push(5, 7, 8, 9, 0); break;
        case 9: options.push(6, 8, 9); break;
        case 0: options.push(8, 0); break;
    }

    return options.map(val => val+"");
}


console.log(getPINs('11'));

var expectations = {
    "8": ["5", "7", "8", "9", "0"],
    "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
    "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
  };
  
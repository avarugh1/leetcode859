/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let diffInd = [];

    if(A.length !== B.length){
        return false;
    }

    // find how many indices have to be swapped
    for(let i = 0;i < A.length;i++){
        let aCh = A.charAt(i);
        let bCh = B.charAt(i);

        if(aCh !== bCh){
            diffInd.push(i);
        }
    }

    // if none need to be switched - 
    // we need to find atleast one set of char duplicates 
    // for them to be buddy strings
    if(diffInd.length === 0){
        let m = new Map();
        for(let i =0;i < A.length;i++){
            if(m.has(A.charAt(i))){
                let ctr = m.get(A.charAt(i));
                ctr++;
                if(ctr === 2) return true;
                m.set(A.charAt(i), ctr);
            }else{
                m.set(A.charAt(i), 1);
            }
        }
    } else if(diffInd.length === 2){ // perform the swap and compare
        let tmp = A.charAt(diffInd[0]);
        let tmpArr = A.split("");

        tmpArr[diffInd[0]] = A.charAt(diffInd[1]);
        tmpArr[diffInd[1]] = tmp;

        let newStr = tmpArr.join("");

        return (newStr === B);
    }

    // else return false as the number of indices to swap was not 0 or 2
    return false;
};

{
    console.log(buddyStrings("ab", "ba"));
}

{
    console.log(buddyStrings("ab", "ab"));
}

{
    console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));
}

{
    console.log(buddyStrings("abc", "abd"));
}
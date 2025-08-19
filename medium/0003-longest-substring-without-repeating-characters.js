/**
 * @param {string} s
 * @return {number}
 */


// sol 2 -> Using Sliding Window Approach.
/*
    Sliding window:
    1. Start with left and right at index 0;
    2. Move the right pointer to the right (+1);
    3. check if there's a repeating character ? 
        yes -> move the left pointer to the right until the repeating character is removed (stops at 1 character too!)
        no -> update the answer with the current length of the substring
    4. Repeat until the right pointer reaches the end of the string.
    5. return the updated answer
*/

var lengthOfLongestSubstring = function(s){
    let answer = 0;
    if(s.length === 0 || !s || s === '')return answer;

    // sliding window
    let left = 0;
    let right = 0;
    let longestStr = '';

    for(let i = 0; i<s.length; i++){
        right += 1;
        longestStr = s.substring(left, right);

        let j = left;
        while(j <= right){
            if(s.charAt(right) === s.charAt(j)){
                left += 1;
            }

            j++;
        }

        

        if(right == left) answer = 1;
        else answer = longestStr.length;
        

    }


    return answer;
}




// sol 1 -> DIDN'T WORK
/* 
    abcabcbb -> answer 3 -> 'abc'
    1. check if currentchar part of the longest str
            yes -> reset longest char and add the new currChar to longestStr;
            no -> add the new currChar to longestStr
    2. update the answer 

    ** THIS DOESN'T WORK, because it resets the char everytime, and doesn't track longest substring, when the current char is found again

    we will need to use a sliding window approach.
*/

var lengthOfLongestSubstring = function(s) {
    let answer = 1;
    let longestStr = '';

    if(s === '' || s.length === 0 || s === null) return 0;
    
    for(let i = 0; i<s.length; i++){
        let currChar = s.charAt(i);
        if(longestStr.length>0){
            for(let i = 0; i<longestStr.length;i++){
                if(longestStr.charAt(i) === currChar){
                    longestStr = '';
                    
                }
            }
        }
        longestStr += currChar;

        if(longestStr.length > answer) answer = longestStr.length;
    }


    return answer;
    
};
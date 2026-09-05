// 01. Contains Duplicate
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3]));




// 02. Move Zeroes
var moveZeroes = function(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);



// 03. Valid Anagram
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram("anagram", "nagaram"));
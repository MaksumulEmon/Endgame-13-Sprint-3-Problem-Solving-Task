// 01. Contains Duplicate
var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3]));


// 02. Move Zeroes
var moveZeroes = function (nums) {
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
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram("anagram", "nagaram"));



// 04.Ransom Note
var canConstruct = function (ransomNote, magazine) {
    let count = new Map();

    for (let char of magazine) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of ransomNote) {
        if (!count.get(char)) {
            return false;
        }

        count.set(char, count.get(char) - 1);
    }

    return true;
};
console.log(canConstruct("aa", "aab"));



// 05. Majority Element
var majorityElement = function (nums) {
    let count = {};

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;

        if (count[num] > nums.length / 2) {
            return num;
        }
    }
};

const nums1 = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums1));



// 06. 3Sum
var threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1, r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;

                while (l < r && nums[l] === nums[l - 1]) l++;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));



// 07. Subarray Sum Equals K
var subarraySum = function (nums, k) {
    let count = 0, sum = 0;
    let map = new Map([[0, 1]]);

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};

console.log(subarraySum([1, 1, 1], 2));



// 08. Top K Frequent Elements

var topKFrequent = function (nums, k) {
    const frequency = {};

    // Count frequency
    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Sort elements by frequency
    const sorted = Object.keys(frequency).sort(
        (a, b) => frequency[b] - frequency[a]
    );

    // Return top k elements
    return sorted.slice(0, k).map(Number);
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));





// 09. Longest Consecutive Sequence
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        // Start only if num is the beginning of a sequence
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
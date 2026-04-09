/*

Problem: Max Consecutive Ones
Approach: Single Pass (Optimal)

Idea:
- Count consecutive 1s
- Reset when 0 appears
- Track maximum

Time: O(n)
Space: O(1)
Solved On: 2026-04-09

Revision Plan:
Day1: 2026-04-10
Day3: 2026-04-12
Day7: 2026-04-16

*/

var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;

    for (let num of nums) {
        if (num === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
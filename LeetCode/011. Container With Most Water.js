Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

var maxArea = function(height) {
    // 2 pointer method;
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    let base, cur, curheight;
    
    while (left !== right){
        base = right - left;
        curheight = Math.min( height[left], height[right] );
        cur = curheight * base;
        if (cur > res) res = cur;
        height[left] > height[right] ? right = right - 1 : left = left + 1;
    }
    return res;
}

let a = [1, 2, 4, 3];
maxArea(a);

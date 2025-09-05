impl Solution {
    pub fn make_the_integer_zero(num1: i32, num2: i32) -> i32 {
        for k in 1..=60 {
            let val = num1 as i64 - k as i64 * num2 as i64;
            if val < k as i64 {
                break;
            }
            if val >= 0 && val.count_ones() as i32 <= k {
                return k;
            }
        }
        -1
    }
}
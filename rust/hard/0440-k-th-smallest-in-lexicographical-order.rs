impl Solution {
    pub fn find_kth_number(n: i32, k: i32) -> i32 {
        fn calc_steps(n: i64, curr: i64, next: i64) -> i64 {
            let mut steps = 0;
            let mut first = curr;
            let mut last = next;
            while first <= n {
                steps += (n + 1).min(last) - first;
                first *= 10;
                last *= 10;
            }
            steps
        }

        let n = n as i64;
        let mut curr = 1i64;
        let mut k = k as i64 - 1;
        while k > 0 {
            let steps = calc_steps(n, curr, curr + 1);
            if steps <= k {
                curr += 1;
                k -= steps;
            } else {
                curr *= 10;
                k -= 1;
            }
        }
        curr as i32
    }
}
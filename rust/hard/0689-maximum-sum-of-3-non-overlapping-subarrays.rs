impl Solution {
    pub fn max_sum_of_three_subarrays(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let n = nums.len();
        let k = k as usize;
        let mut sum = vec![0; n + 1];
        for i in 0..n {
            sum[i + 1] = sum[i] + nums[i];
        }

        let mut left = vec![0; n];
        let mut total = sum[k] - sum[0];
        left[k - 1] = 0;
        for i in k..n {
            if sum[i + 1] - sum[i + 1 - k] > total {
                left[i] = i + 1 - k;
                total = sum[i + 1] - sum[i + 1 - k];
            } else {
                left[i] = left[i - 1];
            }
        }

        let mut right = vec![0; n];
        right[n - k] = n - k;
        total = sum[n] - sum[n - k];
        for i in (0..=n - k - 1).rev() {
            if sum[i + k] - sum[i] >= total {
                right[i] = i;
                total = sum[i + k] - sum[i];
            } else {
                right[i] = right[i + 1];
            }
        }

        let mut res = vec![-1, -1, -1];
        for mid in k..n - k * 2 + 1 {
            let l = left[mid - 1];
            let r = right[mid + k];
            let total = (sum[l + k] - sum[l]) + (sum[mid + k] - sum[mid]) + (sum[r + k] - sum[r]);
            if res[0] == -1
                || total > (sum[res[0] as usize + k] - sum[res[0] as usize]
                    + sum[res[1] as usize + k] - sum[res[1] as usize]
                    + sum[res[2] as usize + k] - sum[res[2] as usize])
            {
                res[0] = l as i32;
                res[1] = mid as i32;
                res[2] = r as i32;
            }
        }
        res
    }
}
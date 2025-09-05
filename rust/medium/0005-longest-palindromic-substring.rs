impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let chars: Vec<char> = s.chars().collect();
        let len = chars.len();
        if len == 0 {
            return "".to_string();
        }
        let mut start = 0;
        let mut end = 0;

        for i in 0..len {
            let len1 = Self::expand_around_center(&chars, i, i);
            let len2 = Self::expand_around_center(&chars, i, i + 1);
            let max_len = len1.max(len2);
            if max_len > end - start {
                start = i - (max_len - 1) / 2;
                end = i + max_len / 2;
            }
        }
        chars[start..=end].iter().collect()
    }

    fn expand_around_center(chars: &Vec<char>, left: usize, right: usize) -> usize {
        let len = chars.len();
        let (mut l, mut r) = (left as i32, right as i32);
        while l >= 0 && r < len as i32 && chars[l as usize] == chars[r as usize] {
            l -= 1;
            r += 1;
        }
        (r - l - 1) as usize
    }
}
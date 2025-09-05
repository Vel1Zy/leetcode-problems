use std::collections::HashSet;
use std::cmp;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut char_set: HashSet<char> = HashSet::new();
        let mut left = 0;
        let mut max_len = 0;
        let chars: Vec<char> = s.chars().collect();
        for right in 0..chars.len() {
            while char_set.contains(&chars[right]) {
                char_set.remove(&chars[left]);
                left += 1;
            }
            char_set.insert(chars[right]);
            max_len = cmp::max(max_len, right - left + 1);
        }
        max_len as i32
    }
}
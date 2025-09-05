impl Solution {
    pub fn convert_to_base7(num: i32) -> String {
        if num == 0 {
            return "0".to_string();
        }
        let mut n = num.abs();
        let mut res = String::new();
        while n > 0 {
            res.insert(0, std::char::from_digit((n % 7) as u32, 10).unwrap());
            n /= 7;
        }
        if num < 0 {
            res.insert(0, '-');
        }
        res
    }
}
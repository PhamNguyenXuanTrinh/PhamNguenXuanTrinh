// phân tích đề bài
// Input: số n
// Output: tổng các số từ 1 đến n

var sum_to_n_a = function (n) {
    let sum = 0; // ban dầu cho tổng bằng 0.
    for (let i = 1; i <= n; i++) {
      // chạy vòng lập từ 1 đến <= n nỗi lần lập tăng thêm 1 đơn vị
      sum += i; // tổng sẽ bằng tổng cộng với phần tử thứ i
    }
    return sum;
  };
  console.log(sum_to_n_a(5));
  
  var sum_to_n_b = function (n) {
    // your code here
    if (n <= 1) {
      /// nếu n là 1 thì tổng sẽ bằng 1
      return n;
    }
    return n + sum_to_n_b(n - 1); /// n khác 1 thì sẽ cộng n với giá trị của n-1 cho đến khi n bằng 1 thì dừng lại
  };
  console.log(sum_to_n_b(5));
  
  var sum_to_n_c = function (n) {
    // your code here
    // dùng phương pháp toán học tính cấp số cộng với công thức Sn = n/2 * (2u1 + (n - 1)d)
  
    return (n / 2) * (2 * 1 + (n - 1) * 1);
  };
  console.log(sum_to_n_c(5));
  
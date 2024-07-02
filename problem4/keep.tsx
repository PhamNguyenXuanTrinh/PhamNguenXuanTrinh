function a(n: number): number {
    let sum = 0; // Ban đầu cho tổng bằng 0
    for (let i = 1; i <= n; i++) {
        // Chạy vòng lặp từ 1 đến n, mỗi lần lặp tăng thêm 1 đơn vị
        sum += i; // Tổng sẽ bằng tổng cộng với phần tử thứ i
    }
    return sum;
}

console.log(a(5)); 

function b(n: number): number {
    // Nếu n là 1 hoặc nhỏ hơn thì trả về n
    if (n <= 1) {
        return n;
    }
    // Nếu n lớn hơn 1, trả về n cộng với tổng của (n - 1) cho đến khi n bằng 1 thì dừng lại
    return n + b(n - 1);
}

console.log(b(5)); 

function c(n: number): number {
    // Dùng phương pháp toán học tính cấp số cộng với công thức Sn = n * (n + 1) / 2
    return n * (n + 1) / 2;
}

console.log(c(5)); 

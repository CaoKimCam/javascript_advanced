// IIFE?

// Từ kiến thức:
(123)// trả ra chính mảng đó
(()=>{})//trả ra chính arrow function đó

// Có biểu thức
(function() {
    console.log('Now');
})()

(()=>{
    console.log('Now');
})();

// 2. Dùng dấu ; trước IFFE

let fullName ='Song Dang'
;(function(){

})()
// Son đang is not a function: nếu để trước hàm không phải hàm

// 3. IIFE là "private"
// ở ngoài phạm vi không thể truy cập được tên hàm
// bên trọng thì truy cập được bình thường: dùng khi đệ quy

// 4. Khi nào sử dụng IIFE
// để tránh truy cập trùng tên biến global, tên hàm
// hoặc đơn giản muốn nó không bị ảnh hưởng bởi các biến bên ngoài
// khi sử dụng iife những gì ta viết ra là private

// đặc tả javascript
!function() {

}()//??


// before

const app={
    cars:[],
    add(car){
        this.cars.push(car)
    },
    edit(index, car){

    },
    delete(index){
        this.cars.splice(index, 1)
    }
}
// nếu ghi đè app.cars=null: code về sau bị lỗi
// ta có thể che giấu đi

const app1 = (function(){
    // private
    const cars = [];

    return {
    get(index){
        return cars[index]
    },
    add(car){
        this.cars.push(car)
    },
    edit(index, car){
        cars[index] = car
    },
    delete(index){
        this.cars.splice(index, 1)
    }
    }
})()
// không thể vô tình ghi đè: app.cars=null=> ứng dụng không hỏng
// dùng nhất là khi viết thư viết, nhất là khi muốn bảo đảm tính toàn vẹn dữ liệu

// bài tập
(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)
// Output: ?
//
/**
 * Hàm js() được thực thi ngay lập tức sau khi được khai báo và được gọi là IIFE. Lưu ý rằng tham số x của hàm js được truyền thực tế với giá trị 3.

Giá trị trả về của hàm là y(s())), nghĩa là gọi ba hàm khác là y(), s() và j() vì hàm s() trả về j().

j() trả về 3 ^ 3 = 27 để s() trả về27.

y(s()) có nghĩa là y(27) trả về 27 * 3 = 81.
 */
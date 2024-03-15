// Strich mode
"use strict";
fullName='Nguyen Van A'
function testFunct(){
    age =18;
}

console.log(fullName);
console.log(age);
// không có lỗi


//strict mode giải quyết những vấn đề này
// thêm "use strict" vào đầu file
// nó sẽ báo lỗi và ta sửa lỗi

const student =Object.freeze({
    fullName: 'Nguyen Van A'
})


student.fullName ='Nguyen Van B'//bật strict mode thì nó sẽ báo lỗi
// còn không thì không sửa được, nhưng không báoo lỗi

Object.defineProperty(student, 'fullName', {
    value: 'Nguyen Van C',
    writable: false,
});

// báo lỗi khi hàm có đối số trùng tên
function sum(a,a){
    return a+a;
}

// khai baos hàm trong code block sẽ thuộc phạm vi code block
{
    function sum(a,b){
        return a+b;
    }
}//bình thường ta có thể gán n=sum(a,b)

// không đặt tên bằng tên hàm,...

// Từ khóa "this"?

// Thuộc tính - Property
const iPhone7={
    name: 'iPhone 7',
    color: 'Pink',
    weight: 300,

    // Phương thức - Method
    takePhoto(){
        console.log('takePhoto')
    },
    objChild:{
        name: 'Child Object',
        methodChild(){
            console.log(this)
        }
    }
}

console.log(iPhone7.takePhoto());
// this đứng ngoài object sẽ trả ra đối tượng global (object window)

// this trong là 1 hàm undifined ở strict mode

iPhone7.prototype.take= function() {
function test(){
    console.log(this)
}
test()

}

// arrow functions không có this

// bind, call, apply có thể thay thế this thành các đối tượng khác
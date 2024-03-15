// Scope

var message ='Hoc ve Scope'//biến global

// Code block
{
    // code
}

{
    const age=18;
}

if(true){
    const age = 18;
}
// Code block: bên ngoài không thể truy cập
// Nhưng
{
    var age=18;
}//không còn là code block: bên ngoài có thể truy cập

// Phạm vi hàm
function logger(){
    var fullName="Son Dang"
}
// var fullName= thuộc phạm vi của hàm kia nên không thể truy cập
// lett, const khai báo trong phạm vi hàm cũng thuộc hàm (do nó trong code block {})
logger();

// Khi gọi mỗi hàm luôn có phạm vi mới được tạo ra
function logger(){}
logger();
logger();
// mỗi lần gọi tạo ra phạm vi mới

// Lí do cùng 1 hàm có thể cho nhiều đối số, do nó luôn tạo ra phạm vi mới

function makeCouter(){
    let couter=0
    function couter(){
        return ++couter
    }
    return couter;
}

const couter1 = makeCouter()

console.log(couter1())
console.log(couter1())
console.log(couter1())
// output: 1 2 3
// trường hợp này biến couter vẫn còn trong bộ nhớ
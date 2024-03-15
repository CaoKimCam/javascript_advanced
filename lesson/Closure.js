
// Closure: tính bao đóng
function createCounter(){
    let counter =0;

    function increase(){
        return ++counter;
    }
    return increase;
}

const counter1 = createCounter();

console.log(counter1());//1
console.log(counter1());//2
console.log(counter1());//3

// mỗi hàm khi được gọi tạo ra phạm vi riêng
// return increase: hàm counter1 chính là hàm increase
// do đó biến counter trở thành phạm vi global

// ứng dụng
// viết code ngắn hơn

function createLogger(namespace){
    function logger(message){
        console.log(`${namespace}: ${message}`);
    }
    return logger;
}

const logger1 = createLogger('Info');
logger1('Bắt đầu gửi email');
logger1('Gửi mail thành công cho username abc');

// để trả về nhiều hàm: trả về đối tượng
function createStorage(key){
    const store = JSON.parse(localStorage.get(key))??{}

    const save=()=>{
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage={
        get(key){
            return key;
        },
        set(key, value){
            save(key, value)=value
            save()
        },
        remove(key){
            delete store[key]
            save()
        }
    }
}

const storage1 = createStorage('cart');//có thể truy cập các hàm get, set,remove




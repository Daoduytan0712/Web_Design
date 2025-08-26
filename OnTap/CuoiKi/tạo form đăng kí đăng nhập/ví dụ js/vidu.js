function myFunction()   {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
//let x =3;
/* 
//Toán tử trong Js
var a = 12;
var b = '12';
document.write(a == b);
document.write(a === b); 
*/

/*
//vd vòng lặp for
var a = new Array("An","Bình","Châu")
for(var i=0;i < a.length;i++) {
    document.write(a[i] + "<br />");
}
var a = new Array("An","Bình","Châu")
for(var i in a) {
    document.write(a[i] + "<br />");
}
*/

/*vd quản lí lỗi
try{
    myFunction();
    alert("Hàm có tồn tại");
}
catch(e){
    alert("Có lỗi :" + e.message);
}
finally{
    alert("Chú ý cẩn thận");
}
*/
/*hàm kiểm tra một số chia hết cho 3
function chia_het_cho_3(number){
    if (number % 3 == 0){
        return true;
    }
    return false;
}
var chia_het_cho_3 = (number) => {
    if (number % 3 == 0){
        return true;
    }
    return false;
};
*/

/* kiem tra nam nhuan
function kiem_tra_nam_nhuan(nam) {
    if (nam % 100 == 0) {
        if (nam % 400 == 0) {
            alert(nam + ' là năm nhuận');
        } else {
            alert(nam + ' không phải năm nhuận');
        }
    } else {
        if (nam % 4 == 0) {
            alert(nam + ' là năm nhuận');
        } else {
            alert(nam + ' không phải năm nhuận');
        }
    }
}

kiem_tra_nam_nhuan(4);
*/

/*
//vd một số hàm xử lý chuỗi
var str = "Please locate where 'locate' occurs!";
              var pos1 = str.indexOf("locate"); //Kết quả 7
              //Két quả 21 - là vị trí locate cuối cùng
              var pos2 = str.lastIndexOf("locate");
              var pos3 = str.search("locate"); //Kết quả 7
              console.log("indexOf: " + pos1);
              console.log("lastIndexOf: " + pos2);
              console.log("search: " + pos3);

var st = "ABC abc";
var s = st.substr(1,2);
console.log(s);

var string = "Welcome to tinhoc123.edu.vn";
document.write("Chuỗi cần lấy là: " + string.slice(11, 27));

var string = "Welcome to tinhoc123.edu.vn";
document.write(" Chuỗi cần lấy là: " + string.slice(-16, 27));

var string = "Welcome " + "to" + " tinhoc123.edu.vn";
document.write(string + "<br/>");
//hoặc
var string = "Welcome ";
string = string.concat("to ", "tinhoc123.edu.vn");
document.write(string + "<br/>");

var st = "ABC-abc-XYZ-123";
var itemArray = new Array();
itemArray = st.split("-");
console.log(itemArray);

var st = "ABC abc";
var s = st.match("abc");
console.log(s);

var st = "ABC abc";
var s = st.replace("abc","xyz");
console.log(s);

var st = "ABC abc";
var s = st.toLowerCase();
console.log(s);

var st = "ABC abc";
var s = st.toUpperCase();
console.log(s);
*/

/*
//vd Number trong Javascript
var myNumber = 128;
console.log(myNumber.toString(16));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));

var myNumber = 2;
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
document.write("Giá trị của myNumber là : " + myNumber);

var x = 2/"tinhoc123.edu.vn";
var y = 10/"2"; 
//xuất gt x,y
document.write("<br> x="+x+" ;y="+y);

c1= isNaN("123.456");
c2 = isNaN(".123");
c3 = isNaN("123-456");
console.log(c1);
console.log(c2);
console.log(c3);
var x = 2/"s";
if(isNaN(x)){
    document.write(" <br>NaN");
}
*/

/*
//vd Các hàm xử lí Number..
x = 1;
y1 = eval("x*2 + 3");
y2 = eval("x>2");
y3 = eval("123.456");
console.log(y1);
console.log(y2);
console.log(y3);

var boolean_true = true;
console.log(Number(boolean_true));
var boolean_false = false;
console.log(Number(boolean_false));
var string_str = 'tinhoc123.edu.vn';
console.log(Number(string_str));
var string_num = '100';
console.log(Number(string_num));
var date = new Date();
console.log(Number(boolean_true));

var boolean_true = true;
console.log(parseInt(boolean_true));
var boolean_false = false;
console.log(parseInt(boolean_false));
var string_str = '10 tinhoc123.edu.vn';
console.log(parseInt(string_str));
var string_num = '100';
console.log(parseInt(string_num));
var date = new Date();
console.log(parseInt(boolean_true));

var boolean_true = true;
console.log(parseFloat(boolean_true));
var boolean_false = false;
console.log(parseFloat(boolean_false));
var string_str = '10 tinhoc123.edu.vn';
console.log(parseFloat(string_str));
var string_num = '100';
console.log(parseFloat(string_num));
var date = new Date();
console.log(parseFloat(boolean_true));
*/

/*
//Mảng trong Javascript
var t = new Array(1,2,3);
alert(t[0]);
alert(t[1]);
alert(t[2]);

var t = new Array(1,2,3);
document.write(t.join());
document.write(t.join('-'));
*/

/*
//Các hàm xử lí mảng
var a = [1,2,"ABC"];
var s = a.toString();
document.write(s);
*/

/*
//Mảng trong JavaSCript
var mang = ["Học", "lập", "trình", "tại", "tinhoc123.edu.vn"];
document.write(mang.valueOf()+"<br>");
// xóa và in 
mang.pop();
document.write(mang.valueOf());
// xóa phần tử đầu tiên và in
mang.shift();
document.write(mang.valueOf());
//thêm vào vị trí đầu tiên một phần tử
mang.unshift("<br>Chào mừng");
document.write(mang.valueOf());
mang.splice(1,2, 'PHP', 'căn bản ');
document.write(mang.valueOf());
//xóa phần tử "lập" và "trình"
mang.splice(1, 2);
document.write(mang.valueOf());
var mang = ["<br>Học", "lập", "trình", "tại", "tinhoc123.edu.vn"];
document.write(mang.valueOf()+"<br>");
//Lấy phần tử "tại" và "tinhoc123.edu.vn"
var mang_moi = mang.slice(3, 5);
//In ra thử
document.write(mang_moi.valueOf());
var a = [3,1,"X","A",true];
a.sort();
a.reverse();
console.log(a);

var mang1 = ["<br>Học", "lập", "trình"];
document.write(mang1.valueOf()+"<br>");
var mang2 = ["tại", "tinhoc123.edu.vn"];
document.write(mang2.valueOf()+"<br>");
//Nối mảng
var mang_moi = mang1.concat(mang2);
//In
document.write(mang_moi.valueOf());
*/

/*
//Date trong Javasript
let today = new Date();
document.write("Hôm nay: " + today + "<br>");
let birthday1 = new Date('December 17, 1995 03:24:00');  
let birthday2 = new Date('1995-12-17T03:24:00');        
let birthday3 = new Date(1995, 11, 17);                  
let birthday4 = new Date(1995, 11, 17, 3, 24, 0);        
document.write("Cách 1: " + birthday1 + "<br>");
document.write("Cách 2: " + birthday2 + "<br>");
document.write("Cách 3: " + birthday3 + "<br>");
document.write("Cách 4: " + birthday4 + "<br>");
var dateObj = new Date();
document.write(dateObj);
var dateObj2 = new Date(2023, 11, 4);
document.write(dateObj2);

var ISO_1 = new Date("2024-11-20");
var ISO_2 = new Date("2024-11");
var ISO_3 = new Date("2024");
console.log(ISO_1);
console.log(ISO_2);
console.log(ISO_3);

var LONG_1 = new Date("Mar 25 2023");
var LONG_2 = new Date("2023 Mar 25");
var LONG_3 = new Date("25 2023 Mar");
document.write("Long1="+LONG_1+"<br> Long2="+LONG_2+"<br>Long3="+LONG_3);

var SHORT_1 = new Date("03-25-2015");
var SHORT_2 = new Date("03/25/2015");
var SHORT_3 = new Date("2015/03/25");
var SHORT_4 = new Date("2015-03-25");
console.log(SHORT_1);
console.log(SHORT_2);
console.log(SHORT_3);
console.log(SHORT_4);

var d = new Date("Wed Mar 25 2015 09:56:24 GMT+0100 (W. Europe Standard Time)");
console.log(d);
*/

/*
//Các hàm xử lý ngày tháng trong Javasrcipt
//Đối tương hiện tại
var d = new Date();
d.setDate(20);
d.setFullYear(2011);
d.setHours(2);
d.setMilliseconds(2);
d.setMinutes(3);
d.setMonth(4);
d.setSeconds(5);
document.write(d);
*/

/*
function checkSomething(){
    return true;
}
var flag = checkSomething();
console.log(flag); //true
//vd2
function laSoChan(num){
    return (num % 2 == 0);
}
console.log(laSoChan(2)); // true
console.log(laSoChan(3)); // false
console.log(laSoChan(5)); // false
*/

/*
//sự kiện onload trong Javascript định nghĩa hàm đúng
var flag = do_validate();
function do_validate(){
    //code here
    var a = "text";
    document.write(a);
}
*/














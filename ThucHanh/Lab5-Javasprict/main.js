//code js
const imgs = document.querySelectorAll('.slide');
//img[0]-->img[1]--->img[2]--->img[3]==>classList.add/remove
let currentSlide = 0;
//index Là vị trí của hinh ảnh được hiển thị
function showSlide(vitri) {
    for (let i = 0; i < imgs.length; i++) {
        //ẩn toàn bộ hình ảnh
        imgs[i].classList.remove ('active'); //xóa class active của tất cả các hình ảnh
        //hiển thị hình ảnh tại vị trí muốn hiện thị
        if (i === vitri) {
            imgs[i].classList.add('active'); //thêm 
        }
    }
}
//ham chuyen anh ve phia sau
function prevSlide() {
    //đang có so luong anhh 3
    // ví dụ đang đứng ở vi tri dang dung ở ảnh thứ 0--->(0-1+3)%3=2 imgs[2]
    // (currentSlide-1+ số lượng hình ảnh)%so luong hinh anh;
    currentSlide = (currentSlide - 1 + imgs.length) % imgs.length; //tính toán vị trí của hình ảnh trước đó
    //sau khi lay duoc vị tri anh can hien thi là curentSlide--> show ảnh lên
    showSlide(currentSlide); //hiển thị hình ảnh tại vị trí hiện tại
}
//ham chuyen anh ve phia truoc
function nextSlide() {
    //đang có so luong anhh 3
    // ví dụ đang đứng ở vi tri dang dung ở ảnh thứ 0--->(0+1)%3=1 imgs[1]
    // (currentSlide+1)%so luong hinh anh;
    currentSlide = (currentSlide + 1 ) % imgs.length; //tính toán vị trí của hình ảnh tiếp theo
    //sau khi lay duoc vị tri anh can hien thi là curentSlide--> show ảnh lên
    showSlide(currentSlide); //hiển thị hình ảnh tại vị trí hiện tại
}
//mặc định hiển thị hình ảnh đầu tiên khi load lại trang web 
showSlide(currentSlide);
//tự động chuyển ảnh sau mỗi 3 giây
setInterval(nextSlide, 3000);
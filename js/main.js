// ===== DỮ LIỆU =====
var mangSo = [];
var mangSoThuc = [];

// ===== HÀM DÙNG CHUNG =====
function hienThiMang() {
  document.getElementById("hienThiMang").innerHTML = "[ " + mangSo.join(", ") + " ]";
}

function kiemTraMangRong(idKetQua) {
  if (mangSo.length === 0) {
    document.getElementById(idKetQua).innerHTML = "Mảng đang rỗng, hãy nhập số trước!";
    return true;
  }
  return false;
}

function laSoNguyenTo(n) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// ===== NHẬP MẢNG =====
document.getElementById("btnThemSo").onclick = function () {
  // Đầu vào
  var giaTri = document.getElementById("inputSo").value;
  var thongBao = document.getElementById("thongBaoNhap");

  // Xử lý
  if (giaTri === "" || !Number.isInteger(Number(giaTri))) {
    thongBao.innerHTML = "Vui lòng nhập một số nguyên hợp lệ!";
    return;
  }
  thongBao.innerHTML = "";
  mangSo.push(Number(giaTri));

  // Đầu ra
  hienThiMang();
  document.getElementById("inputSo").value = "";
  document.getElementById("inputSo").focus();
};

// Nhấn Enter để thêm số
document.getElementById("inputSo").onkeydown = function (e) {
  if (e.key === "Enter") document.getElementById("btnThemSo").click();
};

document.getElementById("btnXoaMang").onclick = function () {
  mangSo = [];
  hienThiMang();
};

// ===== BÀI 1: Tổng các số dương =====
document.getElementById("btnBai1").onclick = function () {
  if (kiemTraMangRong("ketQua1")) return;
  var tong = 0;
  for (var i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) tong += mangSo[i];
  }
  document.getElementById("ketQua1").innerHTML = "Tổng số dương: " + tong;
};

// ===== BÀI 2: Đếm số dương =====
document.getElementById("btnBai2").onclick = function () {
  if (kiemTraMangRong("ketQua2")) return;
  var dem = 0;
  for (var i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) dem++;
  }
  document.getElementById("ketQua2").innerHTML = "Số lượng số dương: " + dem;
};

// ===== BÀI 3: Số nhỏ nhất =====
document.getElementById("btnBai3").onclick = function () {
  if (kiemTraMangRong("ketQua3")) return;
  var min = mangSo[0];
  for (var i = 1; i < mangSo.length; i++) {
    if (mangSo[i] < min) min = mangSo[i];
  }
  document.getElementById("ketQua3").innerHTML = "Số nhỏ nhất: " + min;
};

// ===== BÀI 4: Số dương nhỏ nhất =====
document.getElementById("btnBai4").onclick = function () {
  if (kiemTraMangRong("ketQua4")) return;
  var minDuong = null;
  for (var i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0 && (minDuong === null || mangSo[i] < minDuong)) {
      minDuong = mangSo[i];
    }
  }
  document.getElementById("ketQua4").innerHTML =
    minDuong === null ? "Không có số dương trong mảng" : "Số dương nhỏ nhất: " + minDuong;
};

// ===== BÀI 5: Số chẵn cuối cùng =====
document.getElementById("btnBai5").onclick = function () {
  if (kiemTraMangRong("ketQua5")) return;
  var soChan = -1;
  for (var i = mangSo.length - 1; i >= 0; i--) {
    if (mangSo[i] % 2 === 0) {
      soChan = mangSo[i];
      break;
    }
  }
  document.getElementById("ketQua5").innerHTML = "Số chẵn cuối cùng: " + soChan;
};

// ===== BÀI 6: Đổi chỗ 2 giá trị =====
document.getElementById("btnBai6").onclick = function () {
  if (kiemTraMangRong("ketQua6")) return;
  var v1 = document.getElementById("viTri1").value;
  var v2 = document.getElementById("viTri2").value;
  var ketQua = document.getElementById("ketQua6");

  if (v1 === "" || v2 === "") {
    ketQua.innerHTML = "Vui lòng nhập đủ 2 vị trí!";
    return;
  }
  v1 = Number(v1);
  v2 = Number(v2);
  if (v1 < 0 || v2 < 0 || v1 >= mangSo.length || v2 >= mangSo.length) {
    ketQua.innerHTML = "Vị trí phải từ 0 đến " + (mangSo.length - 1);
    return;
  }

  var tam = mangSo[v1];
  mangSo[v1] = mangSo[v2];
  mangSo[v2] = tam;

  hienThiMang();
  ketQua.innerHTML = "Mảng sau khi đổi: [ " + mangSo.join(", ") + " ]";
};

// ===== BÀI 7: Sắp xếp tăng dần =====
document.getElementById("btnBai7").onclick = function () {
  if (kiemTraMangRong("ketQua7")) return;
  // Sắp xếp trên bản sao để không làm thay đổi mảng gốc
  var mangSapXep = mangSo.slice();
  for (var i = 0; i < mangSapXep.length - 1; i++) {
    for (var j = i + 1; j < mangSapXep.length; j++) {
      if (mangSapXep[i] > mangSapXep[j]) {
        var tam = mangSapXep[i];
        mangSapXep[i] = mangSapXep[j];
        mangSapXep[j] = tam;
      }
    }
  }
  document.getElementById("ketQua7").innerHTML = "Mảng tăng dần: [ " + mangSapXep.join(", ") + " ]";
};

// ===== BÀI 8: Số nguyên tố đầu tiên =====
document.getElementById("btnBai8").onclick = function () {
  if (kiemTraMangRong("ketQua8")) return;
  var soNT = -1;
  for (var i = 0; i < mangSo.length; i++) {
    if (laSoNguyenTo(mangSo[i])) {
      soNT = mangSo[i];
      break;
    }
  }
  document.getElementById("ketQua8").innerHTML = "Số nguyên tố đầu tiên: " + soNT;
};

// ===== BÀI 9: Đếm số nguyên trong mảng số thực =====
document.getElementById("btnThemSoThuc").onclick = function () {
  var giaTri = document.getElementById("inputSoThuc").value;
  if (giaTri === "") return;
  mangSoThuc.push(Number(giaTri));
  document.getElementById("hienThiMangThuc").innerHTML = "[ " + mangSoThuc.join(", ") + " ]";
  document.getElementById("inputSoThuc").value = "";
  document.getElementById("inputSoThuc").focus();
};

document.getElementById("btnBai9").onclick = function () {
  var ketQua = document.getElementById("ketQua9");
  if (mangSoThuc.length === 0) {
    ketQua.innerHTML = "Mảng số thực đang rỗng!";
    return;
  }
  var dem = 0;
  for (var i = 0; i < mangSoThuc.length; i++) {
    if (Number.isInteger(mangSoThuc[i])) dem++;
  }
  ketQua.innerHTML = "Có " + dem + " số nguyên trong mảng số thực";
};

// ===== BÀI 10: So sánh số dương và số âm =====
document.getElementById("btnBai10").onclick = function () {
  if (kiemTraMangRong("ketQua10")) return;
  var duong = 0;
  var am = 0;
  for (var i = 0; i < mangSo.length; i++) {
    if (mangSo[i] > 0) duong++;
    else if (mangSo[i] < 0) am++;
  }
  var ketLuan;
  if (duong > am) ketLuan = "Số dương nhiều hơn số âm";
  else if (duong < am) ketLuan = "Số âm nhiều hơn số dương";
  else ketLuan = "Số dương và số âm bằng nhau";
  document.getElementById("ketQua10").innerHTML =
    "Dương: " + duong + " · Âm: " + am + " → " + ketLuan;
};

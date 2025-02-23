// 팝업 열기 버튼
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// 팝업 열기
openPopupBtn.onclick = function() {
  popup.style.display = 'flex'; // 팝업을 보이게 함
};

// 팝업 닫기
closePopupBtn.onclick = function() {
  popup.style.display = 'none'; // 팝업을 숨김
};

// 팝업 외부 클릭 시 팝업 닫기
window.onclick = function(event) {
  // 팝업 외부(배경 부분) 클릭 시에만 팝업을 닫음
  if (popup && event.target === popup) {
    popup.style.display = 'none';
  }
};


// 메뉴 열고 닫기 함수 (필요 없으면 삭제 가능)
function toggleMenu() {
  // 네비게이션 메뉴 요소 가져오기
  var navbar = document.getElementById("navbar");


}


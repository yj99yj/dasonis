
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
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};

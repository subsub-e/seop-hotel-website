/*체크인 현재 날짜*/
document.getElementById('currnetDate').valueAsDate = new Date();
document.getElementById('currnetDate1').valueAsDate = new Date();

/*객실, 인원 수 카운트*/
$(function () {
  $('.countDown').click(function () {
    var n = $('.countDown').index(this);
    var num = $(".num:eq(" + n + ")").val();
    if (num <= 0) {
      return false;
    }
    num = $(".num:eq(" + n + ")").val(num * 1 - 1);
  });

  $('.countUp').click(function () {
    var n = $('.countUp').index(this);
    var num = $(".num:eq(" + n + ")").val();
    if (num > 4) {
      return false;
    }
    num = $(".num:eq(" + n + ")").val(num * 1 + 1);
  });
})

function inputMoveNumber(num) {
	if(isFinite(num.value) == false) {
		alert("카드번호는 숫자만 입력할 수 있습니다.");
		  num.value = "";
			return false;
	}
	max = num.getAttribute("maxlength");
	if(num.value.length >= max) {
		num.nextElementSibling.focus();
	}
}

function inputValidThru(period) {
  var replaceCard = period.value.replace(/\//g, "");
  if(replaceCard.length >= 4 && replaceCard.length < 5) {
    var inputMonth = replaceCard.substring(0, 2);
    var inputYear = replaceCard.substring(2, 4);
    var nowDate = new Date();
    var nowMonth = autoLeftPad(nowDate.getMonth() + 1, 2);
    var nowYear = autoLeftPad(nowDate.getFullYear().toString().substr(2, 2), 2);
    if(isFinite(inputMonth + inputYear) == false) {
      alert("문자는 입력하실 수 없습니다.");
      period.value = autoLeftPad((Number(nowMonth) + 1), 2) + "/" + nowYear;
      return false;
    }
    if(inputMonth > 12) {
      alert("12월보다 큰 월수는 입력하실 수 없습니다. ");
      period.value = "12/" + inputYear;
      return false;
    }
    if((inputYear + inputMonth) <= (nowYear + nowMonth)) {
      alert("유효기간이 만료된 카드는 사용하실 수 없습니다.");
      period.value = inputMonth + "/" + autoLeftPad((Number(nowYear) + 1), 2);
      return false;
    }
    period.value = inputMonth + "/" + inputYear;
   }
}

function autoLeftPad(num, digit) {
  if(String(num).length < digit) {
    num = new Array(digit - String(num).length + 1).join('0') + num;
  }
  return num;
}

let resultShow = $("#result");

function insertNumber(number) {
  let exNumber = resultShow.val();
  $("#result").val(exNumber + number);
}

function clearResult() {
  resultShow.val("");
}

function del() {
  let delNumber = resultShow.val();
  if (delNumber != "") {
    resultShow.val(delNumber.slice(0, -1));
  }
}

function calculate() {
  let results = eval(resultShow.val());
  resultShow.val(results);
}

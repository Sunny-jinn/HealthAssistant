var x;

const onClick = (bt) => {
  const onDelete = () => {
    clearInterval(x);
    document.getElementById("demo").innerText = "";
    document.querySelector("#deleteBtn").innerText = "";
    document.querySelector("#healthname").innerText = "";
  };
  const a = document.querySelector("#breaktime").innerText;
  var time = parseInt(bt.value);
  console.log(bt.name);
  console.log(time);
  var min = "";
  var sec = "";
  x = setInterval(function () {
    min = parseInt(time / 60);
    sec = time % 60;

    document.getElementById("demo").innerHTML = min + ":" + sec + "";
    time--;

    if (time < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "쉬는시간 끝!";
      alert("쉬는시간이 끝났습니다!");
    }
  }, 1000);
  const del_bt = document.querySelector("#deleteBtn");
  const healthname = document.querySelector("#healthname");
  healthname.innerHTML = bt.name + " 쉬는시간!";
  var ex = document.createElement("Button");
  ex.innerHTML = "타이머 지우기";
  ex.className = "btn btn-dark";
  ex.onclick = onDelete;
  del_bt.appendChild(ex);
};

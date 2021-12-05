var target;

function addressKindChange(e) {
  const shoulder = ["어깨1", "어깨2", "어깨3", "어깨4"];
  const leg = ["다리1", "다리2", "다리3"];
  const arm = ["팔1", "팔2", "팔3"];
  target = document.getElementById("way");

  if (e.value == "어깨") var d = shoulder;
  else if (e.value == "다리") var d = leg;
  else if (e.value == "팔") var d = arm;

  target.options.length = 0;

  for (x in d) {
    var opt = document.createElement("option");
    opt.value = d[x];
    opt.innerHTML = d[x];
    target.appendChild(opt);
  }
}

function ex1() {
  return target;
}

var target;

function addressKindChange(e) {
  const shoulder = [
    "아놀드 프레스",
    "래터럴 레이즈",
    "프론트 레이즈",
    "리버스 펙덱 플라이",
  ];
  const leg = ["레그프레스", "스쿼트", "런지", "레그 익스텐션", "레그컬"];
  const arm = [
    "덤벨 컬",
    "오버헤드프레스",
    "덤벨 킥백",
    "라잉 트라이셉스 익스텐션",
  ];
  const core = ["플랭크", "백 익스텐션", "크런치"];
  const breath = ["싸이클", "런닝머신"];
  const back = ["랫풀다운", "시티드로우", "바벨로우", "데드리프트", "풀업"];
  const chest = ["인클라인 벤치프레스", "벤치프레스", "딥스", "푸쉬업"];
  target = document.getElementById("way");

  if (e.value == "어깨") var d = shoulder;
  else if (e.value == "하체") var d = leg;
  else if (e.value == "이삼두") var d = arm;
  else if (e.value == "등") var d = back;
  else if (e.value == "유산소") var d = breath;
  else if (e.value == "코어") var d = core;
  else if (e.value == "가슴") var d = chest;

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

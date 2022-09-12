const startBtn = document.querySelector("#game_start_btn");
const mainScreen1 = document.querySelector(".main1");
const mainScreen2 = document.querySelector("#main2");
const subjectText = document.querySelector(".play_ready_subject_text");

const subjectList = [
  {
    subject: "과일",
    element:
      "망고, 앵두, 감, 키위, 귤, 살구, 매실, 블루베리, 복숭아, 자두, 석류, 코코넛",
  },
  {
    subject: "탈것",
    element:
      "자동차, 비행기, 기차, 배, 자전거, 킥보드, 전기자전거, 열기구, 인력거",
  },
  {
    subject: "학용품",
    element:
      "지우개, 연필, 벼루, 필통, 공책, 스테이플러, 테이프, 사인펜, 색연필, 크레파스, 가위, 칼, 샤프, 볼펜",
  },
  {
    subject: "여름에 자주 볼 수 있는 것",
    element:
      "선풍기, 부채, 에어컨, 물병, 얼음, 음료수, 아지랑이, 땀, 반팔, 반바지, 수건, 아이스티, 아이스크림",
  },
  {
    subject: "겨울에 자주 볼 수 있는 것",
    element:
      "코트, 니트, 목도리, 보온병, 손난로, 털장갑, 부츠, 난로, 두꺼운 이불, 눈사람, 눈썰매, 스키",
  },
  {
    subject: "옷",
    element:
      "반팔, 반바지, 긴팔, 긴바지, 점퍼, 비옷, 목폴라, 청바지, 면바지, 맨투맨",
  },
  {
    subject: "장신구",
    element: "목도리, 목걸이, 장갑, 반지, 귀걸이, 머리끈, 팔찌, 안경",
  },
];

const subjectListLength = subjectList.length;
const chosenNumber = Math.floor(Math.random() * subjectListLength);
subjectText.innerText = `'${subjectList[chosenNumber].subject}'`;

function personNumf() {
  const personNum = document.querySelector("#play_ready_num").value;
  mainScreen1.classList.add("hidden");
  mainScreen2.classList.toggle("hidden");
  mainScreen2.querySelector(
    ".main2_title span"
  ).innerText = `게임 참가자는 ${personNum} 명입니다.`;
}

function checkNum(event) {
  if (document.querySelector("#play_ready_num").value === "") {
    alert("참여할 사람 수를 입력해주세요.");
  } else if (document.querySelector("#play_ready_num").value > 31) {
    alert("참가 인원은 최대 30명까지 입니다.");
  } else if (document.querySelector("#play_ready_num").value < 3) {
    alert("참가 인원은 최소 3명 입니다.");
  } else {
    event.preventDefault();
    personNumf();
  }
}

function makeProblem() {}

function makeElementList(element) {}

startBtn.addEventListener("click", checkNum);

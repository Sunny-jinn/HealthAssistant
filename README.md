# [Health Assistant](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

Health Assistant is a Web based program for Daily exercisers.

* **시간 효율성:** 이 프로그램은 운동하는 사람에게 몇 세트가 남았는지 알려준다. 또한, 세트와 세트 사이에 유저가 설정한 쉬는 시간이 끝나면, 유저에게 쉬는 시간이 끝났음을 알리고, 다시 운동할 수 있게끔 해준다. 이를 통해 유저는 시간 효율적으로 운동할 수 있다.
* **운동 추천 기능:** 유저들의 키, 몸무게 정보를 저장하여 비슷한 체형의 유저의 운동 루틴을 추천해주거나 운동을 많이 해보지 못한 유저가 운동법을 추천받기를 원하면, 유튜브와 연동하여 운동법을 추천해 준다.

## Built with
- kakao api
- mysql DB
- 부트스트랩
- node js

## Prerequisites
```
npm install
npm intall express --save
```

## Installation
- Clone repo
  ////////////////////////

- MySQL 설치
  sudo yum localinstall https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
  sudo yum install mysql-community-server
   
   -서버 자동 시작 설정
    sudo systemctl enable mysqld
    sudo systemctl start mysqld
  
   -서버 실행 여부 확인
    sudo systemctl status mysqld

   - mysql root 초기 비밀번호 확인
    sudo grep 'A temporary password' /var/log/mysqld.log

   -mysql 접속
    mysql -u root -p

- DB 테이블 생성
   - user_info(name, height, weight)
   - userHealth(way, parts, setNum, number, breakTime, id)

- AWS 도메인 설정
   - SSL Certificate

## Usage

  1. 로그인-kakao
  2. 키와 몸무게를 입력
  3. 요일별 운동 루틴 저장
  4. 운동 방법에 대한 설명 (유튜브 링크)
  4. 설정한 쉬는 시간 끝났을 때 팝업 알림
  5. 루틴 추천 기능: 키와 몸무게가 비슷한 다른 유저들의 루틴 참고 가능

## Roadmap

- [X] DataStructures
- [x] Add back to top links
- [o] Exception Handling
- [x] Use Cookies 
- [x] Encryption

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch
5. Open a Pull Request

## License
-MySQL (https://www.mysql.com/)
-Kakao API (https://developers.kakao.com/docs/latest/ko/kakaologin/common)


## Contact
- 임준표 wnsvy1997@gmail.com


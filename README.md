# [RE-DRINK Mall]
RE-DRINK Mall는 여러 가지 종류의 음료를 소개하고, 사용자의 취향을 테스트하여 제품을 추천해주는 가상의 음료 브랜드 사이트입니다. 사용자는 20여종의 음료 목록을 확인하고, 간단한 퀴즈를 통해 기호에 맞는 음료를 확인할 수 있습니다.


## 주요 기능:
1. **메인 화면**
    - 브랜드 소개 문구와 함께 음료 제품 중 하나를 랜덤으로 가져와 이미지와 정보를 보여준다.
    - 상단 메뉴는 언제나 화면 상단에 위치하고, 스크롤 방향에 따라 감추거나 나타나게 할 수 있다.

2. **TOP3 제품 리스트**
    - 베스트 셀러 상품 3가지를 노출하고, 하단에 ‘전체보기’ 버튼을 통해 전체 제품 리스트로 이동할 수 있도록 하였다.
    - ‘전체보기’ 버튼에 호버 시 마우스 모양을 변경하여 클릭을 유도한다.

3. **제품 목록**
    - 전체 제품을 나열한다. 데어터는 Firebase Database에서 가져온다.
    - 기본적으로 랭킹 순 정렬을 보여주며, 필터 선택 시 음료 종류 혹은 당도 순으로 재정렬한다.
    - 각 제품의 이미지, 상세 정보를 보여준다.

4. **취향 테스트**
    - 간단한 퀴즈를 통해 사용자의 취향에 맞는 제품을 추천한다.
    - 퀴즈를 진행하며 사용자의 취향을 수치로 저장하고, 조건에 맞는 제품을 가져온다.
    - Three.js로 3D캔 모델이 변화하는 것을 보여주고, 진행도를 나타내는 상단 바를 추가하여 사용자가 지루함을 느끼지 않도록 하였다.


## Deploy on Vercel
https://drink-mall.vercel.app/

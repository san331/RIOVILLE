document.addEventListener('DOMContentLoaded', function() {
    const startpage = document.getElementById('startpage'); // 시작 화면
    const mainpage = document.getElementById('mainpage'); // 메인 화면
    const icons = document.getElementById('icon-container'); // 아이콘 컨테이너
    const info = document.getElementById('info'); // 정보창
    const paperclose = document.getElementById('paperclose'); // 닫기 버튼
    const lobbyNav = document.querySelector('.lobby-nav'); // 로비 네비게이션 (Touch Here to Start 버튼)
    const frontcurtain = document.querySelector('.frontcurtain');
    const backcurtain = document.querySelector('.backcurtain');

    // 처음에는 startpage만 보이도록 다른 페이지 숨기기
    mainpage.classList.add('hidden');
    icons.classList.add('hidden');
    info.classList.add('hidden');

    // lobby-nav를 클릭하면 startpage가 사라지고 mainpage가 등장
    lobbyNav.addEventListener('click', function() {
        console.log('이거 아닌데');
        // startpage를 숨기기
        startpage.classList.add('hidden');

        setTimeout(() => {
            frontcurtain.classList.add('hidden');
            backcurtain.classList.add('hidden');
        }, 300);

        // 1000ms 후에 mainpage 등장
        setTimeout(() => {
            mainpage.classList.remove('hidden');
        }, 1000);

        // 1500ms 후에 icon-container 등장
        setTimeout(() => {
            icons.classList.remove('hidden');
        }, 1500);

        // 1800ms 후에 info 등장
        setTimeout(() => {
            info.classList.add('open');
        }, 1800);
    });

    // 닫기 버튼을 눌렀을 때 info 창이 닫히는 동작
    paperclose.addEventListener('click', function() {
        console.log('Close button clicked');
        info.classList.remove('open'); // info 창 닫기
    });

    const backtoInfo = document.getElementById('info-reactive');
    if (!info.classList.contains('open')) {
        console.log('activate button');
        backtoInfo.addEventListener('click', function() {
            info.classList.add('open');
        });
    }
});



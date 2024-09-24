document.addEventListener('DOMContentLoaded', function() {
    const mfpaper=document.getElementById('mf-paper');
    const mf = document.getElementById('music-forest');
    const mfclose=document.getElementById('mfclose');
    
    const cpaper=document.getElementById('c-paper');
    const c = document.getElementById('camp');
    const cclose = document.getElementById('cclose');
    
    const taropaper=document.getElementById('t-paper');
    const taro = document.getElementById('taro');
    const taroclose = document.getElementById('tclose');

    const hpaper=document.getElementById('h-paper');
    const h = document.getElementById('hyurim');
    const hclose = document.getElementById('hclose');

    const t1 = document.getElementById('treasure1');
    const t2 = document.getElementById('treasure2');
    const t3 = document.getElementById('treasure3');
    const t4 = document.getElementById('treasure4');
    const treasurepaper = document.getElementById('treasure-paper');
    const treasureclose = document.getElementById('treasure-close');
    const now = new Date();
    const targetDate = new Date('2024-09-25T21:00:00');

    const treasures = [t1, t2, t3, t4];

    treasures.forEach(treasure => {
        treasure.addEventListener('click', () => {
            if (now >= targetDate) {
                console.log('히');
                treasurepaper.classList.remove('hidden');
            } else {
                alert('9시 이후에 공개되리오!')
            };
        });
    });

    treasureclose.addEventListener('click', function() {
        treasurepaper.classList.add('hidden');
    });

    mf.addEventListener('click', function() {
        mfpaper.classList.remove('hidden');
    });
    mfclose.addEventListener('click', function() {
        console.log('Close button clicked');
        mfpaper.classList.add('hidden'); // 뮤직포레스트 창 닫기
    });

    c.addEventListener('click', function() {
        cpaper.classList.remove('hidden');
    });
    cclose.addEventListener('click', function() {
        console.log('Close button clicked');
        cpaper.classList.add('hidden');
    });

    taro.addEventListener('click', function() {
        taropaper.classList.remove('hidden');
    });
    taroclose.addEventListener('click', function() {
        console.log('taroClose button clicked');
        taropaper.classList.add('hidden');
    });

    h.addEventListener('click', function() {
        hpaper.classList.remove('hidden');
    });
    hclose.addEventListener('click', function() {
        console.log('Close button clicked');
        hpaper.classList.add('hidden');
    });
});
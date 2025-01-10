// トルスカ語→ソラン語変換器スクリプト

function transformWord(word) {
    // 規則①: 各変換パターン
    const patterns = [
        { pattern: /aģh/g, replacement: 'ĬĀ' },
        { pattern: /agh/g, replacement: 'Ā' },
        { pattern: /iģh/g, replacement: 'Ī' },
        { pattern: /ïgh/g, replacement: 'Ȳ' },
        { pattern: /ugh/g, replacement: 'Ū' },
        { pattern: /üģh/g, replacement: 'ĬŪ' },
        { pattern: /eģh/g, replacement: 'ĬĒ' },
        { pattern: /ëgh/g, replacement: 'Ē' },
        { pattern: /ogh/g, replacement: 'Ō' },
        { pattern: /öģh/g, replacement: 'ĬŌ' },
        { pattern: /a(?=.*[eiöü])/g, replacement: 'E' },
        { pattern: /a/g, replacement: 'A' },
        { pattern: /i/g, replacement: 'E' },
        { pattern: /ï/g, replacement: 'A' },
        { pattern: /u/g, replacement: 'O' },
        { pattern: /ü/g, replacement: 'O' },
        { pattern: /e/g, replacement: 'I' },
        { pattern: /ë/g, replacement: 'Y' },
        { pattern: /o/g, replacement: 'U' },
        { pattern: /ö/g, replacement: 'U' },
        { pattern: /schr/g, replacement: 'CH8' },
        { pattern: /spr/g, replacement: 'P8' },
        { pattern: /str/g, replacement: 'T8' },
        { pattern: /scl/g, replacement: 'C8' },
        { pattern: /shr/g, replacement: 'SHŬ' },
        { pattern: /chr/g, replacement: 'JŬ' },
        { pattern: /sch/g, replacement: 'CH' },
        { pattern: /çhļ/g, replacement: 'KHŬ' },
        { pattern: /sçļ/g, replacement: 'K8' },
        { pattern: /skr/g, replacement: 'K8' },
        { pattern: /ng/g, replacement: 'NG' },
        { pattern: /fr/g, replacement: 'PHŬ' },
        { pattern: /pr/g, replacement: 'BŬ' },
        { pattern: /br/g, replacement: 'RŬ' },
        { pattern: /sp/g, replacement: 'P' },
        { pattern: /sl/g, replacement: 'THŬ' },
        { pattern: /tr/g, replacement: 'DŬ' },
        { pattern: /dr/g, replacement: 'ZŬ' },
        { pattern: /zl/g, replacement: 'C8' },
        { pattern: /cl/g, replacement: 'SŬ' },
        { pattern: /st/g, replacement: 'T' },
        { pattern: /sh/g, replacement: '7' },
        { pattern: /ch/g, replacement: 'J' },
        { pattern: /çh/g, replacement: 'KH' },
        { pattern: /çļ/g, replacement: 'GŬ' },
        { pattern: /ģļ/g, replacement: 'GHŬ' },
        { pattern: /sç/g, replacement: 'K' },
        { pattern: /xr/g, replacement: 'KHŬ' },
        { pattern: /kr/g, replacement: 'GŬ' },
        { pattern: /gr/g, replacement: 'GHŬ' },
        { pattern: /sk/g, replacement: 'K' },
        { pattern: /m/g, replacement: 'N' },
        { pattern: /f/g, replacement: 'PH' },
        { pattern: /p/g, replacement: 'B' },
        { pattern: /b/g, replacement: 'V' },
        { pattern: /v/g, replacement: 'F' },
        { pattern: /n/g, replacement: '7' },
        { pattern: /s/g, replacement: 'TH' },
        { pattern: /t/g, replacement: 'D' },
        { pattern: /d/g, replacement: 'Z' },
        { pattern: /z/g, replacement: 'C' },
        { pattern: /c/g, replacement: 'S' },
        { pattern: /r/g, replacement: 'W' },
        { pattern: /l/g, replacement: '7' },
        { pattern: /j/g, replacement: 'SH' },
        { pattern: /ņ/g, replacement: 'N' },
        { pattern: /ç/g, replacement: 'G' },
        { pattern: /ģ/g, replacement: 'GH' },
        { pattern: /y/g, replacement: 'X' },
        { pattern: /ļ/g, replacement: '7' },
        { pattern: /x/g, replacement: 'KH' },
        { pattern: /k/g, replacement: 'G' },
        { pattern: /g/g, replacement: 'GH' },
        { pattern: /w/g, replacement: 'M' },
        { pattern: /'/g, replacement: 'R' }
    ];

    // 規則②: 母音間の子音削除
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'ā', 'ī', 'ȳ', 'ū', 'ē', 'ō', 'ĭā', 'ĭū', 'ĭē', 'ĭō'];
    const vowelPattern = new RegExp(`(${vowels.join('|')})[^${vowels.join('')}]+(${vowels.join('|')})`, 'g');
    word = word.replace(vowelPattern, (match, p1, p2) => `${p1}${p2}`);

    // 規則③: 語尾変換
    const endings = [
        { pattern: /'$/, replacement: '' },
        { pattern: /bŭ$/, replacement: '' },
        { pattern: /c’$/, replacement: '' },
        { pattern: /ch’$/, replacement: '' },
        { pattern: /dŭ$/, replacement: '' },
        { pattern: /gŭ$/, replacement: '' },
        { pattern: /jŭ$/, replacement: '' },
        { pattern: /k’$/, replacement: '' },
        { pattern: /khŭ$/, replacement: '' },
        { pattern: /p’$/, replacement: '' },
        { pattern: /phŭ$/, replacement: '' },
        { pattern: /rŭ$/, replacement: '' },
        { pattern: /shŭ$/, replacement: '' },
        { pattern: /sŭ$/, replacement: '' },
        { pattern: /t’$/, replacement: '' },
        { pattern: /thŭ$/, replacement: '' },
        { pattern: /zŭ$/, replacement: '' },
        { pattern: /b$/, replacement: '' },
        { pattern: /c$/, replacement: '' },
        { pattern: /ch$/, replacement: '' },
        { pattern: /d$/, replacement: '' },
        { pattern: /g$/, replacement: '' },
        { pattern: /j$/, replacement: '' },
        { pattern: /k$/, replacement: '' },
        { pattern: /p$/, replacement: '' },
        { pattern: /ph$/, replacement: '' },
        { pattern: /s$/, replacement: 'l' },
        { pattern: /sh$/, replacement: 'l' },
        { pattern: /t$/, replacement: '' },
        { pattern: /th$/, replacement: '' },
        { pattern: /z$/, replacement: 'l' },
        { pattern: /zŭ$/, replacement: 'l' },
        { pattern: /ng$/, replacement: 'ng' }
    ];

    patterns.forEach(({ pattern, replacement }) => {
        word = word.replace(pattern, replacement);
    });

    endings.forEach(({ pattern, replacement }) => {
        word = word.replace(pattern, replacement);
    });

    // 最後の変換
    word = word.replace(/Ng/g, 'ng');

    // 大文字を小文字に戻す
    word = word.toLowerCase();

    return word;
}

// HTML要素との連携
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input');
    const outputField = document.getElementById('output');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', () => {
        const inputText = inputField.value;
        const outputText = transformWord(inputText);
        outputField.textContent = outputText;
    });
});

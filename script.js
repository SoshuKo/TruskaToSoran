// トルスカ語→ソラン語変換器スクリプト
function applyToneChange(vowel, toneChange) {
    const toneMap = {
        'ĭā': ['ĭâ', 'ĭà'],
        'ā': ['â', 'à'],
        'ī': ['î', 'ì'],
        'ȳ': ['ŷ', 'ỳ'],
        'ū': ['û', 'ù'],
        'ĭū': ['ĭû', 'ĭù'],
        'ĭē': ['ĭê', 'ĭè'],
        'ē': ['ê', 'è'],
        'ō': ['ô', 'ò'],
        'ĭō': ['ĭô', 'ĭò'],
        'a': ['á', 'ã'],
        'e': ['é', 'ẽ'],
        'i': ['í', 'ĩ'],
        'o': ['ó', 'õ'],
        'u': ['ú', 'ũ'],
        'y': ['ý', 'ỹ'],
        'üa': ['üá', 'üã'],
        'üā': ['üâ', 'üà'],
        'üē': ['üê', 'üè'],
        'üō': ['üô', 'üò']
    };

    if (toneChange > 0 && toneMap[vowel]) {
        return toneMap[vowel][toneChange - 1];
    }
    return vowel;
}

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

    patterns.forEach(({ pattern, replacement }) => {
        word = word.replace(pattern, replacement);
    });

    // 大文字を小文字に戻し、7と8を置換
    word = word.toLowerCase().replace(/7/g, "'").replace(/8/g, "’");
    
// 規則②: 母音間の子音削除
const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'ā', 'ī', 'ȳ', 'ū', 'ē', 'ō', 'ĭā', 'ĭū', 'ĭē', 'ĭō'];
const vowelPattern = new RegExp(`(${vowels.join('|')})[^${vowels.join('')}]+(${vowels.join('|')})`, 'g');

word = word.replace(vowelPattern, (match, p1, p2) => {
    const consonant = match.slice(p1.length, match.length - p2.length);
    let toneChange = 0;

    // 子音に基づく調音変更
    if (/ch’|khŭ|phŭ|thŭ/.test(consonant)) {
        toneChange = 1;
    } else if (/bŭ|c’|dŭ|gŭ|jŭ|k’|kh|p’|ph|t’|th/.test(consonant)) {
        toneChange = 1;
    } else if (/'|b|c|d|g|j|k|p|t/.test(consonant)) {
        toneChange = 1;
    }

    // 母音p1に音調変更を適用
    p1 = applyToneChange(p1, toneChange);

    // 変換されたp1とその後の母音p2を返す
    return `${p1}${p2}`;
});

    // 規則③: 語尾変換
const endingsWithToneChange = [
    { pattern: /'$/, replacement: '', toneChange: 1 },
    { pattern: /bŭ$/, replacement: '', toneChange: 2 },
    { pattern: /c’$/, replacement: '', toneChange: 1 },
    { pattern: /ch’$/, replacement: '', toneChange: 1 },
    { pattern: /dŭ$/, replacement: '', toneChange: 2 },
    { pattern: /gŭ$/, replacement: '', toneChange: 2 },
    { pattern: /jŭ$/, replacement: '', toneChange: 2 },
    { pattern: /k’$/, replacement: '', toneChange: 1 },
    { pattern: /khŭ$/, replacement: '', toneChange: 1 },
    { pattern: /p’$/, replacement: '', toneChange: 1 },
    { pattern: /phŭ$/, replacement: '', toneChange: 1 },
    { pattern: /t’$/, replacement: '', toneChange: 1 },
    { pattern: /thŭ$/, replacement: '', toneChange: 1 },
    { pattern: /b$/, replacement: '', toneChange: 2 },
    { pattern: /c$/, replacement: '', toneChange: 1 },
    { pattern: /d$/, replacement: '', toneChange: 2 },
    { pattern: /g$/, replacement: '', toneChange: 2 },
    { pattern: /j$/, replacement: '', toneChange: 2 },
    { pattern: /k$/, replacement: '', toneChange: 1 },
    { pattern: /p$/, replacement: '', toneChange: 1 },
    { pattern: /t$/, replacement: '', toneChange: 1 }
];

endingsWithToneChange.forEach(({ pattern, replacement, toneChange }) => {
    if (pattern.test(word)) {
        const vowel = word.match(vowels.join('|')).pop();
        const modifiedVowel = applyToneChange(vowel, toneChange);
        word = word.replace(vowel, modifiedVowel).replace(pattern, replacement);
    }
});

    // 最後の変換
    word = word.replace(/Ng/g, 'ng');

    return word;
}

    // 規則⑤: 特定の母音と子音の組み合わせの変換
    const vowelCombinations = [
        { pattern: /ŭū/g, replacement: 'ŭā' },
        { pattern: /ŭu/g, replacement: 'ŭa' },
        { pattern: /ŭĭā/g, replacement: 'üa' },
        { pattern: /ŭĭū/g, replacement: 'üā' },
        { pattern: /ŭĭē/g, replacement: 'üē' },
        { pattern: /ŭĭō/g, replacement: 'üō' },
        { pattern: /ūŭ/g, replacement: 'āŭ' },
        { pattern: /ĭūŭ/g, replacement: 'ĭāŭ' },
        { pattern: /uŭ/g, replacement: 'aŭ' }
    ];

    vowelCombinations.forEach(({ pattern, replacement }) => {
        word = word.replace(pattern, replacement);
    });

    return word;  // 関数の戻り値
}

// HTML要素との連携
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input');
    const outputField = document.getElementById('output');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', () => {
        const inputText = inputField.value;
        const outputText = transformWord(inputText);
        outputField.value = outputText;  // textContent → value に修正
    });
});

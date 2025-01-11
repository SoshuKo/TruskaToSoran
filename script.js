function transformWord(word) {
    // 改行やスペースで単語を分割して処理
    const splitWords = word.split(/(\s|\n)/);  // スペースまたは改行で分割
    
    let result = splitWords.map(segment => {
        // スペースや改行を除外した単語にのみ変換処理を適用
        if (segment.trim() !== '') {
            return applyTransformations(segment);  // 各単語に対する処理関数を呼び出し
        }
        return segment;  // スペースや改行はそのまま
    }).join('');  // 変換後の単語を再結合
    
    return result;
}

function applyTransformations(word) {
    // 既存の規則に基づく変換処理
    patterns.forEach(({ pattern, replacement }) => {
        word = word.replace(pattern, replacement);
    });
    // 追加の変換処理
    return word;
}

const vowels = ["ĭā", "ā", "ī", "ȳ", "ū", "ĭū", "ĭē", "ē", "ō", "ĭō", "a", "e", "i", "o", "u", "y", "üa", "üā", "üē", "üō"];

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
const consonants = [
    "ch’", "ghŭ", "khŭ", "phŭ", "shŭ", "thŭ", "bŭ", "ch", "c’", "dŭ", "gh", "gŭ", "jŭ", "k’", "kh", "ng", 
    "p’", "ph", "rŭ", "sh", "sŭ", "t’", "th", "zŭ", "b", "c", "d", "f", "g", "j", "k", "m", "n", "p", "r", 
    "s", "t", "v", "w", "x", "z", "'"
];

const vowelPattern = new RegExp(`(${vowels.join('|')})[^${vowels.join('')}]+(${vowels.join('|')})`, 'g');

word = word.replace(vowelPattern, (match, p1, p2) => {
    let consonant = match.slice(p1.length, match.length - p2.length);
    let toneChange = 0;
    let shouldApplyToneChange = true;

    // 特定の子音を削除しない場合でも音調変更しないようにする
    if (/ch’|khŭ|phŭ|thŭ/.test(consonant)) {
        toneChange = 1;
    } else if (/bŭ|dŭ|gŭ|jŭ/.test(consonant)) {
        toneChange = 2;
    } else if (/ghŭ|gh|ng|rŭ|sŭ|shŭ|zŭ/.test(consonant)) {
        toneChange = 0;
    } else if (/ch|c’|k’|p’|t’|kh|ph|th/.test(consonant)) {
        toneChange = 1;
    } else if (/'|b|c|d|g|j|k|p|t/.test(consonant)) {
        toneChange = /b|d|g|j/.test(consonant) ? 2 : 1;
    }

    const nonVowels = consonant.split('').filter(char => !vowels.includes(char));

// 二文字子音または三文字子音があるかどうかをチェックする
if (nonVowels.length === 3 && /chŭ|ghŭ|khŭ|phŭ|shŭ|thŭ/.test(nonVowels.join(''))) {
    consonant = nonVowels.join(''); // 三文字子音をそのまま残す
    shouldApplyToneChange = false; // 子音削除が行われない場合は音調変更しない
} else if (nonVowels.length === 2 && /bŭ|dŭ|gŭ|jŭ|rŭ|sŭ|zŭ|ch|gh|kh|ng|ph|sh|th/.test(nonVowels.join(''))) {
    consonant = nonVowels.join(''); // 二文字子音をそのまま残す
    shouldApplyToneChange = false; // 子音削除が行われない場合は音調変更しない
} else if (nonVowels.length > 1) {
    consonant = nonVowels[nonVowels.length - 1]; // 最後の子音のみ残す
}

    // 子音削除が行われた場合のみ音調変更を適用
    if (shouldApplyToneChange && nonVowels.length > 1) {
        p1 = applyToneChange(p1, toneChange);
    }

    return `${p1}${consonant}${p2}`;
});
    
// 規則③: 語尾変換
const endingsWithToneChange = [
    { pattern: /'$/, replacement: '', toneChange: 1 },  // ' → 子音なし (声調変化1)
    { pattern: /b$/, replacement: '', toneChange: 2 },  // b → 子音なし (声調変化2)
    { pattern: /bŭ$/, replacement: '', toneChange: 2 },  // bŭ → 子音なし (声調変化2)
    { pattern: /c$/, replacement: '', toneChange: 1 },  // c → 子音なし (声調変化1)
    { pattern: /c’$/, replacement: '', toneChange: 1 },  // c’ → 子音なし (声調変化1)
    { pattern: /ch$/, replacement: '', toneChange: 1 },  // ch → 子音なし (声調変化1)
    { pattern: /ch’$/, replacement: '', toneChange: 1 },  // ch’ → 子音なし (声調変化1)
    { pattern: /d$/, replacement: '', toneChange: 2 },  // d → 子音なし (声調変化2)
    { pattern: /dŭ$/, replacement: '', toneChange: 2 },  // dŭ → 子音なし (声調変化2)
    { pattern: /f$/, replacement: 'n', toneChange: 0 },  // f → n
    { pattern: /ng$/, replacement: 'NG', toneChange: 0 },  // ng → NG
    { pattern: /g$/, replacement: '', toneChange: 2 },  // g → 子音なし (声調変化2)
    { pattern: /gh$/, replacement: 'NG', toneChange: 0 },  // gh → NG
    { pattern: /ghŭ$/, replacement: 'NG', toneChange: 0 },  // ghŭ → NG
    { pattern: /gŭ$/, replacement: '', toneChange: 2 },  // gŭ → 子音なし (声調変化2)
    { pattern: /j$/, replacement: '', toneChange: 2 },  // j → 子音なし (声調変化2)
    { pattern: /jŭ$/, replacement: '', toneChange: 2 },  // jŭ → 子音なし (声調変化2)
    { pattern: /k$/, replacement: '', toneChange: 1 },  // k → 子音なし (声調変化1)
    { pattern: /k’$/, replacement: '', toneChange: 1 },  // k’ → 子音なし (声調変化1)
    { pattern: /kh$/, replacement: '', toneChange: 1 },  // kh → 子音なし (声調変化1)
    { pattern: /khŭ$/, replacement: '', toneChange: 1 },  // khŭ → 子音なし (声調変化1)
    { pattern: /m$/, replacement: 'n', toneChange: 0 },  // m → n
    { pattern: /n$/, replacement: 'n', toneChange: 0 },  // n → n
    { pattern: /p$/, replacement: '', toneChange: 1 },  // p → 子音なし (声調変化1)
    { pattern: /p’$/, replacement: '', toneChange: 1 },  // p’ → 子音なし (声調変化1)
    { pattern: /ph$/, replacement: '', toneChange: 1 },  // ph → 子音なし (声調変化1)
    { pattern: /phŭ$/, replacement: '', toneChange: 1 },  // phŭ → 子音なし (声調変化1)
    { pattern: /r$/, replacement: 'l', toneChange: 0 },  // r → l
    { pattern: /rŭ$/, replacement: 'l', toneChange: 0 },  // rŭ → l
    { pattern: /s$/, replacement: 'l', toneChange: 0 },  // s → l
    { pattern: /sh$/, replacement: 'l', toneChange: 0 },  // sh → l
    { pattern: /shŭ$/, replacement: 'l', toneChange: 0 },  // shŭ → l
    { pattern: /sŭ$/, replacement: 'l', toneChange: 0 },  // sŭ → l
    { pattern: /t$/, replacement: '', toneChange: 1 },  // t → 子音なし (声調変化1)
    { pattern: /t’$/, replacement: '', toneChange: 1 },  // t’ → 子音なし (声調変化1)
    { pattern: /th$/, replacement: '', toneChange: 1 },  // th → 子音なし (声調変化1)
    { pattern: /thŭ$/, replacement: '', toneChange: 1 },  // thŭ → 子音なし (声調変化1)
    { pattern: /v$/, replacement: 'n', toneChange: 0 },  // v → n
    { pattern: /w$/, replacement: 'ŭ', toneChange: 0 },  // w → ŭ
    { pattern: /x$/, replacement: 'NG', toneChange: 0 },  // x → NG
    { pattern: /z$/, replacement: 'l', toneChange: 0 },  // z → l
    { pattern: /zŭ$/, replacement: 'l', toneChange: 0 }  // zŭ → l
];

endingsWithToneChange.forEach(({ pattern, replacement, toneChange }) => {
    if (pattern.test(word)) {
        // 語尾の子音に基づいて音調変更を適用
        const vowel = word.match(vowels.join('|')).pop(); // 母音を取得
        const modifiedVowel = applyToneChange(vowel, toneChange);
        word = word.replace(vowel, modifiedVowel).replace(pattern, replacement);
    }
});

    
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

    // 最後の変換
    word = word.replace(/NG/g, 'ng');
    
    return word;  // 関数の戻り値
}

// HTML要素との連携
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input');
    const outputField = document.getElementById('output');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', () => {
        const inputText = inputField.value;
        
        // Split the input text by newlines, applying transformation to each line
        const transformedText = inputText
            .split(/\n/) // Split by newlines
            .map(line => 
                line.split(/\s+/) // Split each line by spaces
                .map(word => transformWord(word)) // Apply the transformation to each word
                .join(' ') // Join transformed words with a space
            )
            .join('\n'); // Join the transformed lines with a newline

        // Display the transformed text
        outputField.value = transformedText;
    });
});

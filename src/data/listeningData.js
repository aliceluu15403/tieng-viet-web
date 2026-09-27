// src/data/listeningData.js
const allListeningLessons = {
  "FLN01": {
    title: "Family & Relatives Dialogue (Northern Accent)",
    audioFile: "FLN01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Gia đình em có mấy",
        part2: "? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Nhà em có bốn người.",
        typeAnswer: "nguoi",
        correctMcq: "người",
        mcqOptions: ["người", "ngươi", "ngưoi"]
      },
      {
        id: 2,
        part1: "<b>A:</b> Gồm những",
        part2: "vậy? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Bố mẹ, anh trai và em.",
        typeAnswer: "ai",
        correctMcq: "ai",
        mcqOptions: ["ai", "ái", "ải"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Anh trai em sống",
        part2: "đâu? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh ấy sống ở Hà Nội.",
        typeAnswer: "o",
        correctMcq: "ở",
        mcqOptions: ["ở", "o", "õ"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Em có thường xuyên",
        part2: "thăm gia đình không?",
        typeAnswer: "ve",
        correctMcq: "về",
        mcqOptions: ["về", "ve", "vê"]
      },
      {
        id: 5,
        part1: "<b>B:</b> Có, khoảng vài tháng em",
        part2: "về một lần.",
        typeAnswer: "co",
        correctMcq: "có",
        mcqOptions: ["có", "cô", "cớ"]
      }
    ],
    listeningMcqQuestions: [
      {
        id: 1,
        question: "Nhà em có mấy người?",
        options: ["3 người", "4 người", "5 người", "6 người"],
        correct: 1
      },
      {
        id: 2,
        question: "Em có em trai không?",
        options: ["Có", "Không"],
        correct: 1
      },
      {
        id: 3,
        question: "Ai đang sống ở Hà Nội?",
        options: ["Bố mẹ", "Anh trai", "Em gái", "Cả nhà"],
        correct: 1
      },
      {
        id: 4,
        question: "\"Vài\" là gì?",
        options: ["Một", "Hai", "Mấy", "Tất cả"],
        correct: 2
      },
      {
        id: 5,
        question: "Em về thăm gia đình mỗi tháng đúng không?",
        options: ["Đúng", "Sai"],
        correct: 1
      }
    ]
  },
  "FLS01": {
    title: "Family & Relatives Dialogue (Southern Accent)",
    audioFile: "FLS01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Gia đình em có mấy",
        part2: "? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Nhà em có bốn người.",
        typeAnswer: "nguoi",
        correctMcq: "người",
        mcqOptions: ["người", "ngươi", "ngưoi"]
      },
      {
        id: 2,
        part1: "<b>A:</b> Gồm những",
        part2: "vậy? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Ba mẹ, anh trai và em.",
        typeAnswer: "ai",
        correctMcq: "ai",
        mcqOptions: ["ai", "ái", "ải"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Anh trai em sống",
        part2: "đâu? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh ấy sống ở Hà Nội.",
        typeAnswer: "o",
        correctMcq: "ở",
        mcqOptions: ["ở", "o", "õ"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Em có thường xuyên",
        part2: "thăm gia đình không?",
        typeAnswer: "ve",
        correctMcq: "về",
        mcqOptions: ["về", "ve", "vê"]
      },
      {
        id: 5,
        part1: "<b>B:</b> Có, khoảng vài tháng em",
        part2: "về một lần.",
        typeAnswer: "co",
        correctMcq: "có",
        mcqOptions: ["có", "cô", "cớ"]
      }
    ],
    listeningMcqQuestions: [
      {
        id: 1,
        question: "Nhà em có mấy người?",
        options: ["3 người", "4 người", "5 người", "6 người"],
        correct: 1
      },
      {
        id: 2,
        question: "Em có em trai không?",
        options: ["Có", "Không"],
        correct: 1
      },
      {
        id: 3,
        question: "Ai đang sống ở Hà Nội?",
        options: ["Ba mẹ", "Anh trai", "Em gái", "Cả nhà"],
        correct: 1
      },
      {
        id: 4,
        question: "\"Vài\" là gì?",
        options: ["Một", "Hai", "Mấy", "Tất cả"],
        correct: 2
      },
      {
        id: 5,
        question: "Em về thăm gia đình mỗi tháng đúng không?",
        options: ["Đúng", "Sai"],
        correct: 1
      }
    ]
  },
  "WLN01": {
    title: "Work Dialogue (Northern Accent)",
    audioFile: "WLN01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Dạo này công việc",
        part2: "rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Cũng khá bận.",
        typeAnswer: "the nao",
        correctMcq: "thế nào",
        mcqOptions: ["thế nào", "thê nào", "thế nao"]
      },
      {
        id: 2,
        part1: "<b>B:</b> Tuần này anh phải làm",
        part2: "một dự án.",
        typeAnswer: "xong",
        correctMcq: "xong",
        mcqOptions: ["xong", "xóng", "xông"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Anh",
        part2: "có kịp deadline không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Chắc là kịp.",
        typeAnswer: "nghi",
        correctMcq: "nghĩ",
        mcqOptions: ["nghĩ", "nghỉ", "nghi"]
      },
      {
        id: 4,
        part1: "<b>B:</b> Nhưng có thể phải làm thêm",
        part2: ".",
        typeAnswer: "gio",
        correctMcq: "giờ",
        mcqOptions: ["giờ", "giơ", "giở"]
      },
      {
        id: 5,
        part1: "<b>A:</b> Thế",
        part2: "tuần anh có nghỉ không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh cũng chưa biết nữa.",
        typeAnswer: "cuoi",
        correctMcq: "cuối",
        mcqOptions: ["cuối", "cúi", "cuoi"]
      },
      {
        id: 6,
        part1: "<b>B:</b> Nếu xong sớm thì",
        part2: "sớm.",
        typeAnswer: "nghi",
        correctMcq: "nghỉ",
        mcqOptions: ["nghỉ", "nghĩ", "nghi"]
      }
    ]
  },
  "WLS01": {
    title: "Work Dialogue (Southern Accent)",
    audioFile: "WLS01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Dạo này công việc",
        part2: "rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Cũng khá bận.",
        typeAnswer: "the nao",
        correctMcq: "thế nào",
        mcqOptions: ["thế nào", "thê nào", "thế nao"]
      },
      {
        id: 2,
        part1: "<b>B:</b> Tuần này anh phải làm",
        part2: "một dự án.",
        typeAnswer: "xong",
        correctMcq: "xong",
        mcqOptions: ["xong", "xóng", "xông"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Anh",
        part2: "có kịp deadline không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Chắc là kịp.",
        typeAnswer: "nghi",
        correctMcq: "nghĩ",
        mcqOptions: ["nghĩ", "nghỉ", "nghi"]
      },
      {
        id: 4,
        part1: "<b>B:</b> Nhưng có thể phải làm thêm",
        part2: ".",
        typeAnswer: "gio",
        correctMcq: "giờ",
        mcqOptions: ["giờ", "giơ", "giở"]
      },
      {
        id: 5,
        part1: "<b>A:</b> Thế",
        part2: "tuần anh có nghỉ không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh cũng chưa biết nữa.",
        typeAnswer: "cuoi",
        correctMcq: "cuối",
        mcqOptions: ["cuối", "cúi", "cuoi"]
      },
      {
       id: 6,
        part1: "<b>B:</b> Nếu xong sớm thì",
        part2: "sớm.",
        typeAnswer: "nghi",
        correctMcq: "nghỉ",
        mcqOptions: ["nghỉ", "nghĩ", "nghi"]
      }
    ]
  },
  "SLN01": {
    title: "Northern Accent Dialogue",
    audioFile: "SLN01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Chào con. Con bay có",
        part2: "? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Dạ, cũng hơi mệt.</span>",
        typeAnswer: "met",
        correctMcq: "mệt",
        mcqOptions: ["mệt", "mết", "mét"]
      },
      {
        id: 2,
        part1: "<b>A:</b> Con bay sang đây",
        part2: "bao lâu?",
        typeAnswer: "mat",
        correctMcq: "mất",
        mcqOptions: ["mất", "mật", "măt"]
      },
      {
        id: 3,
        part1: "<b>B:</b> Khoảng 13",
        part2: "ạ.",
        typeAnswer: "tieng",
        correctMcq: "tiếng",
        mcqOptions: ["tiếng", "tieng", "tiéng"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Đây là",
        part2: "mấy con đến Việt Nam? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Lần thứ hai rồi ạ.</span>",
        typeAnswer: "lan thu",
        correctMcq: "lần thứ",
        mcqOptions: ["lần thứ", "lan thư", "lần tưu"]
      },
      {
        id: 5,
        part1: "<b>A:</b> Con đi Hạ Long",
        part2: "chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Chưa ạ.</span>",
        typeAnswer: "bao gio",
        correctMcq: "bao giờ",
        mcqOptions: ["bao giờ", "báo giờ", "bảo giở"]
      },
      {
        id: 6,
        part1: "<b>B:</b> Cô chú đi Hạ Long mấy lần",
        part2: "ạ?",
        typeAnswer: "roi",
        correctMcq: "rồi",
        mcqOptions: ["rồi", "rối", "roi"]
      },
      {
        id: 7,
        part1: "<b>A:</b>",
        part2: "ba lần rồi.",
        typeAnswer: "khoang",
        correctMcq: "khoảng",
        mcqOptions: ["khoảng", "khoang", "khoàng"]
      }
    ]
  },
  "SLS01": {
    title: "Trip to Vietnam Dialogue (Southern Accent)",
    audioFile: "SLS01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Đây là",
        part2: "mấy anh tới Việt Nam? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Lần thứ ba rồi.",
        typeAnswer: "lan thu",
        correctMcq: "lần thứ",
        mcqOptions: ["lần thứ", "lan thư", "lần tưu"]
      },
      {
        id: 2,
        part1: "<b>A:</b> Anh tới Cần Thơ",
        part2: "chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh chưa đi Cần Thơ.",
        typeAnswer: "bao gio",
        correctMcq: "bao giờ",
        mcqOptions: ["bao giờ", "báo giờ", "bảo giở"]
      },
      {
       id: 3,
        part1: "<b>A:</b> Vậy còn Đà Nẵng? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Đà Nẵng thì anh đi",
        part2: ".",
        typeAnswer: "roi",
        correctMcq: "rồi",
        mcqOptions: ["rồi", "rối", "roi"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Anh đi mấy",
        part2: "rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Hai lần.",
        typeAnswer: "lan",
        correctMcq: "lần",
        mcqOptions: ["lần", "lấn", "lản"]
      }
    ]
  }
};

export default allListeningLessons;
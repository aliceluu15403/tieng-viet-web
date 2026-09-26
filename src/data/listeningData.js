// src/data/listeningData.js
const allListeningLessons = {
  "FLN01": {
    title: "Family & Relatives Dialogue (Northern Accent)",
    audioFile: "FLN01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Gia đình em có",
        part2: "người? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Nhà em có bốn người.",
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
        typeAnswer: "dau",
        correctMcq: "đâu",
        mcqOptions: ["đâu", "dâu", "đấu"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Em có thường xuyên về",
        part2: " gia đình không?",
        typeAnswer: "tham",
        correctMcq: "thăm",
        mcqOptions: ["thăm", "thám", "thắm"]
      },
      {
        id: 5,
        part1: "<b>B:</b> Có, khoảng vài tháng em về",
        part2: "lần.",
        typeAnswer: "lan",
        correctMcq: "lần",
        mcqOptions: ["lần", "lấn", "lản"]
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
        part1: "<b>A:</b> Gia đình em có",
        part2: "người? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Nhà em có bốn người.",
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
        typeAnswer: "dau",
        correctMcq: "đâu",
        mcqOptions: ["đâu", "dâu", "đấu"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Em có thường xuyên về",
        part2: " gia đình không?",
        typeAnswer: "tham",
        correctMcq: "thăm",
        mcqOptions: ["thăm", "thám", "thắm"]
      },
      {
        id: 5,
        part1: "<b>B:</b> Có, khoảng vài tháng em về",
        part2: "lần.",
        typeAnswer: "lan",
        correctMcq: "lần",
        mcqOptions: ["lần", "lấn", "lản"]
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
    title: "Work & Workplace Dialogue (Northern Accent)",
    audioFile: "WLN01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Dạo này công việc",
        part2: "thế nào rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Cũng khá bận.",
        typeAnswer: "the nao",
        correctMcq: "thế nào",
        mcqOptions: ["thế nào", "thê nào", "thế nao"]
      },
      {
        id: 2,
        part1: "<b>B:</b> Tuần này anh phải làm",
        part2: "xong một dự án.",
        typeAnswer: "xong",
        correctMcq: "xong",
        mcqOptions: ["xong", "xóng", "xông"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Anh",
        part2: "nghĩ có kịp không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Chắc là kịp.",
        typeAnswer: "nghi",
        correctMcq: "nghĩ",
        mcqOptions: ["nghĩ", "nghỉ", "nghi"]
      },
      {
        id: 4,
        part1: "<b>B:</b> Nhưng có thể phải",
        part2: "làm thêm giờ.",
        typeAnswer: "lam",
        correctMcq: "làm",
        mcqOptions: ["làm", "lám", "lam"]
      },
      {
        id: 5,
        part1: "<b>A:</b> Thế cuối tuần anh có",
        part2: "được nghỉ không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh cũng chưa biết nữa.",
        typeAnswer: "duoc nghi",
        correctMcq: "được nghỉ",
        mcqOptions: ["được nghỉ", "được nghĩ", "được nghị"]
      },
      {
        id: 6,
        part1: "<b>B:</b>",
        part2: "nếu xong sớm thì nghỉ sớm.",
        typeAnswer: "neu",
        correctMcq: "nếu",
        mcqOptions: ["nếu", "néu", "nểu"]
      }
    ]
  },
  "WLS01": {
    title: "Work & Workplace Dialogue (Southern Accent)",
    audioFile: "WLS01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Dạo này công việc",
        part2: "thế nào rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Cũng khá bận.",
        typeAnswer: "the nao",
        correctMcq: "thế nào",
        mcqOptions: ["thế nào", "thê nào", "thế nao"]
      },
      {
        id: 2,
        part1: "<b>B:</b> Tuần này anh phải làm",
        part2: "xong một dự án.",
        typeAnswer: "xong",
        correctMcq: "xong",
        mcqOptions: ["xong", "xóng", "xông"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Anh",
        part2: "nghĩ có kịp không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Chắc là kịp.",
        typeAnswer: "nghi",
        correctMcq: "nghĩ",
        mcqOptions: ["nghĩ", "nghỉ", "nghi"]
      },
      {
        id: 4,
        part1: "<b>B:</b> Nhưng có thể phải",
        part2: "làm thêm giờ.",
        typeAnswer: "lam",
        correctMcq: "làm",
        mcqOptions: ["làm", "lám", "lam"]
      },
      {
        id: 5,
        part1: "<b>A:</b> Thế cuối tuần anh có",
        part2: "được nghỉ không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh cũng chưa biết nữa.",
        typeAnswer: "duoc nghi",
        correctMcq: "được nghỉ",
        mcqOptions: ["được nghỉ", "được nghĩ", "được nghị"]
      },
      {
        id: 6,
        part1: "<b>B:</b>",
        part2: "nếu xong sớm thì nghỉ sớm.",
        typeAnswer: "neu",
        correctMcq: "nếu",
        mcqOptions: ["nếu", "néu", "nểu"]
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
        part2: "mệt không? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Dạ, cũng hơi mệt.</span>",
        typeAnswer: "met",
        correctMcq: "mệt",
        mcqOptions: ["mệt", "mết", "mét"]
      },
      {
        id: 2,
        part1: "<b>A:</b> Con bay sang đây",
        part2: "mất bao lâu?",
        typeAnswer: "mat bao lau",
        correctMcq: "mất bao lâu",
        mcqOptions: ["mất bao lâu", "mất bào lâu", "mất bao lấu"]
      },
      {
        id: 3,
        part1: "<b>B:</b> Khoảng 13",
        part2: "tiếng ạ.",
        typeAnswer: "tieng",
        correctMcq: "tiếng",
        mcqOptions: ["tiếng", "tieng", "tiéng"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Đây là lần",
        part2: "thứ mấy con đến Việt Nam? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Lần thứ hai rồi ạ.</span>",
        typeAnswer: "thu may",
        correctMcq: "thứ mấy",
        mcqOptions: ["thứ mấy", "thư mấy", "thứ mầy"]
      },
      {
        id: 5,
        part1: "<b>A:</b> Con đi Hạ Long",
        part2: "bao giờ chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Chưa ạ.</span>",
        typeAnswer: "bao gio",
        correctMcq: "bao giờ",
        mcqOptions: ["bao giờ", "báo giờ", "bảo giở"]
      },
      {
        id: 6,
        part1: "<b>B:</b> Cô chú đi Hạ Long",
        part2: "mấy lần rồi ạ?",
        typeAnswer: "may lan",
        correctMcq: "mấy lần",
        mcqOptions: ["mấy lần", "máy lần", "mấy lân"]
      },
      {
        id: 7,
        part1: "<b>A:</b> Khoảng",
        part2: "ba lần rồi.",
        typeAnswer: "ba",
        correctMcq: "ba",
        mcqOptions: ["ba", "bà", "bả"]
      }
    ]
  },
  "SLS01": {
    title: "Trip to Vietnam Dialogue (Southern Accent)",
    audioFile: "SLS01.wav",
    questions: [
      {
        id: 1,
        part1: "<b>A:</b> Đây là lần",
        part2: "thứ mấy anh tới Việt Nam? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Lần thứ ba rồi.",
        typeAnswer: "thu may",
        correctMcq: "thứ mấy",
        mcqOptions: ["thứ mấy", "thư mấy", "thú mấy"]
      },
      {
        id: 2,
        part1: "<b>A:</b> Anh tới Cần Thơ",
        part2: "bao giờ chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh chưa đi Cần Thơ.",
        typeAnswer: "bao gio",
        correctMcq: "bao giờ",
        mcqOptions: ["bao giờ", "báo giờ", "bảo giở"]
      },
      {
        id: 3,
        part1: "<b>A:</b> Vậy còn Đà Nẵng? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Đà Nẵng thì anh đi",
        part2: "rồi.",
        typeAnswer: "roi",
        correctMcq: "rồi",
        mcqOptions: ["rồi", "rối", "roi"]
      },
      {
        id: 4,
        part1: "<b>A:</b> Anh đi mấy lần rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b>",
        part2: "hai lần.",
        typeAnswer: "hai",
        correctMcq: "hai",
        mcqOptions: ["hai", "hài", "hải"]
      }
    ]
  }
};

export default allListeningLessons;
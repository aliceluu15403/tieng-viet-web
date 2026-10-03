// Hàm helper tự động sinh cấu trúc giúp file gọn gàng, dễ quản lý
const createLesson = (title, audioFile, rawQuestions, mcqList) => ({
  title,
  audioFile,
  questions: rawQuestions.map((q, index) => ({
    id: index + 1,
    part1: q[0],
    part2: q[1],
    typeAnswer: q[2],
    correctMcq: q[3],
    mcqOptions: q[4] || [q[3], q[3] + "x", q[3] + "y"]
  })),
  listeningMcqQuestions: mcqList.map((m, index) => ({
    id: index + 1,
    question: m[0],
    options: m[1],
    correct: m[2]
  }))
});

const allListeningLessons = {
  "FLN02": createLesson(
    "Travel & Relatives Dialogue (Northern Accent)",
    "FLN02.wav",
    [
      ["<b>Lan:</b> Sáng nay mẹ", "cho em. &nbsp;&nbsp;|&nbsp;&nbsp; <b>Nam:</b> Mẹ gọi có chuyện gì vậy?", "goi", "gọi", ["gọi", "gói", "goi"]],
      ["<b>Lan:</b> Mẹ nói ngày mai dì Mai", "sang Mỹ.", "se", "sẽ", ["sẽ", "se", "sẻ"]],
      ["<b>Nam:</b> Dì đến lúc", "giờ? &nbsp;&nbsp;|&nbsp;&nbsp; <b>Lan:</b> Khoảng 8 giờ tối.", "may", "mấy", ["mấy", "may", "mẩy"]],
      ["<b>Lan:</b> Nhưng mẹ bảo có thể đến", "hơn một chút.", "muon", "muộn", ["muộn", "muốn", "muôn"]],
      ["<b>Nam:</b> Dì đã đến Mỹ", "chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <b>Lan:</b> Đây là lần đầu.", "bao gio", "bao giờ", ["bao giờ", "báo giờ", "bảo giở"]],
      ["<b>Nam:</b> Vậy mình có cần đi", "dì không?", "don", "đón", ["đón", "don", "đôn"]],
      ["<b>Lan:</b> Mẹ", "mình ra sân bay đón dì.", "nho", "nhờ", ["nhờ", "nho", "nhở"]],
      ["<b>Nam:</b> Làm việc xong anh và em", "đón dì.", "di", "đi", ["đi", "dị", "đí"]]
    ],
    [
      ["Sáng nay ai gọi cho Lan?", ["Dì Mai", "Mẹ Lan", "Nam", "Mẹ Nam"], 1],
      ["Khi nào dì Mai sang Mỹ?", ["Hôm nay", "Ngày mai", "Tuần sau", "Tháng sau"], 1],
      ["Dì Mai dự định đến lúc mấy giờ?", ["7 giờ", "9 giờ", "trước 7 giờ", "8 giờ hoặc sau 8 giờ"], 3],
      ["Dì Mai đã đến Mỹ bao giờ chưa?", ["Rồi, một lần", "Rồi, hai lần", "Chưa bao giờ", "Không biết"], 2],
      ["Mẹ nhờ Lan và Nam làm gì?", ["Đưa dì Mai đi ăn", "Đưa dì Mai về nhà", "Ra sân bay đón dì Mai", "Mua vé máy bay cho dì Mai"], 2],
      ["Khi nào 2 người sẽ đi đón dì?", ["Trước khi làm việc", "Sau khi làm việc", "Vào buổi sáng", "Vào buổi trưa"], 1]
    ]
  ),

  "FLN01": createLesson(
    "Family & Relatives Dialogue (Northern Accent)",
    "FLN01.wav",
    [
      ["<b>A:</b> Gia", "em có mấy người? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Nhà em có bốn người.", "dinh", "đình", ["đình", "dinh", "đỉnh"]],
      ["<b>A:</b> Gồm những", "vậy? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Bố mẹ, anh trai và em.", "ai", "ai", ["ai", "ái", "ải"]],
      ["<b>A:</b> Anh trai em sống ở", "? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh ấy sống ở Hà Nội.", "dau", "đâu", ["đâu", "dau", "đấu"]],
      ["<b>A:</b> Em có thường xuyên về", "gia đình không?", "tham", "thăm", ["thăm", "tham", "thám"]],
      ["<b>B:</b> Có, khoảng", "tháng em về một lần.", "vai", "vài", ["vài", "vai", "vải"]]
    ],
    [
      ["Nhà em có mấy người?", ["3 người", "4 người", "5 người", "6 người"], 1],
      ["Em có em trai không?", ["Có", "Không"], 1],
      ["Ai đang sống ở Hà Nội?", ["Bố mẹ", "Anh trai", "Em gái", "Cả nhà"], 1],
      ["\"Vài\" là gì?", ["Một", "Hai", "Mấy", "Tất cả"], 2],
      ["Em về thăm gia đình mỗi tháng đúng không?", ["Đúng", "Sai"], 1]
    ]
  ),

  "FLS01": createLesson(
    "Family & Relatives Dialogue (Southern Accent)",
    "FLS01.wav",
    [
      ["<b>A:</b> Gia", "em có mấy người? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Nhà em có bốn người.", "dinh", "đình", ["đình", "dinh", "đỉnh"]],
      ["<b>A:</b> Gồm những", "vậy? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Ba mẹ, anh trai và em.", "ai", "ai", ["ai", "ái", "ải"]],
      ["<b>A:</b> Anh trai em sống ở", "? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh ấy sống ở Hà Nội.", "dau", "đâu", ["đâu", "dau", "đấu"]],
      ["<b>A:</b> Em có thường xuyên về", "gia đình không?", "tham", "thăm", ["thăm", "tham", "thám"]],
      ["<b>B:</b> Có, khoảng", "tháng em về một lần.", "vai", "vài", ["vài", "vai", "vải"]]
    ],
    [
      ["Nhà em có mấy người?", ["3 người", "4 người", "5 người", "6 người"], 1],
      ["Em có em trai không?", ["Có", "Không"], 1],
      ["Ai đang sống ở Hà Nội?", ["Ba mẹ", "Anh trai", "Em gái", "Cả nhà"], 1],
      ["\"Vài\" là gì?", ["Một", "Hai", "Mấy", "Tất cả"], 2],
      ["Em về thăm gia đình mỗi tháng đúng không?", ["Đúng", "Sai"], 1]
    ]
  ),

  "WLN01": createLesson(
    "Work Dialogue (Northern Accent)",
    "WLN01.wav",
    [
      ["<b>A:</b> Dạo này công việc", "rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Cũng khá bận.", "the nao", "thế nào", ["thế nào", "thê nào", "thế nao"]],
      ["<b>B:</b> Tuần này anh phải làm", "một dự án.", "xong", "xong", ["xong", "xóng", "xông"]],
      ["<b>A:</b> Anh", "có kịp deadline không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Chắc là kịp.", "nghi", "nghĩ", ["nghĩ", "nghỉ", "nghi"]],
      ["<b>B:</b> Nhưng có thể phải làm thêm", ".", "gio", "giờ", ["giờ", "giơ", "giở"]],
      ["<b>A:</b> Thế", "tuần anh có nghỉ không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh cũng chưa biết nữa.", "cuoi", "cuối", ["cuối", "cúi", "cuoi"]],
      ["<b>B:</b> Nếu xong sớm thì", "sớm.", "nghi", "nghỉ", ["nghỉ", "nghĩ", "nghi"]]
    ],
    [
      ["Dạo này công việc thế nào?", ["Rất rảnh", "Khá bận", "Bình thường", "Nghỉ việc"], 1],
      ["Tuần này anh phải làm gì?", ["Nghỉ ngơi", "Xong một dự án", "Đi du lịch", "Không làm gì"], 1],
      ["Anh ấy có kịp deadline không?", ["Chắc là kịp", "Không kịp", "Chưa biết", "Đã xong rồi"], 0],
      ["Cuối tuần anh có nghỉ không?", ["Chắc chắn nghỉ", "Không nghỉ", "Chưa biết nữa", "Phải làm thêm"], 2]
    ]
  ),

  "WLS01": createLesson(
    "Work Dialogue (Southern Accent)",
    "WLS01.wav",
    [
      ["<b>A:</b> Dạo này công việc", "rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Cũng khá bận.", "the nao", "thế nào", ["thế nào", "thê nào", "thế nao"]],
      ["<b>B:</b> Tuần này anh phải làm", "một dự án.", "xong", "xong", ["xong", "xóng", "xông"]],
      ["<b>A:</b> Anh", "có kịp deadline không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Chắc là kịp.", "nghi", "nghĩ", ["nghĩ", "nghỉ", "nghi"]],
      ["<b>B:</b> Nhưng có thể phải làm thêm", ".", "gio", "giờ", ["giờ", "giơ", "giở"]],
      ["<b>A:</b> Thế", "tuần anh có nghỉ không? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh cũng chưa biết nữa.", "cuoi", "cuối", ["cuối", "cúi", "cuoi"]],
      ["<b>B:</b> Nếu xong sớm thì", "sớm.", "nghi", "nghỉ", ["nghỉ", "nghĩ", "nghi"]]
    ],
    [
      ["Dạo này công việc thế nào?", ["Rất rảnh", "Khá bận", "Bình thường", "Nghỉ việc"], 1],
      ["Tuần này anh phải làm gì?", ["Nghỉ ngơi", "Xong một dự án", "Đi du lịch", "Không làm gì"], 1],
      ["Anh ấy có kịp deadline không?", ["Chắc là kịp", "Không kịp", "Chưa biết", "Đã xong rồi"], 0],
      ["Cuối tuần anh có nghỉ không?", ["Chắc chắn nghỉ", "Không nghỉ", "Chưa biết nữa", "Phải làm thêm"], 2]
    ]
  ),

  "SLN01": createLesson(
    "Northern Accent Dialogue",
    "SLN01.wav",
    [
      ["<b>A:</b> Chào con. Con bay có", "không? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Dạ, cũng hơi mệt.</span>", "met", "mệt", ["mệt", "mết", "mét"]],
      ["<b>A:</b> Con bay sang đây", "bao lâu?", "mat", "mất", ["mất", "mật", "măt"]],
      ["<b>B:</b> Khoảng 13", "ạ.", "tieng", "tiếng", ["tiếng", "tieng", "tiéng"]],
      ["<b>A:</b> Đây là", "mấy con đến Việt Nam? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Lần thứ hai rồi ạ.</span>", "lan thu", "lần thứ", ["lần thứ", "lan thư", "lần thu"]],
      ["<b>A:</b> Con đi Hạ Long", "chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <span class='text-slate-700 font-normal'><b>B:</b> Chưa ạ.</span>", "bao gio", "bao giờ", ["bao giờ", "báo giờ", "bảo giở"]],
      ["<b>B:</b> Cô chú đi Hạ Long mấy lần", "ạ?", "roi", "rồi", ["rồi", "rối", "roi"]],
      ["<b>A:</b>", "ba lần rồi.", "khoang", "khoảng", ["khoảng", "khoang", "khoàng"]]
    ],
    [
      ["Chuyến bay mất bao lâu?", ["10 tiếng", "12 tiếng", "13 tiếng", "14 tiếng"], 2],
      ["Đây là lần thứ mấy con đến Việt Nam?", ["Lần đầu", "Lần thứ hai", "Lần thứ ba", "Lần thứ tư"], 1],
      ["Con đã đi Hạ Long chưa?", ["Rồi", "Chưa", "Sẽ đi", "Không biết"], 1],
      ["Cô chú đi Hạ Long mấy lần rồi?", ["Một lần", "Hai lần", "Ba lần", "Bốn lần"], 2]
    ]
  ),

  "SLS01": createLesson(
    "Trip to Vietnam Dialogue (Southern Accent)",
    "SLS01.wav",
    [
      ["<b>A:</b> Đây là lần thứ", "anh tới Việt Nam? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Lần thứ ba rồi.", "may", "mấy", ["mấy", "may", "mẩy"]],
      ["<b>A:</b> Anh tới Cần Thơ", "chưa? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Anh chưa đi Cần Thơ.", "bao gio", "bao giờ", ["bao giờ", "báo giờ", "bảo giở"]],
      ["<b>A:</b> Vậy còn Đà Nẵng? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b> Đà Nẵng", "anh đi rồi.", "thi", "thì", ["thì", "thi", "thỉ"]],
      ["<b>A:</b> Anh đi mấy lần rồi? &nbsp;&nbsp;|&nbsp;&nbsp; <b>B:</b>", "lần.", "hai", "hai", ["hai", "hải", "hại"]]
    ],
    [
      ["Đây là lần thứ mấy anh tới Việt Nam?", ["Lần đầu tiên", "Lần thứ hai", "Lần thứ ba", "Lần thứ tư"], 2],
      ["Anh đã tới Cần Thơ chưa?", ["Rồi", "Chưa", "Sẽ đi ngày mai", "Không đi"], 1],
      ["Anh ấy đã đi đâu rồi?", ["Cần Thơ", "Đà Nẵng", "Hà Nội", "Hồ Chí Minh"], 1],
      ["Anh ấy tới đó mấy lần?", ["Một lần", "Hai lần", "Ba lần", "Bốn lần"], 1]
    ]
  ),

  "HLS01": createLesson(
    "Health & Feeling Dialogue (Southern Accent)",
    "HLS01.wav",
    [
      ["<b>Con:</b> Mẹ ơi, bữa nay mẹ thấy trong người", "rồi?", "sao", "sao", ["sao", "sáo", "sảo"]],
      ["<b>Mẹ:</b> Mẹ vẫn thấy hơi mệt mệt, người cứ uể oải, với lại hơi", ".", "dau dau", "đau đầu", ["đau đầu", "dau dau", "đầu đau"]],
      ["<b>Con:</b> Mẹ có", "hông?", "sot", "sốt", ["sốt", "sot", "sớt"]],
      ["<b>Mẹ:</b> Một chút thôi. Chắc hổng sao đâu, mẹ nghỉ ngơi chút là", "à.", "khoe", "khỏe", ["khỏe", "khoẻ", "khoé"]],
      ["<b>Con:</b> Mẹ đừng có", "quá nghen.", "rang", "ráng", ["ráng", "rang", "ràng"]],
      ["<b>Mẹ:</b> Hồi nãy mẹ có ăn chút", "rồi.", "chao", "cháo", ["cháo", "chao", "chào"]],
      ["<b>Con:</b> Vậy mẹ uống thuốc chưa? Để con lấy cho mẹ ly", "nha.", "nuoc", "nước", ["nước", "nuoc", "nuớc"]],
      ["<b>Mẹ:</b> Cảm ơn con, bây giờ mẹ", "mới uống.", "moi", "mới", ["mới", "mọi", "mói"]]
    ],
    [
      ["Mẹ cảm thấy trong người thế nào?", ["Rất khỏe", "Hơi đau đầu", "Bình thường", "Đau lưng"], 1],
      ["Mẹ có bị sốt không?", ["Không", "Sốt cao", "Sốt nhẹ", "Không biết"], 2],
      ["Mẹ đã ăn gì chưa?", ["Chưa", "Ăn cơm rồi", "Ăn chút cháo rồi", "Ăn phở rồi"], 2],
      ["Con lấy gì cho mẹ?", ["Nước", "Sữa", "Thuốc", "Trà"], 0],
      ["Khi nào mẹ mới uống thuốc?", ["Lát nữa", "Bây giờ", "Sáng mai", "Hôm qua"], 1]
    ]
  ),

  "HLS02": createLesson(
    "Health & Daily Habits Dialogue (Southern Accent)",
    "HLS02.wav",
    [
      ["<b>Mẹ:</b> Tối qua con ngủ có", "hông?", "ngon", "ngon", ["ngon", "ngọn", "ngôn"]],
      ["<b>Con:</b> Dạ, hôm qua con trằn trọc", ", gần sáng mới chợp mắt được chút.", "ca dem", "cả đêm", ["cả đêm", "ca dem", "cả đem"]],
      ["<b>Mẹ:</b> Bộ con lại cầm", "tới khuya nữa hả?", "dien thoại", "điện thoại", ["điện thoại", "dien thoai", "điện thọai"]],
      ["<b>Mẹ:</b> Thôi, tối nay bỏ điện thoại xuống, đi ngủ", "nghen.", "som", "sớm", ["sớm", "sơm", "sớm"]],
      ["<b>Mẹ:</b> Đừng uống", "cà phê nữa.", "nhieu", "nhiều", ["nhiều", "nhieu", "nhiều"]]
    ],
    [
      ["Tối qua con ngủ có ngon không?", ["Rất ngon", "Không ngon", "Ngủ sớm", "Không ngủ"], 1],
      ["Tại sao con khó ngủ?", ["Vì uống nhiều trà", "Vì xem điện thoại", "Vì đau đầu", "Vì làm việc mệt"], 1],
      ["Mẹ khuyên con điều gì?", ["Đi ngủ sớm", "Không uống trà", "Đi khám bác sĩ", "Xem điện thoại ít hơn"], 0]
    ]
  )
};

export default allListeningLessons;
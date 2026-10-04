// src/data/lessons.js

const createLesson = ({ 
  slug, 
  title, 
  level, 
  description, 
  quizNorth = [], 
  quizSouth = [], 
  vocabNorth = [], 
  vocabSouth = [], 
  transcriptNorth = [], 
  transcriptSouth = [] 
}) => ({
  slug,
  title,
  level,
  description,
  northern: {
    quiz: quizNorth.map(([question, options, correct, explanation]) => ({ question, options, correct, explanation })),
    vocabulary: vocabNorth.map(([word, type, meaning]) => ({ word, type, meaning })),
    audioUrl: `/audio/listening/${slug}-north.m4a`,
    transcript: transcriptNorth.map(([vietnamese, english]) => ({ vietnamese, english }))
  },
  southern: {
    quiz: quizSouth.map(([question, options, correct, explanation]) => ({ question, options, correct, explanation })),
    vocabulary: vocabSouth.map(([word, type, meaning]) => ({ word, type, meaning })),
    audioUrl: `/audio/listening/${slug}-south.m4a`,
    transcript: transcriptSouth.map(([vietnamese, english]) => ({ vietnamese, english }))
  }
});

export const lessons = [
  // 1. ORDERING PHỞ
  createLesson({
    slug: 'ordering-pho',
    title: 'Ordering Phở & Drinks',
    level: 'Beginner (A1)',
    description: 'Learn how to order Phở, specify quantities, and add or refuse extra items at a Vietnamese eatery.',
    quizNorth: [
      ["1. Họ đang ở đâu?", ["Ở quán cà phê", "Ở quán ăn", "Ở siêu thị"], 1, "The conversation takes place at a Vietnamese eatery. The customer uses expressions like \"cho anh một bát phở bò\"."],
      ["2. Anh gọi món gì?", ["Phở bò và trà đá", "Phở gà và cà phê", "Bún bò và nước cam"], 0, "He says \"cho anh một bát phở bò với một cốc trà đá\" in the Northern version."],
      ["3. Anh gọi bao nhiêu phở?", ["Một", "Hai", "Ba"], 0, "The customer orders only one bowl of phở, \"một\"."],
      ["4. Anh có gọi thêm gì không?", ["Có, thêm một món ăn.", "Có, thêm một đồ uống.", "Không lấy thêm gì."], 2, "The customer answers \"Không, anh lấy vậy thôi.\""],
      ["5. Nhân viên nói gì với khách?", ["Hết món rồi", "Đợi một chút", "Thanh toán ngay"], 1, "In Northern Vietnamese, the staff member says \"Anh ngồi đợi một lát nhé.\""]
    ],
    quizSouth: [
      ["1. Họ đang ở đâu?", ["Ở quán cà phê", "Ở quán ăn", "Ở siêu thị"], 1, "The conversation takes place at a Vietnamese eatery. The customer uses expressions like \"cho anh một tô phở bò\"."],
      ["2. Anh gọi món gì?", ["Phở bò và trà đá", "Phở gà và cà phê", "Bún bò và nước cam"], 0, "He says \"cho anh một tô phở bò với một ly trà đá\" in the Southern version."],
      ["3. Anh gọi bao nhiêu phở?", ["Một", "Hai", "Ba"], 0, "The customer orders only one bowl of phở, \"một\"."],
      ["4. Anh có gọi thêm gì không?", ["Có, thêm một món ăn.", "Có, thêm một đồ uống.", "Không lấy thêm gì."], 2, "The customer answers \"Không, anh lấy vậy thôi.\""],
      ["5. Nhân viên nói gì với khách?", ["Hết món rồi", "Đợi một chút", "Thanh toán ngay"], 1, "In Southern Vietnamese, the staff member says \"Anh ngồi đợi chút nha.\""]
    ],
    vocabNorth: [
      ['bát', 'N', 'bowl (North)'],
      ['cốc', 'N', 'glass / cup (North)'],
      ['gọi món', 'V', 'to order food'],
      ['lấy', 'V', 'to take / have / get'],
      ['thêm', 'Adv/V', 'more / additionally'],
      ['trà đá', 'N', 'iced tea']
    ],
    vocabSouth: [
      ['tô', 'N', 'bowl (South)'],
      ['ly', 'N', 'glass / cup (South)'],
      ['gọi món', 'V', 'to order food'],
      ['lấy', 'V', 'to take / have / get'],
      ['thêm', 'Adv/V', 'more / additionally'],
      ['trà đá', 'N', 'iced tea']
    ],
    transcriptNorth: [
      ['Chào anh, anh dùng gì ạ?', 'Hello sir, what would you like?'],
      ['Dạ, cho anh một bát phở bò với một cốc trà đá.', 'A bowl of beef Pho and a glass of iced tea, please.'],
      ['Anh có lấy thêm gì nữa không ạ?', 'Would you like anything else?'],
      ['Không, anh lấy vậy thôi.', 'No, that is all for me.'],
      ['Vâng. Anh ngồi đợi một chút nhé.', 'Alright. Please have a seat and wait a moment.']
    ],
    transcriptSouth: [
      ['Chào anh, anh dùng gì ạ?', 'Hello sir, what would you like?'],
      ['Dạ, cho anh một tô phở bò với một ly trà đá.', 'A bowl of beef Pho and a glass of iced tea, please.'],
      ['Anh có lấy thêm gì nữa không ạ?', 'Would you like anything else?'],
      ['Không, anh lấy vậy thôi.', 'No, that is all for me.'],
      ['Dạ. Anh ngồi đợi chút nha.', 'Alright. Please have a seat and wait a moment.']
    ]
  }),

  // ============================================================
  // 2. COFFEE SHOP
  // ============================================================
  createLesson({
    slug: 'at-a-coffee-shop',
    title: 'At a Coffee Shop',
    level: 'Beginner (A1)',
    description: 'Learn how to describe drink preferences and customize a coffee order at a Vietnamese cafe.',
    quizNorth: [
      ["1. Hai người đang ở đâu?", ["Ở nhà", "Ở quán cà phê", "Ở nhà hàng"], 1, "Hai người đang ở quán cà phê."],
      ["2. Anh khách gọi đồ uống gì?", ["Cà phê đen", "Bạc xỉu", "Trà đá"], 0, "Anh khách gọi cà phê đen."],
      ["3. Anh ấy muốn cà phê như thế nào?", ["Ít đá", "Không đường", "Nhiều sữa"], 1, "Anh ấy muốn cà phê không đường."],
      ["4. Người đi cùng gọi gì?", ["Trà đào", "Cà phê sữa", "Nước cam"], 0, "Người đi cùng gọi trà đào."],
      ["5. Hai người có gọi đồ ăn không?", ["Có, gọi bánh mì.", "Có, gọi bánh ngọt.", "Không."], 2, "Hai người chỉ gọi đồ uống."]
    ],
    quizSouth: [
      ["1. Hai người đang ở đâu?", ["Ở nhà", "Ở quán cà phê", "Ở nhà hàng"], 1, "Hai người đang ở quán cà phê."],
      ["2. Anh khách gọi đồ uống gì?", ["Cà phê đen", "Bạc xỉu", "Trà đá"], 0, "Anh khách gọi cà phê đen."],
      ["3. Anh ấy muốn cà phê như thế nào?", ["Ít đá", "Không đường", "Nhiều sữa"], 1, "Anh ấy muốn cà phê không đường."],
      ["4. Người đi cùng gọi gì?", ["Trà đào", "Cà phê sữa", "Nước cam"], 0, "Người đi cùng gọi trà đào."],
      ["5. Hai người có gọi đồ ăn không?", ["Có, gọi bánh mì.", "Có, gọi bánh ngọt.", "Không."], 2, "Hai người chỉ gọi đồ uống."]
    ],
    vocabNorth: [
      ['bạc xỉu', 'N', 'Vietnamese coffee with lots of milk'],
      ['không đường', 'Phrase', 'without sugar'],
      ['ít đá', 'Phrase', 'less ice'],
      ['nhiều sữa', 'Phrase', 'more milk'],
      ['vị', 'N', 'taste / flavor'],
      ['đậm', 'Adj', 'strong / rich in flavor']
    ],
    vocabSouth: [
      ['bạc xỉu', 'N', 'Vietnamese coffee with lots of milk'],
      ['không đường', 'Phrase', 'without sugar'],
      ['ít đá', 'Phrase', 'less ice'],
      ['nhiều sữa', 'Phrase', 'more milk'],
      ['vị', 'N', 'taste / flavor'],
      ['đậm', 'Adj', 'strong / rich in flavor']
    ],
    transcriptNorth: [
      ['Anh muốn uống gì?', 'What would you like to drink?'],
      ['Cho anh một cà phê đen, không đường.', 'A black coffee without sugar, please.'],
      ['Anh uống đá bình thường hay ít đá?', 'Regular ice or less ice?'],
      ['Ít đá thôi. Cà phê đừng đậm quá.', 'Less ice. And not too strong, please.'],
      ['Còn chị dùng gì?', 'And what would you like?'],
      ['Cho chị một trà đào. Không cần chỉnh gì đâu.', 'A peach tea. No changes needed.']
    ],
    transcriptSouth: [
      ['Anh uống gì?', 'What would you like to drink?'],
      ['Cho anh một cà phê đen, không đường.', 'A black coffee without sugar, please.'],
      ['Anh uống đá bình thường hay ít đá?', 'Regular ice or less ice?'],
      ['Ít đá thôi. Cà phê đừng đậm quá.', 'Less ice. And not too strong, please.'],
      ['Còn chị uống gì?', 'And what would you like?'],
      ['Cho chị một trà đào. Không cần chỉnh gì đâu.', 'A peach tea. No changes needed.']
    ]
  }),

  // ============================================================
  // 3. BUYING FRUIT
  // ============================================================
  createLesson({
    slug: 'buying-fruit',
    title: 'Buying Fruit',
    level: 'Beginner (A1)',
    description: 'Learn how to ask about price, quality, quantity, and choose fresh fruit at a local market.',
    quizNorth: [
      ["1. Người phụ nữ muốn mua gì?", ["Cam", "Xoài", "Chuối"], 1, "Chị ấy muốn mua xoài."],
      ["2. Xoài có giá bao nhiêu?", ["20 nghìn một ký", "30 nghìn một ký", "40 nghìn một ký"], 1, "Xoài có giá 30 nghìn một cân."],
      ["3. Người bán nói xoài như thế nào?", ["Chua", "Đắt", "Ngọt"], 2, "Người bán nói xoài ngọt."],
      ["4. Người phụ nữ mua bao nhiêu xoài?", ["Một ký", "Hai ký", "Ba ký"], 1, "Chị ấy mua hai cân."],
      ["5. Chị ấy mua thêm gì?", ["Cam", "Chuối", "Táo"], 0, "Chị ấy mua thêm cam."]
    ],
    quizSouth: [
      ["1. Người phụ nữ muốn mua gì?", ["Cam", "Xoài", "Chuối"], 1, "Chị ấy muốn mua xoài."],
      ["2. Xoài có giá bao nhiêu?", ["20 nghìn một ký", "30 nghìn một ký", "40 nghìn một ký"], 1, "Xoài có giá 30 nghìn một ký."],
      ["3. Người bán nói xoài như thế nào?", ["Chua", "Đắt", "Ngọt"], 2, "Người bán nói xoài ngọt."],
      ["4. Người phụ nữ mua bao nhiêu xoài?", ["Một ký", "Hai ký", "Ba ký"], 1, "Chị ấy mua hai ký."],
      ["5. Chị ấy mua thêm gì?", ["Cam", "Chuối", "Táo"], 0, "Chị ấy mua thêm cam."]
    ],
    vocabNorth: [
      ['một cân', 'N', 'one kilogram (North)'],
      ['giá', 'N', 'price'],
      ['quả', 'N', 'fruit (North)'],
      ['ngọt', 'Adj', 'sweet'],
      ['chua', 'Adj', 'sour'],
      ['chín', 'Adj', 'ripe']
    ],
    vocabSouth: [
      ['một ký', 'N', 'one kilogram (South)'],
      ['giá', 'N', 'price'],
      ['trái', 'N', 'fruit (South)'],
      ['ngọt', 'Adj', 'sweet'],
      ['chua', 'Adj', 'sour'],
      ['chín', 'Adj', 'ripe']
    ],
    transcriptNorth: [
      ['Chị ơi, xoài này giá bao nhiêu một cân ạ?', 'Excuse me, how much is this mango per kilogram?'],
      ['Ba mươi nghìn một cân em nhé.', 'It is 30,000 per kilogram.'],
      ['Xoài này chín chưa chị?', 'Are these mangoes ripe yet?'],
      ['Chín vừa rồi, ăn khá ngọt đấy.', 'They are ripe enough and quite sweet.'],
      ['Vậy em lấy hai cân. Với lại cho em thêm ít cam.', 'Then I will take two kilograms. And some oranges as well.']
    ],
    transcriptSouth: [
      ['Chị ơi, xoài này giá bao nhiêu một ký vậy?', 'Excuse me, how much is this mango per kilogram?'],
      ['Ba chục nghìn một ký đó em.', 'It is 30,000 per kilogram.'],
      ['Xoài này chín chưa chị?', 'Are these mangoes ripe yet?'],
      ['Chín vừa rồi, ăn ngọt lắm.', 'They are ripe enough and very sweet.'],
      ['Vậy lấy em hai ký. Với cho em thêm ít cam.', 'Then get me two kilograms. And some oranges as well.']
    ]
  }),

  // ============================================================
  // 4. PHONE CALL
  // ============================================================
  createLesson({
    slug: 'making-a-phone-call',
    title: 'Making a Phone Call',
    level: 'Beginner (A1)',
    description: 'Learn how to start a casual phone call, explain why you are calling, and invite someone to do something.',
    quizNorth: [
      ["1. Ai đang gọi điện?", ["Minh gọi cho Lan", "Lan gọi cho Minh", "Mẹ gọi cho Lan"], 1, "Lan đang gọi cho Minh."],
      ["2. Minh đang làm gì?", ["Đang ăn cơm", "Đang đi làm", "Đang ở nhà"], 1, "Minh đang đi làm."],
      ["3. Lan gọi để làm gì?", ["Hỏi Minh có rảnh tối nay không", "Hỏi Minh có khỏe không", "Hỏi Minh đang ở đâu"], 0, "Lan gọi để hỏi Minh có rảnh tối nay không."],
      ["4. Minh có thể đi không?", ["Có", "Không", "Chưa biết"], 0, "Minh có thể đi."],
      ["5. Hai người dự định làm gì?", ["Đi ăn", "Đi mua sắm", "Đi xem phim"], 0, "Hai người dự định đi ăn."]
    ],
    quizSouth: [
      ["1. Ai đang gọi điện?", ["Minh gọi cho Lan", "Lan gọi cho Minh", "Mẹ gọi cho Lan"], 1, "Lan đang gọi cho Minh."],
      ["2. Minh đang làm gì?", ["Đang ăn cơm", "Đang đi làm", "Đang ở nhà"], 1, "Minh đang đi làm."],
      ["3. Lan gọi để làm gì?", ["Hỏi Minh có rảnh tối nay không", "Hỏi Minh có khỏe không", "Hỏi Minh đang ở đâu"], 0, "Lan gọi để hỏi Minh có rảnh tối nay không."],
      ["4. Minh có thể đi không?", ["Có", "Không", "Chưa biết"], 0, "Minh có thể đi."],
      ["5. Hai người dự định làm gì?", ["Đi ăn", "Đi mua sắm", "Đi xem phim"], 0, "Hai người dự định đi ăn."]
    ],
    vocabNorth: [
      ['gọi điện', 'V', 'to make a phone call'],
      ['đang', 'Adv', 'currently'],
      ['sao thế', 'Phrase', 'what is it? (North)'],
      ['đi cùng', 'V', 'to go together (North)'],
      ['khoảng', 'Adv', 'around'],
      ['tối', 'N', 'evening']
    ],
    vocabSouth: [
      ['gọi điện', 'V', 'to make a phone call'],
      ['đang', 'Adv', 'currently'],
      ['sao vậy', 'Phrase', 'what is it? (South)'],
      ['đi chung', 'V', 'to go together (South)'],
      ['khoảng', 'Adv', 'around'],
      ['tối', 'N', 'evening']
    ],
    transcriptNorth: [
      ['Alo, Minh à? Tớ gọi có làm phiền cậu không?', 'Hello, Minh? Am I disturbing you?'],
      ['Không, tớ đang nghỉ một chút. Có chuyện gì thế?', 'No, I am taking a short break. What is it?'],
      ['Tối nay tớ định đi ăn. Cậu đi cùng tớ nhé?', "I'm planning to go out for dinner tonight. Want to come?"],
      ['Được chứ. Đi lúc nào?', 'Sure. What time?'],
      ['Khoảng bảy giờ. Tớ qua đón cậu.', "Around seven. I'll come pick you up."],
      ['Ừ, vậy lát nữa gặp.', 'Okay, see you later.']
    ],
    transcriptSouth: [
      ['Alo, anh Minh hả? Em gọi có làm phiền anh không?', 'Hello, Minh? Am I disturbing you?'],
      ['Không, anh đang nghỉ một chút. Có chuyện gì vậy?', 'No, I am taking a short break. What is it?'],
      ['Tối nay em tính đi ăn. Anh đi chung với em nha?', "I'm planning to go out for dinner tonight. Want to come?"],
      ['Được chứ. Đi lúc nào?', 'Sure. What time?'],
      ['Khoảng bảy giờ. Em qua đón anh.', "Around seven. I'll come pick you up."],
      ['Ừ, vậy lát gặp.', 'Okay, see you later.']
    ]
  }),

  // ============================================================
  // 5. WEATHER
  // ============================================================
  createLesson({
    slug: 'talking-about-the-weather',
    title: 'Talking About the Weather',
    level: 'Beginner (A1)',
    description: 'Learn how to describe changing weather, talk about forecasts, and give practical advice.',
    quizNorth: [
      ["1. Hôm nay thời tiết như thế nào?", ["Trời lạnh", "Trời nóng", "Trời mưa"], 1, "Hôm nay trời khá nóng."],
      ["2. Buổi sáng thời tiết có như thế nào?", ["Rất nóng", "Khá mát", "Rất lạnh"], 1, "Buổi sáng khá mát."],
      ["3. Buổi chiều có khả năng có gì?", ["Mưa", "Tuyết", "Bão tuyết"], 0, "Buổi chiều có khả năng mưa."],
      ["4. Người nói cần chuẩn bị gì?", ["Áo len", "Ô", "Khăn"], 1, "Người nói nên mang theo ô."],
      ["5. Vì sao nên mang ô?", ["Vì trời có thể mưa", "Vì trời rất lạnh", "Vì trời có tuyết"], 0, "Vì dự báo cho biết trời có thể mưa."]
    ],
    quizSouth: [
      ["1. Hôm nay thời tiết như thế nào?", ["Trời lạnh", "Trời nóng", "Trời mưa"], 1, "Hôm nay trời khá nóng."],
      ["2. Buổi sáng thời tiết có như thế nào?", ["Rất nóng", "Khá mát", "Rất lạnh"], 1, "Buổi sáng khá mát."],
      ["3. Buổi chiều có khả năng có gì?", ["Mưa", "Tuyết", "Bão tuyết"], 0, "Buổi chiều có khả năng mưa."],
      ["4. Người nói cần chuẩn bị gì?", ["Áo len", "Ô", "Khăn"], 1, "Người nói nên mang theo ô."],
      ["5. Vì sao nên mang ô?", ["Vì trời có thể mưa", "Vì trời rất lạnh", "Vì trời có tuyết"], 0, "Vì dự báo cho biết trời có thể mưa."]
    ],
    vocabNorth: [
      ['dự báo', 'V', 'forecast'],
      ['khả năng', 'N', 'possibility'],
      ['có thể', 'Phrase', 'may'],
      ['mát', 'Adj', 'cool'],
      ['mưa rào', 'N', 'shower'],
      ['mang theo', 'V', 'bring (North)']
    ],
    vocabSouth: [
      ['dự báo', 'V', 'forecast'],
      ['khả năng', 'N', 'possibility'],
      ['có thể', 'Phrase', 'may'],
      ['mát', 'Adj', 'cool'],
      ['mưa rào', 'N', 'shower'],
      ['đem theo', 'V', 'bring (South)']
    ],
    transcriptNorth: [
      ['Hôm nay trời nóng nhỉ?', "It's hot today, isn't it?"],
      ['Ừ, nhưng sáng nay khá mát.', 'Yeah, but this morning was quite cool.'],
      ['Chiều nay dự báo thế nào?', 'What does the forecast say for this afternoon?'],
      ['Có khả năng có mưa rào đấy.', 'There is a chance of showers.'],
      ['Thế chắc tớ phải mang ô theo.', 'Then I should probably bring an umbrella.'],
      ['Ừ, mang theo cho yên tâm.', 'Yeah, bring one just in case.']
    ],
    transcriptSouth: [
      ['Nay trời nóng ha?', "It's hot today, isn't it?"],
      ['Ừ, mà sáng nay khá mát.', 'Yeah, but this morning was quite cool.'],
      ['Chiều nay dự báo sao?', 'What does the forecast say for this afternoon?'],
      ['Có khả năng có mưa rào đó.', 'There is a chance of showers.'],
      ['Vậy chắc anh phải đem ô theo.', 'Then I should probably bring an umbrella.'],
      ['Ừ, đem theo cho yên tâm.', 'Yeah, bring one just in case.']
    ]
  }),

  // ============================================================
  // 6. RENTING AN APARTMENT
  // ============================================================
  createLesson({
    slug: 'renting-an-apartment',
    title: 'Renting an Apartment',
    level: 'Elementary (A2)',
    description: 'Learn how to ask about rental conditions, additional costs, furniture, and negotiate a long-term rental.',
    quizNorth: [
      ["1. Người thuê đang hỏi về căn hộ nào?", ["Căn hộ một phòng ngủ", "Căn hộ hai phòng ngủ", "Căn hộ ba phòng ngủ"], 1, "Căn hộ hai phòng ngủ."],
      ["2. Tiền thuê là bao nhiêu?", ["8 triệu", "9 triệu", "10 triệu"], 2, "10 triệu một tháng."],
      ["3. Điện và nước được tính như thế nào?", ["Đã bao gồm", "Chỉ nước bao gồm", "Tính riêng"], 2, "Tính riêng."],
      ["4. Căn hộ có sẵn gì?", ["Giường và tủ lạnh", "Máy giặt và bàn ăn", "Sofa và TV"], 0, "Giường và tủ lạnh."],
      ["5. Người thuê muốn thương lượng điều gì?", ["Tiền thuê", "Tiền điện", "Tiền nước"], 0, "Giảm tiền thuê."]
    ],
    quizSouth: [
      ["1. Người thuê đang hỏi về căn hộ nào?", ["Căn hộ một phòng ngủ", "Căn hộ hai phòng ngủ", "Căn hộ ba phòng ngủ"], 1, "Căn hộ hai phòng ngủ."],
      ["2. Tiền thuê là bao nhiêu?", ["8 triệu", "9 triệu", "10 triệu"], 2, "10 triệu một tháng."],
      ["3. Điện và nước được tính như thế nào?", ["Đã bao gồm", "Chỉ nước bao gồm", "Tính riêng"], 2, "Tính riêng."],
      ["4. Căn hộ có sẵn gì?", ["Giường và tủ lạnh", "Máy giặt và bàn ăn", "Sofa và TV"], 0, "Giường và tủ lạnh."],
      ["5. Người thuê muốn thương lượng điều gì?", ["Tiền thuê", "Tiền điện", "Tiền nước"], 0, "Giảm tiền thuê."]
    ],
    vocabNorth: [
      ['căn hộ', 'N', 'apartment'],
      ['tiền thuê', 'N', 'rent'],
      ['tính riêng', 'V', 'charged separately'],
      ['nội thất', 'N', 'furniture'],
      ['hợp đồng', 'N', 'contract'],
      ['giảm', 'V', 'reduce (North)']
    ],
    vocabSouth: [
      ['căn hộ', 'N', 'apartment'],
      ['tiền thuê', 'N', 'rent'],
      ['tính riêng', 'V', 'charged separately'],
      ['nội thất', 'N', 'furniture'],
      ['hợp đồng', 'N', 'contract'],
      ['bớt', 'V', 'reduce (South)']
    ],
    transcriptNorth: [
      ['Em ơi, căn hộ hai phòng ngủ này giá thuê một tháng là bao nhiêu?', 'How much is the monthly rent for this two-bedroom apartment?'],
      ['Dạ, mười triệu một tháng anh ạ.', 'It is 10 million a month, sir.'],
      ['Các khoản điện nước tính thế nào?', 'How are the electricity and water charges handled?'],
      ['Hai khoản đó tính riêng, không nằm trong tiền thuê.', 'Those two are charged separately and are not included in the rent.'],
      ['Căn hộ có sẵn những nội thất gì?', 'What furniture is already provided?'],
      ['Có giường, tủ lạnh với máy giặt.', 'There is a bed, refrigerator, and washing machine.'],
      ['Nếu anh ký hợp đồng một năm thì giá có thể thương lượng không?', 'If I sign a one-year contract, is the price negotiable?'],
      ['Nếu thuê một năm thì em có thể giảm một chút.', 'If you rent for a year, I can reduce it a little.']
    ],
    transcriptSouth: [
      ['Em ơi, căn hộ hai phòng ngủ này giá thuê một tháng bao nhiêu vậy?', 'How much is the monthly rent for this two-bedroom apartment?'],
      ['Dạ, mười triệu một tháng anh.', 'It is 10 million a month, sir.'],
      ['Các khoản điện nước tính sao?', 'How are the electricity and water charges handled?'],
      ['Hai khoản đó tính riêng, không nằm trong tiền thuê.', 'Those two are charged separately and are not included in the rent.'],
      ['Căn hộ có sẵn nội thất gì?', 'What furniture is already provided?'],
      ['Có giường, tủ lạnh với máy giặt.', 'There is a bed, refrigerator, and washing machine.'],
      ['Nếu anh ký hợp đồng một năm thì giá thương lượng được không?', 'If I sign a one-year contract, is the price negotiable?'],
      ['Nếu thuê một năm thì em bớt cho anh một chút.', 'If you rent for a year, I can reduce it a little.']
    ]
  }),

  // ============================================================
  // 7. SMALL TALK WITH COLLEAGUES
  // ============================================================
  createLesson({
    slug: 'small-talk-with-colleagues',
    title: 'Small Talk with Colleagues',
    level: 'Elementary (A2)',
    description: 'Learn how to make casual lunch plans with colleagues, explain time constraints, and suggest alternatives.',
    quizNorth: [
      ["1. Hai đồng nghiệp đang nói chuyện vào lúc nào?", ["Buổi sáng", "Giờ nghỉ trưa", "Sau giờ làm"], 1, "Giờ nghỉ trưa."],
      ["2. Họ định ăn ở đâu?", ["Quán cơm gần công ty", "Nhà hàng Nhật", "Nhà đồng nghiệp"], 0, "Quán cơm gần công ty."],
      ["3. Vì sao họ không muốn đi xa?", ["Trời mưa", "Không có xe", "Chỉ có một tiếng nghỉ"], 2, "Chỉ có một tiếng nghỉ."],
      ["4. Hôm qua một người đã ăn gì?", ["Phở", "Cơm tấm", "Bún bò"], 1, "Cơm tấm."],
      ["5. Hôm nay họ muốn làm gì khác?", ["Đổi món", "Về nhà", "Ăn tại công ty"], 0, "Đổi món."]
    ],
    quizSouth: [
      ["1. Hai đồng nghiệp đang nói chuyện vào lúc nào?", ["Buổi sáng", "Giờ nghỉ trưa", "Sau giờ làm"], 1, "Giờ nghỉ trưa."],
      ["2. Họ định ăn ở đâu?", ["Quán cơm gần công ty", "Nhà hàng Nhật", "Nhà đồng nghiệp"], 0, "Quán cơm gần công ty."],
      ["3. Vì sao họ không muốn đi xa?", ["Trời mưa", "Không có xe", "Chỉ có một tiếng nghỉ"], 2, "Chỉ có một tiếng nghỉ."],
      ["4. Hôm qua một người đã ăn gì?", ["Phở", "Cơm tấm", "Bún bò"], 1, "Cơm tấm."],
      ["5. Hôm nay họ muốn làm gì khác?", ["Đổi món", "Về nhà", "Ăn tại công ty"], 0, "Đổi món."]
    ],
    vocabNorth: [
      ['giờ nghỉ trưa', 'N', 'lunch break'],
      ['giới hạn', 'N', 'limit'],
      ['mất thời gian', 'V', 'take time'],
      ['gần', 'Adj', 'near'],
      ['đổi món', 'V', 'change dish'],
      ['tiện', 'Adj', 'convenient']
    ],
    vocabSouth: [
      ['giờ nghỉ trưa', 'N', 'lunch break'],
      ['giới hạn', 'N', 'limit'],
      ['mất thời gian', 'V', 'take time'],
      ['gần', 'Adj', 'near'],
      ['đổi món', 'V', 'change dish'],
      ['tiện', 'Adj', 'convenient']
    ],
    transcriptNorth: [
      ['Trưa nay cậu định ăn gì?', 'What are you planning to eat for lunch today?'],
      ['Tớ chưa nghĩ ra. Nhưng mình chỉ có một tiếng thôi.', "I haven't decided. But we only have one hour."],
      ['Vậy đi đâu gần đây thôi, khỏi mất thời gian.', 'Then let us go somewhere nearby so we do not waste time.'],
      ['Quán cơm ngay gần công ty thì sao?', 'How about the rice place near the office?'],
      ['Được đấy. Hôm qua tớ ăn cơm tấm rồi, hôm nay đổi món.', 'Sounds good. I had broken rice yesterday, so I want something different today.'],
      ['Ừ, quán đó có bún bò với phở.', 'Yeah, that place has beef noodles and Pho.']
    ],
    transcriptSouth: [
      ['Trưa nay anh tính ăn gì?', 'What are you planning to eat for lunch today?'],
      ['Em chưa nghĩ ra. Mà mình chỉ có một tiếng thôi.', "I haven't decided. But we only have one hour."],
      ['Vậy đi đâu gần đây thôi, khỏi mất thời gian.', 'Then let us go somewhere nearby so we do not waste time.'],
      ['Quán cơm ngay gần công ty thì sao?', 'How about the rice place near the office?'],
      ['Được đó. Hôm qua em ăn cơm tấm rồi, nay đổi món.', 'Sounds good. I had broken rice yesterday, so I want something different today.'],
      ['Ừ, quán đó có bún bò với phở.', 'Yeah, that place has beef noodles and Pho.']
    ]
  }),

  // ============================================================
  // 8. PHARMACY / CLINIC
  // ============================================================
  createLesson({
    slug: 'going-to-the-pharmacy-clinic',
    title: 'Going to the Pharmacy / Clinic',
    level: 'Elementary (A2)',
    description: 'Learn how to describe symptoms, explain when they started, ask for advice, and understand basic medical instructions.',
    quizNorth: [
      ["1. Người phụ nữ đến hiệu thuốc vì vấn đề gì?", ["Đau đầu và hơi sốt", "Đau chân", "Ho nhiều"], 0, "Đau đầu và hơi sốt."],
      ["2. Cô ấy bắt đầu thấy không khỏe từ khi nào?", ["Sáng nay", "Tối qua", "Hôm kia"], 1, "Tối qua."],
      ["3. Cô ấy có đau bụng không?", ["Có", "Không", "Không nói đến"], 1, "Không."],
      ["4. Nhân viên hỏi về dị ứng để làm gì?", ["Chọn thuốc phù hợp", "Biết cô ấy có sốt không", "Biết cô ấy có cần nghỉ làm không"], 0, "Chọn thuốc phù hợp."],
      ["5. Nếu không đỡ thì nên làm gì?", ["Uống thêm thuốc", "Đi khám bác sĩ", "Nghỉ làm một tuần"], 1, "Đi khám."]
    ],
    quizSouth: [
      ["1. Người phụ nữ đến hiệu thuốc vì vấn đề gì?", ["Đau đầu và hơi sốt", "Đau chân", "Ho nhiều"], 0, "Đau đầu và hơi sốt."],
      ["2. Cô ấy bắt đầu thấy không khỏe từ khi nào?", ["Sáng nay", "Tối qua", "Hôm kia"], 1, "Tối qua."],
      ["3. Cô ấy có đau bụng không?", ["Có", "Không", "Không nói đến"], 1, "Không."],
      ["4. Nhân viên hỏi về dị ứng để làm gì?", ["Chọn thuốc phù hợp", "Biết cô ấy có sốt không", "Biết cô ấy có cần nghỉ làm không"], 0, "Chọn thuốc phù hợp."],
      ["5. Nếu không đỡ thì nên làm gì?", ["Uống thêm thuốc", "Đi khám bác sĩ", "Nghỉ làm một tuần"], 1, "Đi khám."]
    ],
    vocabNorth: [
      ['hiệu thuốc', 'N', 'pharmacy (North)'],
      ['triệu chứng', 'N', 'symptom'],
      ['đau đầu', 'V', 'headache'],
      ['hơi', 'Adv', 'slightly'],
      ['dị ứng', 'V', 'allergic'],
      ['đỡ', 'V', 'feel better']
    ],
    vocabSouth: [
      ['tiệm thuốc', 'N', 'pharmacy (South)'],
      ['triệu chứng', 'N', 'symptom'],
      ['đau đầu', 'V', 'headache'],
      ['hơi', 'Adv', 'slightly'],
      ['dị ứng', 'V', 'allergic'],
      ['đỡ', 'V', 'feel better']
    ],
    transcriptNorth: [
      ['Chị đang thấy trong người thế nào ạ?', 'How are you feeling?'],
      ['Từ tối qua tôi thấy hơi mệt, sáng nay bắt đầu đau đầu.', 'Since last night I have felt a little tired, and this morning I started having a headache.'],
      ['Ngoài ra còn triệu chứng gì khác không?', 'Do you have any other symptoms?'],
      ['Không, chỉ hơi sốt thôi.', 'No, just a slight fever.'],
      ['Chị có từng bị dị ứng với thuốc nào không?', 'Have you ever been allergic to any medication?'],
      ['Không. Chị tư vấn giúp tôi loại phù hợp nhé.', 'No. Please recommend something suitable for me.'],
      ['Chị dùng sau khi ăn. Nếu vài ngày vẫn không đỡ thì nên đi khám.', 'Take it after meals. If you do not improve after a few days, you should see a doctor.']
    ],
    transcriptSouth: [
      ['Chị đang thấy trong người sao rồi?', 'How are you feeling?'],
      ['Từ tối qua em thấy hơi mệt, sáng nay bắt đầu đau đầu.', 'Since last night I have felt a little tired, and this morning I started having a headache.'],
      ['Ngoài ra còn triệu chứng gì khác không?', 'Do you have any other symptoms?'],
      ['Không, chỉ hơi sốt thôi.', 'No, just a slight fever.'],
      ['Chị có từng dị ứng với thuốc nào không?', 'Have you ever been allergic to any medication?'],
      ['Không. Chị tư vấn giúp em loại phù hợp nha.', 'No. Please recommend something suitable for me.'],
      ['Chị uống sau khi ăn. Nếu vài ngày vẫn không đỡ thì đi khám nha.', 'Take it after meals. If you do not improve after a few days, see a doctor.']
    ]
  }),

  // ============================================================
  // 9. SUPERMARKET
  // ============================================================
  createLesson({
    slug: 'supermarket-and-convenience-store',
    title: 'Supermarket & Convenience Store',
    level: 'Elementary (A2)',
    description: 'Learn how to locate products, ask about promotions, compare quantities, and complete a simple purchase.',
    quizNorth: [
      ["1. Người khách đang tìm gì?", ["Nước giặt", "Dầu gội", "Kem đánh răng"], 0, "Nước giặt."],
      ["2. Nước giặt ở đâu?", ["Tầng một", "Cuối cửa hàng", "Gần quầy tính tiền"], 1, "Cuối cửa hàng."],
      ["3. Sản phẩm đang có chương trình gì?", ["Mua một tặng một", "Giảm 20%", "Mua hai giảm 50%"], 1, "Giảm 20%."],
      ["4. Người khách mua bao nhiêu chai?", ["Một chai", "Hai chai", "Ba chai"], 1, "Hai chai."],
      ["5. Vì sao người khách mua hai chai?", ["Vì đang giảm giá", "Vì nhân viên giới thiệu", "Vì cửa hàng sắp đóng cửa"], 0, "Đang giảm giá."]
    ],
    quizSouth: [
      ["1. Người khách đang tìm gì?", ["Nước giặt", "Dầu gội", "Kem đánh răng"], 0, "Nước giặt."],
      ["2. Nước giặt ở đâu?", ["Tầng một", "Cuối cửa hàng", "Gần quầy tính tiền"], 1, "Cuối cửa hàng."],
      ["3. Sản phẩm đang có chương trình gì?", ["Mua một tặng một", "Giảm 20%", "Mua hai giảm 50%"], 1, "Giảm 20%."],
      ["4. Người khách mua bao nhiêu chai?", ["Một chai", "Hai chai", "Ba chai"], 1, "Hai chai."],
      ["5. Vì sao người khách mua hai chai?", ["Vì đang giảm giá", "Vì nhân viên giới thiệu", "Vì cửa hàng sắp đóng cửa"], 0, "Đang giảm giá."]
    ],
    vocabNorth: [
      ['nước giặt', 'N', 'laundry detergent'],
      ['quầy tính tiền', 'N', 'checkout'],
      ['khuyến mãi', 'N', 'promotion'],
      ['túi', 'N', 'bag (North)'],
      ['chai', 'N', 'bottle']
    ],
    vocabSouth: [
      ['nước giặt', 'N', 'laundry detergent'],
      ['quầy tính tiền', 'N', 'checkout'],
      ['khuyến mãi', 'N', 'promotion'],
      ['bịch', 'N', 'plastic bag (South)'],
      ['chai', 'N', 'bottle']
    ],
    transcriptNorth: [
      ['Chị ơi, cho em hỏi nước giặt nằm ở khu nào ạ?', 'Excuse me, which section is the laundry detergent in?'],
      ['Em đi thẳng xuống cuối cửa hàng, rồi rẽ phải nhé.', 'Go straight to the back of the store, then turn right.'],
      ['Loại này hiện có chương trình gì không chị?', 'Does this product have any promotion right now?'],
      ['Hôm nay giảm hai mươi phần trăm em ạ.', 'It is 20 percent off today.'],
      ['Vậy em lấy hai chai.', 'Then I will take two bottles.'],
      ['Em có cần túi không?', 'Do you need a bag?'],
      ['Có ạ, cho em một cái.', 'Yes, one please.']
    ],
    transcriptSouth: [
      ['Chị ơi, cho em hỏi nước giặt nằm ở khu nào vậy?', 'Excuse me, which section is the laundry detergent in?'],
      ['Em đi thẳng xuống cuối cửa hàng rồi quẹo phải nha.', 'Go straight to the back of the store, then turn right.'],
      ['Loại này nay có khuyến mãi gì không chị?', 'Does this product have any promotion today?'],
      ['Hôm nay giảm hai mươi phần trăm đó em.', 'It is 20 percent off today.'],
      ['Vậy lấy em hai chai.', 'Then I will take two bottles.'],
      ['Em có cần bịch không?', 'Do you need a plastic bag?'],
      ['Dạ có, cho em một cái.', 'Yes, one please.']
    ]
  }),

  // ============================================================
  // 10. MAKING AN APPOINTMENT
  // ============================================================
  createLesson({
    slug: 'making-an-appointment',
    title: 'Making an Appointment',
    level: 'Elementary (A2)',
    description: 'Learn how to arrange a meeting, suggest a time, reject an unsuitable option, and settle on a convenient schedule.',
    quizNorth: [
      ["1. Hai người đang sắp xếp việc gì?", ["Một cuộc hẹn", "Một chuyến đi", "Một bữa tiệc"], 0, "Cuộc hẹn."],
      ["2. Người phụ nữ muốn gặp vào ngày nào?", ["Thứ Hai", "Thứ Ba", "Thứ Tư"], 1, "Thứ Ba."],
      ["3. Vì sao buổi sáng không phù hợp?", ["Có cuộc họp", "Phải đi làm", "Phải đi khám"], 0, "Có họp."],
      ["4. Cuối cùng họ hẹn lúc mấy giờ?", ["10 giờ", "2 giờ", "3 giờ"], 2, "3 giờ."],
      ["5. Họ gặp nhau ở đâu?", ["Công ty", "Quán cà phê", "Nhà hàng"], 1, "Quán cà phê."]
    ],
    quizSouth: [
      ["1. Hai người đang sắp xếp việc gì?", ["Một cuộc hẹn", "Một chuyến đi", "Một bữa tiệc"], 0, "Cuộc hẹn."],
      ["2. Người phụ nữ muốn gặp vào ngày nào?", ["Thứ Hai", "Thứ Ba", "Thứ Tư"], 1, "Thứ Ba."],
      ["3. Vì sao buổi sáng không phù hợp?", ["Có cuộc họp", "Phải đi làm", "Phải đi khám"], 0, "Có họp."],
      ["4. Cuối cùng họ hẹn lúc mấy giờ?", ["10 giờ", "2 giờ", "3 giờ"], 2, "3 giờ."],
      ["5. Họ gặp nhau ở đâu?", ["Công ty", "Quán cà phê", "Nhà hàng"], 1, "Quán cà phê."]
    ],
    vocabNorth: [
      ['sắp xếp', 'V', 'arrange'],
      ['lịch', 'N', 'schedule'],
      ['trùng lịch', 'V', 'conflict'],
      ['dời', 'V', 'reschedule'],
      ['phù hợp', 'Adj', 'suitable'],
      ['tiện', 'Adj', 'convenient']
    ],
    vocabSouth: [
      ['sắp xếp', 'V', 'arrange'],
      ['lịch', 'N', 'schedule'],
      ['trùng lịch', 'V', 'conflict'],
      ['dời', 'V', 'reschedule'],
      ['phù hợp', 'Adj', 'suitable'],
      ['tiện', 'Adj', 'convenient']
    ],
    transcriptNorth: [
      ['Thứ Ba cậu có thời gian không? Tớ muốn bàn với cậu một việc.', 'Do you have time on Tuesday? I want to discuss something with you.'],
      ['Thứ Ba sáng tớ có cuộc họp, chiều thì được.', 'I have a meeting Tuesday morning, but the afternoon works.'],
      ['Hai giờ có phù hợp với cậu không?', 'Does two o’clock work for you?'],
      ['Hai giờ hơi sớm. Ba giờ thì tiện hơn.', 'Two is a little early. Three would be more convenient.'],
      ['Được. Vậy mình gặp ở quán cà phê gần công ty.', 'Okay. Then let us meet at the coffee shop near the office.'],
      ['Ừ, tớ sẽ sắp xếp lại lịch.', 'Sure, I will rearrange my schedule.']
    ],
    transcriptSouth: [
      ['Thứ Ba anh có thời gian không? Em muốn bàn với anh một việc.', 'Do you have time on Tuesday? I want to discuss something with you.'],
      ['Thứ Ba sáng anh có cuộc họp, chiều thì được.', 'I have a meeting Tuesday morning, but the afternoon works.'],
      ['Hai giờ có phù hợp với anh không?', 'Does two o’clock work for you?'],
      ['Hai giờ hơi sớm. Ba giờ tiện hơn.', 'Two is a little early. Three would be more convenient.'],
      ['Được. Vậy mình gặp ở quán cà phê gần công ty.', 'Okay. Then let us meet at the coffee shop near the office.'],
      ['Ừ, để anh sắp xếp lại lịch.', 'Sure, I will rearrange my schedule.']
    ]
  }),

  // ============================================================
  // 11. MEETING THE PARENTS
  // ============================================================
  createLesson({
    slug: 'meeting-the-parents-in-laws',
    title: 'Meeting the Parents / In-laws',
    level: 'Intermediate (B1)',
    description: 'Learn how to talk about meeting a partner’s parents, preparing a small gift, and behaving appropriately.',
    quizNorth: [
      ["1. Vì sao Lan mời Minh đến nhà?", ["Để ăn cơm và giới thiệu với bố mẹ", "Để làm việc", "Để tổ chức sinh nhật", "Để đi du lịch"], 0, "Giới thiệu bố mẹ."],
      ["2. Minh cảm thấy thế nào?", ["Hào hứng", "Hơi hồi hộp", "Buồn", "Bực mình"], 1, "Hồi hộp."],
      ["3. Minh định chuẩn bị gì?", ["Hoa và trái cây", "Quần áo", "Đồ điện tử", "Bánh sinh nhật"], 0, "Hoa và trái cây."],
      ["4. Lan nghĩ Minh nên làm gì?", ["Nói chuyện tự nhiên và lễ phép", "Mua quà thật đắt", "Nói thật ít", "Đến thật sớm vài tiếng"], 0, "Tự nhiên và lễ phép."],
      ["5. Lan cho rằng điều gì không cần thiết?", ["Quà quá đắt tiền", "Hoa", "Trái cây", "Ăn cơm cùng gia đình"], 0, "Quà đắt tiền."]
    ],
    quizSouth: [
      ["1. Vì sao Lan mời Minh đến nhà?", ["Để ăn cơm và giới thiệu với ba mẹ", "Để làm việc", "Để tổ chức sinh nhật", "Để đi du lịch"], 0, "Giới thiệu ba mẹ."],
      ["2. Minh cảm thấy thế nào?", ["Hào hứng", "Hơi hồi hộp", "Buồn", "Bực mình"], 1, "Hồi hộp."],
      ["3. Minh định chuẩn bị gì?", ["Hoa và trái cây", "Quần áo", "Đồ điện tử", "Bánh sinh nhật"], 0, "Hoa và trái cây."],
      ["4. Lan nghĩ Minh nên làm gì?", ["Nói chuyện tự nhiên và lễ phép", "Mua quà thật đắt", "Nói thật ít", "Đến thật sớm vài tiếng"], 0, "Tự nhiên và lễ phép."],
      ["5. Lan cho rằng điều gì không cần thiết?", ["Quà quá đắt tiền", "Hoa", "Trái cây", "Ăn cơm cùng gia đình"], 0, "Quà đắt tiền."]
    ],
    vocabNorth: [
      ['ra mắt', 'V', 'meet family'],
      ['hồi hộp', 'Adj', 'nervous'],
      ['dễ tính', 'Adj', 'easygoing'],
      ['lễ phép', 'Adj', 'polite'],
      ['tự nhiên', 'Adj', 'natural']
    ],
    vocabSouth: [
      ['ra mắt', 'V', 'meet family'],
      ['hồi hộp', 'Adj', 'nervous'],
      ['dễ tính', 'Adj', 'easygoing'],
      ['lễ phép', 'Adj', 'polite'],
      ['tự nhiên', 'Adj', 'natural']
    ],
    transcriptNorth: [
      ['Chủ nhật này anh qua nhà em ăn cơm nhé? Em muốn anh ra mắt bố mẹ.', 'Would you like to come over for dinner this Sunday? I want you to meet my parents.'],
      ['Được chứ. Nhưng anh hơi hồi hộp, vì đây là lần đầu anh gặp bố mẹ em.', 'Sure. But I am a little nervous because it is my first time meeting your parents.'],
      ['Có gì đâu mà hồi hộp. Bố mẹ em dễ tính lắm.', 'There is nothing to be nervous about. My parents are very easygoing.'],
      ['Anh có nên chuẩn bị gì không? Anh định mua ít hoa với trái cây.', 'Should I prepare anything? I was thinking of buying some flowers and fruit.'],
      ['Vậy là ổn rồi. Anh cứ nói chuyện tự nhiên, lễ phép là được.', 'That is enough. Just be natural and polite.']
    ],
    transcriptSouth: [
      ['Chủ nhật này anh qua nhà em ăn cơm nha? Em muốn anh ra mắt ba mẹ.', 'Would you like to come over for dinner this Sunday? I want you to meet my parents.'],
      ['Được chứ. Mà anh hơi hồi hộp, lần đầu gặp ba mẹ em mà.', 'Sure. But I am a little nervous because it is my first time meeting your parents.'],
      ['Có gì đâu mà hồi hộp. Ba mẹ em dễ tính lắm.', 'There is nothing to be nervous about. My parents are very easygoing.'],
      ['Anh có cần chuẩn bị gì không? Anh tính mua ít hoa với trái cây.', 'Should I prepare anything? I was thinking of buying some flowers and fruit.'],
      ['Vậy là ổn rồi. Anh cứ nói chuyện tự nhiên, lễ phép là được.', 'That is enough. Just be natural and polite.']
    ]
  }),

  // ============================================================
  // 12. FAMILY BACKGROUND
  // ============================================================
  createLesson({
    slug: 'talking-about-family-background',
    title: 'Talking About Family Background',
    level: 'Intermediate (B1)',
    description: 'Learn how to describe where family members live, explain moving away from home, and talk about how long you have lived somewhere.',
    quizNorth: [
      ["1. Gia đình của Hương hiện đang sống ở đâu?", ["Hà Nội", "Đà Nẵng", "Thành phố Hồ Chí Minh", "Hải Phòng"], 0, "Bố mẹ ở quê."],
      ["2. Hương có mấy anh chị em?", ["Hai", "Ba", "Bốn", "Năm"], 1, "Ba anh em."],
      ["3. Anh trai Hương đang làm ở đâu?", ["Hà Nội", "Đà Nẵng", "Nghệ An", "Hải Phòng"], 1, "Đà Nẵng."],
      ["4. Hương đã ở Thành phố Hồ Chí Minh bao lâu?", ["Gần hai năm", "Gần ba năm", "Gần bốn năm", "Hơn năm năm"], 2, "Gần bốn năm."],
      ["5. Vì sao Hương thường về quê?", ["Công việc", "Gia đình", "Bạn bè", "Du lịch"], 1, "Gia đình."]
    ],
    quizSouth: [
      ["1. Gia đình của Hương hiện đang sống ở đâu?", ["Hà Nội", "Đà Nẵng", "Thành phố Hồ Chí Minh", "Hải Phòng"], 0, "Ba mẹ ở quê."],
      ["2. Hương có mấy anh chị em?", ["Hai", "Ba", "Bốn", "Năm"], 1, "Ba anh em."],
      ["3. Anh trai Hương đang làm ở đâu?", ["Hà Nội", "Đà Nẵng", "Nghệ An", "Hải Phòng"], 1, "Đà Nẵng."],
      ["4. Hương đã ở Thành phố Hồ Chí Minh bao lâu?", ["Gần hai năm", "Gần ba năm", "Gần bốn năm", "Hơn năm năm"], 2, "Gần bốn năm."],
      ["5. Vì sao Hương thường về quê?", ["Công việc", "Gia đình", "Bạn bè", "Du lịch"], 1, "Gia đình."]
    ],
    vocabNorth: [
      ['quê quán', 'N', 'hometown'],
      ['xa nhà', 'Phrase', 'away from home'],
      ['anh cả', 'N', 'eldest brother'],
      ['bố mẹ', 'N', 'parents (North)']
    ],
    vocabSouth: [
      ['quê quán', 'N', 'hometown'],
      ['xa nhà', 'Phrase', 'away from home'],
      ['anh cả', 'N', 'eldest brother'],
      ['ba mẹ', 'N', 'parents (South)']
    ],
    transcriptNorth: [
      ['Nhà cậu ở Hà Nội từ trước đến giờ à?', 'Has your family lived in Hanoi all this time?'],
      ['Không. Quê tớ ở Nghệ An, bố mẹ vẫn ở quê.', 'No. My hometown is Nghe An, and my parents still live there.'],
      ['Thế anh em cậu thì sao?', 'What about your siblings?'],
      ['Ba anh em tớ đều đi học rồi làm việc xa nhà.', 'All three of us went away to study and then work.'],
      ['Anh cả tớ đang làm ở Đà Nẵng, còn tớ vào Thành phố Hồ Chí Minh gần bốn năm rồi.', 'My eldest brother works in Da Nang, and I have been in Ho Chi Minh City for nearly four years.'],
      ['Chắc cậu cũng nhớ nhà nhiều nhỉ?', 'You must miss home quite a bit.'],
      ['Ừ, nên có thời gian là tớ lại về thăm bố mẹ.', 'Yeah, so whenever I have time, I go back to visit my parents.']
    ],
    transcriptSouth: [
      ['Nhà em ở Sài Gòn từ trước tới giờ hả?', 'Has your family lived in Saigon all this time?'],
      ['Không. Quê em ở Nghệ An, ba mẹ vẫn ở quê.', 'No. My hometown is Nghe An, and my parents still live there.'],
      ['Vậy anh em em thì sao?', 'What about your siblings?'],
      ['Ba anh em em đều đi học rồi đi làm xa nhà.', 'All three of us went away to study and then work.'],
      ['Anh cả em đang làm ở Đà Nẵng, còn em vô Thành phố Hồ Chí Minh gần bốn năm rồi.', 'My eldest brother works in Da Nang, and I have been in Ho Chi Minh City for nearly four years.'],
      ['Chắc em cũng nhớ nhà nhiều ha?', 'You must miss home quite a bit.'],
      ['Ừ, nên có thời gian là em lại về thăm ba mẹ.', 'Yeah, so whenever I have time, I go back to visit my parents.']
    ]
  }),

  // ============================================================
  // 13. TET
  // ============================================================
  createLesson({
    slug: 'tet-holiday-and-cultural-customs',
    title: 'Tet Holiday & Cultural Customs',
    level: 'Intermediate (B1)',
    description: 'Learn how to talk about Tet preparations, returning home early, and family activities before the holiday.',
    quizNorth: [
      ["1. Gia đình Mai dự định đón Tết ở đâu?", ["Ở thành phố", "Ở quê", "Ở nước ngoài", "Ở nhà bạn"], 1, "Về quê."],
      ["2. Vì sao họ về sớm?", ["Để đi du lịch", "Để chuẩn bị nhà cửa và đồ ăn", "Để mua quà", "Để nghỉ ngơi"], 1, "Chuẩn bị nhà cửa."],
      ["3. Gia đình thường làm gì trước Tết?", ["Dọn dẹp và chuẩn bị đồ ăn", "Đi làm thêm", "Đi du lịch", "Tổ chức tiệc công ty"], 0, "Dọn dẹp."],
      ["4. Vì sao Mai thích Tết ở quê?", ["Vì yên tĩnh hơn và gia đình sum họp", "Vì ít người", "Vì rẻ hơn", "Vì có nhiều khách sạn"], 0, "Sum họp."],
      ["5. Điều gì quan trọng nhất với Mai vào dịp Tết?", ["Nhận lì xì", "Nghỉ làm", "Gia đình quây quần", "Ăn nhiều"], 2, "Quây quần."]
    ],
    quizSouth: [
      ["1. Gia đình Mai dự định đón Tết ở đâu?", ["Ở thành phố", "Ở quê", "Ở nước ngoài", "Ở nhà bạn"], 1, "Về quê."],
      ["2. Vì sao họ về sớm?", ["Để đi du lịch", "Để chuẩn bị nhà cửa và đồ ăn", "Để mua quà", "Để nghỉ ngơi"], 1, "Chuẩn bị nhà cửa."],
      ["3. Gia đình thường làm gì trước Tết?", ["Dọn dẹp và chuẩn bị đồ ăn", "Đi làm thêm", "Đi du lịch", "Tổ chức tiệc công ty"], 0, "Dọn dẹp."],
      ["4. Vì sao Mai thích Tết ở quê?", ["Vì yên tĩnh hơn và gia đình sum họp", "Vì ít người", "Vì rẻ hơn", "Vì có nhiều khách sạn"], 0, "Sum họp."],
      ["5. Điều gì quan trọng nhất với Mai vào dịp Tết?", ["Nhận lì xì", "Nghỉ làm", "Gia đình quây quần", "Ăn nhiều"], 2, "Quây quần."]
    ],
    vocabNorth: [
      ['đón Tết', 'V', 'celebrate Tet'],
      ['về quê', 'V', 'return to hometown'],
      ['dọn dẹp', 'V', 'clean up'],
      ['sum họp', 'V', 'reunite'],
      ['quây quần', 'V', 'gather']
    ],
    vocabSouth: [
      ['đón Tết', 'V', 'celebrate Tet'],
      ['về quê', 'V', 'return to hometown'],
      ['dọn dẹp', 'V', 'clean up'],
      ['sum họp', 'V', 'reunite'],
      ['quây quần', 'V', 'gather']
    ],
    transcriptNorth: [
      ['Tết này cậu có về quê không?', 'Are you going back to your hometown this Tet?'],
      ['Có. Năm nay nhà tớ về sớm hơn mọi năm.', 'Yes. This year my family is going back earlier than usual.'],
      ['Sao lại về sớm thế?', 'Why are you going back so early?'],
      ['Bố mẹ tớ muốn về trước để dọn nhà với sắm Tết.', 'My parents want to go back early to clean the house and shop for Tet.'],
      ['Về quê ăn Tết lúc nào cũng có không khí hơn nhỉ.', 'Tet in the hometown always has a special atmosphere, doesn’t it?'],
      ['Ừ, nhất là lúc cả nhà quây quần với nhau.', 'Yeah, especially when the whole family gathers together.']
    ],
    transcriptSouth: [
      ['Tết này em có về quê không?', 'Are you going back to your hometown this Tet?'],
      ['Có. Năm nay nhà em về sớm hơn mọi năm.', 'Yes. This year my family is going back earlier than usual.'],
      ['Sao về sớm vậy?', 'Why are you going back so early?'],
      ['Ba mẹ em muốn về trước để dọn nhà với sắm Tết.', 'My parents want to go back early to clean the house and shop for Tet.'],
      ['Về quê ăn Tết lúc nào cũng có không khí hơn ha.', 'Tet in the hometown always has a special atmosphere, doesn’t it?'],
      ['Ừ, nhất là lúc cả nhà quây quần với nhau.', 'Yeah, especially when the whole family gathers together.']
    ]
  }),

  // ============================================================
  // 14. WEDDING INVITATION
  // ============================================================
  createLesson({
    slug: 'wedding-invitation-and-etiquette',
    title: 'Wedding Invitation & Etiquette',
    level: 'Intermediate (B1)',
    description: 'Learn how to respond to a wedding invitation, explain a possible conflict, and communicate your plans politely.',
    quizNorth: [
      ["1. Vì sao Nam chưa chắc có thể đi đám cưới?", ["Bận việc gia đình", "Có thể đi công tác", "Không thích đám cưới", "Không nhận được thiệp"], 1, "Đi công tác."],
      ["2. Đám cưới diễn ra khi nào?", ["Cùng ngày Nam có thể đi công tác", "Cuối tuần sau", "Tháng sau", "Ngày lễ"], 0, "Cùng ngày."],
      ["3. Nếu không đi được, Nam định làm gì?", ["Không làm gì", "Gửi lời chúc và tiền mừng", "Đợi cô dâu gọi", "Gửi quà sau"], 1, "Gửi tiền mừng."],
      ["4. Vì sao nên báo sớm?", ["Để cô dâu chú rể chủ động sắp xếp", "Vì sẽ bị phạt", "Vì phải mua quà sớm", "Vì đám cưới kéo dài"], 0, "Chủ động."],
      ["5. Nam sẽ làm gì trước?", ["Mua quà", "Kiểm tra lại lịch công tác", "Báo không đi", "Gọi cô dâu ngay"], 1, "Kiểm tra lịch."]
    ],
    quizSouth: [
      ["1. Vì sao Nam chưa chắc có thể đi đám cưới?", ["Bận việc gia đình", "Có thể đi công tác", "Không thích đám cưới", "Không nhận được thiệp"], 1, "Đi công tác."],
      ["2. Đám cưới diễn ra khi nào?", ["Cùng ngày Nam có thể đi công tác", "Cuối tuần sau", "Tháng sau", "Ngày lễ"], 0, "Cùng ngày."],
      ["3. Nếu không đi được, Nam định làm gì?", ["Không làm gì", "Gửi lời chúc và tiền mừng", "Đợi cô dâu gọi", "Gửi quà sau"], 1, "Gửi tiền mừng."],
      ["4. Vì sao nên báo sớm?", ["Để cô dâu chú rể chủ động sắp xếp", "Vì sẽ bị phạt", "Vì phải mua quà sớm", "Vì đám cưới kéo dài"], 0, "Chủ động."],
      ["5. Nam sẽ làm gì trước?", ["Mua quà", "Kiểm tra lại lịch công tác", "Báo không đi", "Gọi cô dâu ngay"], 1, "Kiểm tra lịch."]
    ],
    vocabNorth: [
      ['thiệp cưới', 'N', 'wedding invitation'],
      ['đám cưới', 'N', 'wedding'],
      ['tiền mừng', 'N', 'gift money'],
      ['đi công tác', 'V', 'business trip'],
      ['báo trước', 'V', 'let know in advance']
    ],
    vocabSouth: [
      ['thiệp cưới', 'N', 'wedding invitation'],
      ['đám cưới', 'N', 'wedding'],
      ['tiền mừng', 'N', 'gift money'],
      ['đi công tác', 'V', 'business trip'],
      ['báo trước', 'V', 'let know in advance']
    ],
    transcriptNorth: [
      ['Cậu nhận được thiệp cưới của Minh chưa?', 'Have you received Minh’s wedding invitation?'],
      ['Rồi. Nhưng hôm đó có thể tớ phải đi công tác.', 'Yes. But I might have to go on a business trip that day.'],
      ['Thế cậu đã biết chắc lịch chưa?', 'Do you know your schedule for sure yet?'],
      ['Chưa. Tớ phải kiểm tra lại đã.', 'Not yet. I need to check it again.'],
      ['Nếu không đi được thì báo sớm cho Minh nhé.', 'If you cannot go, let Minh know in advance.'],
      ['Ừ. Tớ sẽ báo ngay khi biết chắc.', 'Sure. I will let him know as soon as I know for sure.']
    ],
    transcriptSouth: [
      ['Em nhận được thiệp cưới của Minh chưa?', 'Have you received Minh’s wedding invitation?'],
      ['Rồi. Mà hôm đó có thể anh phải đi công tác.', 'Yes. But I might have to go on a business trip that day.'],
      ['Vậy anh biết chắc lịch chưa?', 'Do you know your schedule for sure yet?'],
      ['Chưa. Anh phải kiểm tra lại đã.', 'Not yet. I need to check it again.'],
      ['Nếu không đi được thì báo sớm cho Minh nha.', 'If you cannot go, let Minh know in advance.'],
      ['Ừ. Anh biết chắc là báo liền.', 'Sure. I will let him know as soon as I know for sure.']
    ]
  }),

  // ============================================================
  // 15. FEELINGS & EMOTIONS
  // ============================================================
  createLesson({
    slug: 'expressing-feelings-and-emotions',
    title: 'Expressing Feelings & Emotions',
    level: 'Intermediate (B1)',
    description: 'Learn how to describe emotional states, explain the reason behind them, and discuss possible solutions at work.',
    quizNorth: [
      ["1. Vì sao An nhận ra Mai đang có chuyện?", ["Mai chủ động kể", "Mai trông mệt mỏi", "Sếp nói", "Mai nghỉ làm"], 1, "Trông mệt mỏi."],
      ["2. Mai đang gặp vấn đề gì?", ["Công việc ít", "Khối lượng công việc tăng", "Được giao việc mới", "Không có việc"], 1, "Khối lượng công việc tăng."],
      ["3. Mai cảm thấy thế nào?", ["Thoải mái", "Quá tải và mất động lực", "Hào hứng", "Buồn vì đồng nghiệp"], 1, "Quá tải."],
      ["4. An gợi ý Mai làm gì?", ["Nghỉ việc ngay", "Nói chuyện với quản lý", "Làm thêm", "Tìm việc mới ngay"], 1, "Nói chuyện quản lý."],
      ["5. Mai có muốn bỏ việc ngay không?", ["Có", "Không", "Chưa nói đến"], 1, "Không."]
    ],
    quizSouth: [
      ["1. Vì sao An nhận ra Mai đang có chuyện?", ["Mai chủ động kể", "Mai trông mệt mỏi", "Sếp nói", "Mai nghỉ làm"], 1, "Trông mệt mỏi."],
      ["2. Mai đang gặp vấn đề gì?", ["Công việc ít", "Khối lượng công việc tăng", "Được giao việc mới", "Không có việc"], 1, "Khối lượng công việc tăng."],
      ["3. Mai cảm thấy thế nào?", ["Thoải mái", "Quá tải và mất động lực", "Hào hứng", "Buồn vì đồng nghiệp"], 1, "Quá tải."],
      ["4. An gợi ý Mai làm gì?", ["Nghỉ việc ngay", "Nói chuyện với quản lý", "Làm thêm", "Tìm việc mới ngay"], 1, "Nói chuyện quản lý."],
      ["5. Mai có muốn bỏ việc ngay không?", ["Có", "Không", "Chưa nói đến"], 1, "Không."]
    ],
    vocabNorth: [
      ['quá tải', 'Adj', 'overloaded'],
      ['mất động lực', 'V', 'lose motivation'],
      ['khối lượng công việc', 'N', 'workload'],
      ['kiệt sức', 'Adj', 'burned out'],
      ['chia sẻ', 'V', 'share'],
      ['trao đổi', 'V', 'discuss']
    ],
    vocabSouth: [
      ['quá tải', 'Adj', 'overloaded'],
      ['mất động lực', 'V', 'lose motivation'],
      ['khối lượng công việc', 'N', 'workload'],
      ['kiệt sức', 'Adj', 'burned out'],
      ['chia sẻ', 'V', 'share'],
      ['trao đổi', 'V', 'discuss']
    ],
    transcriptNorth: [
      ['Dạo này trông cậu mệt thế? Có chuyện gì à?', 'You look tired lately. Is something wrong?'],
      ['Không hẳn. Chỉ là khối lượng công việc tăng nên tớ hơi quá tải.', 'Not really. The workload has increased, so I feel a bit overloaded.'],
      ['Thế cậu có thấy mất động lực không?', 'Do you feel like you are losing motivation?'],
      ['Có. Tớ vẫn thích công việc này nhưng cứ thế này thì hơi khó.', 'Yes. I still like this job, but it is getting difficult like this.'],
      ['Hay cậu thử trao đổi với quản lý xem sao?', 'Maybe you could discuss it with your manager.'],
      ['Ừ, chắc tớ nên chia sẻ rõ tình hình của mình.', 'Yeah, I think I should explain my situation clearly.']
    ],
    transcriptSouth: [
      ['Dạo này thấy em mệt quá vậy? Có chuyện gì hả?', 'You look tired lately. Is something wrong?'],
      ['Không hẳn. Chỉ là khối lượng công việc tăng nên em hơi quá tải.', 'Not really. The workload has increased, so I feel a bit overloaded.'],
      ['Vậy em có thấy mất động lực không?', 'Do you feel like you are losing motivation?'],
      ['Có. Em vẫn thích công việc này nhưng cứ thế này thì hơi khó.', 'Yes. I still like this job, but it is getting difficult like this.'],
      ['Hay em thử trao đổi với quản lý xem sao?', 'Maybe you could discuss it with your manager.'],
      ['Ừ, chắc em nên chia sẻ rõ tình hình của mình.', 'Yeah, I think I should explain my situation clearly.']
    ]
  })
];
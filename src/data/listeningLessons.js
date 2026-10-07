const createLesson = ({ 
  slug, 
  title, 
  level, 
  description, 
  audioNorthFile,
  audioSouthFile,
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
    audioUrl: `/audio/listening-lessons/${audioNorthFile}`,
    transcript: transcriptNorth.map(([vietnamese, english]) => ({ vietnamese, english }))
  },
  southern: {
    quiz: quizSouth.map(([question, options, correct, explanation]) => ({ question, options, correct, explanation })),
    vocabulary: vocabSouth.map(([word, type, meaning]) => ({ word, type, meaning })),
    audioUrl: `/audio/listening-lessons/${audioSouthFile}`,
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
    audioNorthFile: 'appointment-north.wav',
    audioSouthFile: 'appointment-south.wav',
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

  // 2. COFFEE SHOP
  createLesson({
    slug: 'at-a-coffee-shop',
    title: 'At a Coffee Shop',
    level: 'Beginner (A1)',
    description: 'Learn how to describe drink preferences and customize a coffee order at a Vietnamese cafe.',
    audioNorthFile: 'at-coffee-shop-north.wav',
    audioSouthFile: 'at-coffee-shop-south.wav',
    quizNorth: [
      ["1. Anh đã gọi gì?", ["Cà phê đen", "Cà phê sữa", "Trà đá"], 0, "The customer ordered a black coffee, \"Cho anh một cà phê đen.\""],
      ["2. Anh ấy muốn cà phê như thế nào?", ["Ít đường", "Không đường", "Nhiều sữa"], 1, "He said \"không đường\" which means without sugar."],
      ["3. Anh ấy có uống đá không?", ["Không đá", "Ít đá", "Nhiều đá"], 1, "He said \"ít đá thôi\" which means less ice."],
      ["4. Chị ấy uống gì?", ["Trà đào", "Trà đá", "Nước cam"], 0, "trà is tea, đào is peach."],
      ["5. Hai người có gọi đồ ăn không?", ["Có, gọi bánh mì", "Có, gọi bánh ngọt", "Không"], 2, "He said \"Không, vậy đủ rồi.\" which means No, that's enough."]
    ],
    quizSouth: [
      ["1. Anh đã gọi gì?", ["Cà phê đen", "Bạc xỉu", "Trà đá"], 0, "The customer ordered a black coffee, \"Cho anh một cà phê đen.\""],
      ["2. Anh ấy muốn cà phê như thế nào?", ["Ít đường", "Không đường", "Nhiều sữa"], 1, "He said \"không đường\" which means without sugar."],
      ["3. Anh ấy có uống đá không?", ["Không đá", "Ít đá", "Nhiều đá"], 1, "He said \"ít đá thôi\" which means less ice."],
      ["4. Chị ấy uống gì?", ["Trà đào", "Trà đá", "Nước cam"], 0, "trà is tea, đào is peach."],
      ["5. Hai người có gọi đồ ăn không?", ["Có, gọi bánh mì", "Có, gọi bánh ngọt", "Không"], 2, "He said \"Không, vậy đủ rồi.\" which means No, that's enough."]
    ],
    vocabNorth: [
      ['cà phê đen', 'N', 'black coffee'],
      ['không đường', 'Phrase', 'without sugar'],
      ['ít đá', 'Phrase', 'less ice'],
      ['trà đào', 'N', 'peach tea'],
      ['gọi', 'V', 'to order'],
      ['đồ ăn', 'N', 'food'],
      ['vậy đủ rồi', 'Phrase', 'that\'s enough']
    ],
    vocabSouth: [
      ['cà phê đen', 'N', 'black coffee'],
      ['không đường', 'Phrase', 'without sugar'],
      ['ít đá', 'Phrase', 'less ice'],
      ['trà đào', 'N', 'peach tea'],
      ['gọi', 'V', 'to order'],
      ['đồ ăn', 'N', 'food'],
      ['vậy đủ rồi', 'Phrase', 'that\'s enough']
    ],
    transcriptNorth: [
      ['Anh muốn uống gì ạ?', 'What would you like to drink?'],
      ['Cho anh một cà phê đen, không đường.', 'A black coffee without sugar, please.'],
      ['Anh uống đá bình thường hay ít đá?', 'Regular ice or less ice?'],
      ['Ít đá thôi.', 'Less ice, please.'],
      ['Còn chị dùng gì?', 'And what would you like?'],
      ['Cho chị một trà đào.', 'A peach tea.'],
      ['Anh chị muốn gọi đồ ăn không ạ?', 'Do you want to order any food?'],
      ['Không, vậy đủ rồi.', 'No, that\'s enough.']
    ],
    transcriptSouth: [
      ['Dạ anh muốn uống gì?', 'What would you like to drink?'],
      ['Cho anh một cà phê đen, không đường.', 'A black coffee without sugar, please.'],
      ['Anh uống đá bình thường hay ít đá?', 'Regular ice or less ice?'],
      ['Ít đá thôi.', 'Less ice, please.'],
      ['Còn chị dùng gì?', 'And what would you like?'],
      ['Cho chị một trà đào.', 'A peach tea.'],
      ['Anh chị muốn gọi đồ ăn không?', 'Do you want to order any food?'],
      ['Không, vậy đủ rồi.', 'No, that\'s enough.']
    ]
  }),

  // 3. BUYING FRUIT
  createLesson({
    slug: 'buying-fruit',
    title: 'Buying Fruit',
    level: 'Beginner (A1)',
    description: 'Learn how to ask about price, quality, quantity, and choose fresh fruit at a local market.',
    audioNorthFile: 'buying-fruit-north.wav',
    audioSouthFile: 'buying-fruit-south.wav',
    quizNorth: [
      ["1. Chị ấy muốn mua gì?", ["Cam", "Xoài", "Chuối"], 1, "The customer asks about the price of mangoes first: \"Xoài bao nhiêu tiền...?\""],
      ["2. Xoài bao nhiêu tiền?", ["20 nghìn", "30 nghìn", "40 nghìn"], 1, "The seller states the price: \"Ba mươi nghìn em nhé.\""],
      ["3. Người bán nói xoài như thế nào?", ["Chua", "Ngon", "Ngọt"], 2, "The seller describes the mangoes: \"ăn ngọt lắm.\""],
      ["4. Chị ấy mua bao nhiêu xoài?", ["Một cân", "Hai cân", "Ba cân"], 1, "The customer says: \"Vậy em lấy hai cân.\""],
      ["5. Chị ấy mua thêm gì?", ["Cam", "Chuối", "Táo"], 0, "The customer adds: \"cho em thêm nửa cân cam.\""]
    ],
    quizSouth: [
      ["1. Chị ấy muốn mua gì?", ["Cam", "Xoài", "Chuối"], 1, "The customer asks about the price of mangoes first: \"Xoài bao nhiêu tiền một ký vậy?\""],
      ["2. Xoài bao nhiêu tiền?", ["20 ngàn", "30 ngàn", "40 ngàn"], 1, "The seller states the price: \"Ba chục ngàn một ký.\""],
      ["3. Người bán nói xoài như thế nào?", ["Chua", "Ngon", "Ngọt"], 2, "The seller describes the mangoes: \"ăn ngọt lắm.\""],
      ["4. Chị ấy mua bao nhiêu xoài?", ["Một ký", "Hai ký", "Ba ký"], 1, "The customer says: \"Vậy lấy em hai ký.\""],
      ["5. Chị ấy mua thêm gì?", ["Cam", "Chuối", "Táo"], 0, "The customer adds: \"cho em thêm nửa ký cam.\""]
    ],
    vocabNorth: [
      ['quả', 'N', 'fruit'],
      ['một cân', 'N', 'one kilogram'],
      ['nửa cân', 'N', 'half a kilogram'],
      ['bao nhiêu tiền', 'N', 'how much'],
      ['ngọt', 'Adj', 'sweet'],
      ['chua', 'Adj', 'sour'],
      ['chín', 'Adj', 'ripe'],
      ['ngon', 'Adj', 'delicious']
    ],
    vocabSouth: [
      ['trái', 'N', 'fruit'],
      ['một ký', 'N', 'one kilogram'],
      ['nửa ký', 'N', 'half a kilogram'],
      ['bao nhiêu tiền', 'N', 'how much'],
      ['ngọt', 'Adj', 'sweet'],
      ['chua', 'Adj', 'sour'],
      ['chín', 'Adj', 'ripe'],
      ['ngon', 'Adj', 'delicious']
    ],
    transcriptNorth: [
      ['Chị ơi, xoài bao nhiêu tiền một cân ạ?', 'Excuse me, how much is this mango per kilogram?'],
      ['Ba mươi nghìn em nhé.', 'It is 30,000 per kilogram.'],
      ['Xoài này chín chưa chị?', 'Are these mangoes ripe yet?'],
      ['Chín vừa rồi, ăn ngọt lắm.', 'They are ripe enough and very sweet.'],
      ['Vậy em lấy hai cân. Với lại cho em thêm nửa cân cam.', 'Then I will take two kilograms. And a half kilogram of oranges as well.']
    ],
    transcriptSouth: [
      ['Chị ơi, xoài bao nhiêu tiền một ký vậy?', 'Excuse me, how much is this mango per kilogram?'],
      ['Ba chục ngàn một ký đó em.', 'It is 30,000 per kilogram.'],
      ['Xoài này chín chưa chị?', 'Are these mangoes ripe yet?'],
      ['Chín vừa rồi, ăn ngọt lắm.', 'They are ripe enough and very sweet.'],
      ['Vậy lấy em hai ký. Với cho em thêm nửa ký cam.', 'Then get me two kilograms. And a half kilogram of oranges as well.']
    ]
  }),

  // 4. PHONE CALL
  createLesson({
    slug: 'making-a-phone-call',
    title: 'Making a Phone Call',
    level: 'Beginner (A1)',
    description: 'Learn how to start a casual phone call, explain why you are calling, and invite someone to do something.',
    audioNorthFile: 'making-a-phone-call-north.wav',
    audioSouthFile: 'making-a-phone-call-south.wav',
    quizNorth: [
      ["1. Ai là người đang nghe điện thoại?", ["Minh", "Linh", "Bình"], 0, "Minh is the one receiving the call: \"Alo, Minh à?\""],
      ["2. Làm phiền là gì?", ["Disturb", "Talk", "Text"], 0, "Disturb means làm phiền."],
      ["3. Anh ấy đang làm gì?", ["Đang ăn cơm", "Đang đi làm", "Đang nghỉ ngơi"], 2, "Minh is taking a break: \"anh đang nghỉ một chút\"."],
      ["4. Minh có thể đi không?", ["Có", "Không", "Chưa biết"], 0, "Minh agrees to go: \"Được chứ.\""],
      ["5. Hai người dự định làm gì?", ["Đi ăn", "Đi mua sắm", "Đi xem phim"], 0, "They plan to have dinner together: \"đi ăn\"."]
    ],
    quizSouth: [
      ["1. Ai là người đang nghe điện thoại?", ["Minh", "Linh", "Bình"], 0, "Minh is the one receiving the call: \"Alo, anh Minh hả?\""],
      ["2. Làm phiền là gì?", ["Disturb", "Talk", "Text"], 0, "Disturb means làm phiền."],
      ["3. Anh ấy đang làm gì?", ["Đang ăn cơm", "Đang đi làm", "Đang nghỉ một chút"], 2, "Minh is taking a break: \"anh đang nghỉ một chút\"."],
      ["4. Minh có thể đi không?", ["Có", "Không", "Chưa biết"], 0, "Minh agrees to go: \"Được chứ.\""],
      ["5. Hai người dự định làm gì?", ["Đi ăn", "Đi mua sắm", "Đi xem phim"], 0, "They plan to have dinner together: \"đi ăn\"."]
    ],
    vocabNorth: [
      ['gọi điện', 'V', 'to make a phone call'],
      ['đang', 'Adv', 'currently'],
      ['sao thế', 'Phrase', 'what is it?'],
      ['đi cùng', 'V', 'to go together'],
      ['khoảng', 'Adv', 'around'],
      ['tối', 'N', 'evening']
    ],
    vocabSouth: [
      ['gọi điện', 'V', 'to make a phone call'],
      ['đang', 'Adv', 'currently'],
      ['sao vậy', 'Phrase', 'what is it?'],
      ['đi chung', 'V', 'to go together'],
      ['khoảng', 'Adv', 'around'],
      ['tối', 'N', 'evening']
    ],
    transcriptNorth: [
      ['Alo, Minh à? Em gọi có làm phiền anh không?', 'Hello, Minh? Am I disturbing you?'],
      ['Không, anh đang nghỉ một chút. Có chuyện gì thế?', 'No, I am taking a short break. What is it?'],
      ['Tối nay em định đi ăn. Anh đi cùng em nhé?', "I'm planning to go out for dinner tonight. Want to come?"],
      ['Được chứ. Đi lúc nào?', 'Sure. What time?'],
      ['Khoảng bảy giờ. Em qua đón anh.', "Around seven. I'll come pick you up."],
      ['Ừ, vậy lát nữa gặp.', 'Okay, see you later.']
    ],
    transcriptSouth: [
      ['Alo, Minh hả? Em gọi có làm phiền anh không?', 'Hello, Minh? Am I disturbing you?'],
      ['Không, anh đang nghỉ một chút. Có chuyện gì vậy?', 'No, I am taking a short break. What is it?'],
      ['Tối nay em tính đi ăn. Anh đi chung với em nha?', "I'm planning to go out for dinner tonight. Want to come?"],
      ['Được chứ. Đi lúc nào?', 'Sure. What time?'],
      ['Khoảng bảy giờ. Em qua đón anh.', "Around seven. I'll come pick you up."],
      ['Ừ, vậy lát gặp.', 'Okay, see you later.']
    ]
  }),

  // 5. WEATHER
  createLesson({
    slug: 'talking-about-the-weather',
    title: 'Talking About the Weather',
    level: 'Beginner (A1)',
    description: 'Learn how to describe changing weather, talk about forecasts, and give practical advice.',
    audioNorthFile: 'talking-about-the-weather-north.wav',
    audioSouthFile: 'talking-about-the-weather-south.wav',
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
      ['Thế chắc anh phải mang ô theo.', 'Then I should probably bring an umbrella.'],
      ['Ừ, mang theo cho yên tâm.', 'Yeah, bring one just in case.']
    ],
    transcriptSouth: [
      ['Nay trời nóng ha?', "It's hot today, isn't it?"],
      ['Ừ, mà sáng nay khá mát.', 'Yeah, but this morning was quite cool.'],
      ['Chiều nay dự báo sao?', 'What does the forecast say for this afternoon?'],
      ['Có khả năng có mưa lớn á.', 'There is a chance of showers.'],
      ['Vậy chắc anh phải đem cây dù theo.', 'Then I should probably bring an umbrella.'],
      ['Ừ, đem theo cho yên tâm.', 'Yeah, bring one just in case.']
    ]
  }),

  // 6. RENTING AN APARTMENT
  createLesson({
    slug: 'renting-an-apartment',
    title: 'Renting an Apartment',
    level: 'Elementary (A2)',
    description: 'Learn how to ask about rental conditions, additional costs, furniture, and negotiate a long-term rental.',
    audioNorthFile: 'renting-an-apartment-north.wav',
    audioSouthFile: 'renting-an-apartment-south.wav',
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
      ['Mười triệu một tháng anh ạ.', 'It is 10 million a month, sir.'],
      ['Các khoản điện nước tính thế nào?', 'How are the electricity and water charges handled?'],
      ['Hai khoản đó tính riêng, không nằm trong tiền thuê ạ.', 'Those two are charged separately and are not included in the rent.'],
      ['Căn hộ có sẵn những nội thất gì rồi?', 'What furniture is already provided?'],
      ['Có giường, tủ lạnh với máy giặt anh ạ.', 'There is a bed, refrigerator, and washing machine.'],
      ['Nếu anh ký hợp đồng một năm thì giá có thể thương lượng không?', 'If I sign a one-year contract, is the price negotiable?'],
      ['Nếu thuê một năm thì em có thể giảm một chút.', 'If you rent for a year, I can reduce it a little.']
    ],
    transcriptSouth: [
      ['Em ơi, căn hộ hai phòng ngủ này giá thuê một tháng bao nhiêu vậy?', 'How much is the monthly rent for this two-bedroom apartment?'],
      ['Dạ, mười triệu một tháng anh.', 'It is 10 million a month, sir.'],
      ['Các khoản điện nước tính sao?', 'How are the electricity and water charges handled?'],
      ['Dạ, hai khoản đó tính riêng, không nằm trong tiền thuê.', 'Those two are charged separately and are not included in the rent.'],
      ['Căn hộ có sẵn nội thất gì rồi?', 'What furniture is already provided?'],
      ['Có giường, tủ lạnh với máy giặt anh ạ.', 'There is a bed, refrigerator, and washing machine.'],
      ['Nếu anh ký hợp đồng một năm thì giá có thể thương lượng được không?', 'If I sign a one-year contract, is the price negotiable?'],
      ['Nếu thuê một năm thì em bớt cho anh một chút.', 'If you rent for a year, I can reduce it a little.']
    ]
  }),

  // 7. SMALL TALK WITH COLLEAGUES
  createLesson({
    slug: 'small-talk-with-colleagues',
    title: 'Small Talk with Colleagues',
    level: 'Elementary (A2)',
    description: 'Learn how to make casual lunch plans with colleagues, explain time constraints, and suggest alternatives.',
    audioNorthFile: 'small-talk-with-colleagues-north.wav',
    audioSouthFile: 'small-talk-with-colleagues-south.wav',
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
      ['Trưa nay em định ăn gì?', 'What are you planning to eat for lunch today?'],
      ['Em chưa nghĩ ra. Nhưng mình chỉ có một tiếng thôi.', "I haven't decided. But we only have one hour."],
      ['Vậy đi đâu gần đây thôi, khỏi mất thời gian.', 'Then let us go somewhere nearby so we do not waste time.'],
      ['Quán cơm ngay gần công ty thì sao?', 'How about the rice place near the office?'],
      ['Được đấy. Hôm qua anh ăn cơm tấm rồi, hôm nay đổi món.', 'Sounds good. I had broken rice yesterday, so I want something different today.'],
      ['Ừ, quán đó có bún bò với phở.', 'Yeah, that place has beef noodles and Pho.']
    ],
    transcriptSouth: [
      ['Trưa nay em tính ăn gì?', 'What are you planning to eat for lunch today?'],
      ['Em chưa nghĩ ra. Mà mình chỉ có một tiếng thôi.', "I haven't decided. But we only have one hour."],
      ['Vậy đi đâu gần đây thôi, khỏi mất thời gian.', 'Then let us go somewhere nearby so we do not waste time.'],
      ['Quán cơm ngay gần công ty thì sao?', 'How about the rice place near the office?'],
      ['Được đó. Hôm qua anh ăn cơm tấm rồi, nay đổi món.', 'Sounds good. I had broken rice yesterday, so I want something different today.'],
      ['Ừ, quán đó có bún bò với phở.', 'Yeah, that place has beef noodles and Pho.']
    ]
  }),

  // 8. PHARMACY / CLINIC
  createLesson({
    slug: 'going-to-the-pharmacy-clinic',
    title: 'Going to the Pharmacy / Clinic',
    level: 'Elementary (A2)',
    description: 'Learn how to describe symptoms, explain when they started, ask for advice, and understand basic medical instructions.',
    audioNorthFile: 'going-to-the-pharmacy-clinic-north.wav',
    audioSouthFile: 'going-to-the-pharmacy-clinic-south.wav',
    quizNorth: [
      ["1. Vì sao cô ấy đến hiệu thuốc?", ["Đau đầu", "Đau chân", "Đau lưng"], 0, "The customer states her symptoms: \"sáng nay bắt đầu đau đầu\"."],
      ["2. Cô ấy bắt đầu thấy không khỏe từ khi nào?", ["Sáng nay", "Tối qua", "Hôm kia"], 1, "She mentions the starting time: \"Từ tối qua em thấy hơi mệt\"."],
      ["3. Cô ấy có đau bụng không?", ["Có", "Không", "Không nói đến"], 2, "She only mentions a headache and a slight fever, with no mention of a stomachache."],
      ["4. Dị ứng là gì?", ["Allergy", "Tiredness", "Fever"], 0, "Allergy means dị ứng."],
      ["5. Nếu không đỡ thì nên làm gì?", ["Uống thêm thuốc", "Đi khám bác sĩ", "Nghỉ làm một tuần"], 1, "The pharmacist advises: \"Nếu vài ngày vẫn không đỡ thì nên đi khám.\""]
    ],
    quizSouth: [
      ["1. Vì sao cô ấy đến hiệu thuốc?", ["Đau đầu", "Đau chân", "Đau lưng"], 0, "The customer states her symptoms: \"sáng nay bắt đầu đau đầu\"."],
      ["2. Cô ấy bắt đầu thấy không khỏe từ khi nào?", ["Sáng nay", "Tối qua", "Hôm kia"], 1, "She mentions the starting time: \"Từ tối qua em thấy hơi mệt\"."],
      ["3. Cô ấy có đau bụng không?", ["Có", "Không", "Không nói đến"], 2, "She only mentions a headache and a slight fever, with no mention of a stomachache."],
      ["4. Dị ứng là gì?", ["Allergy", "Tiredness", "Fever"], 0, "Allergy means dị ứng."],
      ["5. Nếu không đỡ thì nên làm gì?", ["Uống thêm thuốc", "Đi khám bác sĩ", "Nghỉ làm một tuần"], 1, "The pharmacist advises: \"Nếu vài ngày vẫn không đỡ thì đi khám nha.\""]
    ],
    vocabNorth: [
      ['hiệu thuốc', 'N', 'pharmacy'],
      ['triệu chứng', 'N', 'symptom'],
      ['đau đầu', 'V', 'headache'],
      ['hơi', 'Adv', 'slightly'],
      ['dị ứng', 'V', 'allergic'],
      ['đỡ', 'V', 'feel better']
    ],
    vocabSouth: [
      ['tiệm thuốc', 'N', 'pharmacy'],
      ['triệu chứng', 'N', 'symptom'],
      ['đau đầu', 'V', 'headache'],
      ['hơi', 'Adv', 'slightly'],
      ['dị ứng', 'V', 'allergic'],
      ['đỡ', 'V', 'feel better']
    ],
    transcriptNorth: [
      ['Chị thấy trong người thế nào?', 'How are you feeling?'],
      ['Từ tối qua em thấy hơi mệt, sáng nay bắt đầu đau đầu.', 'Since last night I have felt a little tired, and this morning I started having a headache.'],
      ['Ngoài ra còn triệu chứng gì khác không?', 'Do you have any other symptoms?'],
      ['Chỉ hơi sốt thôi.', 'Just a slight fever.'],
      ['Chị có từng bị dị ứng với thuốc nào không?', 'Have you ever been allergic to any medication?'],
      ['Không. Chị tư vấn giúp em loại phù hợp nhé.', 'No. Please recommend something suitable for me.'],
      ['Chị dùng sau khi ăn. Nếu vài ngày vẫn không đỡ thì nên đi khám.', 'Take it after meals. If you do not improve after a few days, you should see a doctor.']
    ],
    transcriptSouth: [
      ['Chị thấy trong người sao rồi?', 'How are you feeling?'],
      ['Từ tối qua em thấy hơi mệt, sáng nay bắt đầu đau đầu.', 'Since last night I have felt a little tired, and this morning I started having a headache.'],
      ['Ngoài ra còn triệu chứng gì khác không?', 'Do you have any other symptoms?'],
      ['Chỉ hơi sốt thôi.', 'Just a slight fever.'],
      ['Chị có từng dị ứng với thuốc nào không?', 'Have you ever been allergic to any medication?'],
      ['Không. Chị tư vấn giúp em loại phù hợp nha.', 'No. Please recommend something suitable for me.'],
      ['Chị uống sau khi ăn. Nếu vài ngày vẫn không đỡ thì đi khám nha.', 'Take it after meals. If you do not improve after a few days, see a doctor.']
    ]
  }),

  // 9. SUPERMARKET
  createLesson({
    slug: 'supermarket-and-convenience-store',
    title: 'Supermarket & Convenience Store',
    level: 'Elementary (A2)',
    description: 'Learn how to locate products, ask about promotions, compare quantities, and complete a simple purchase.',
    audioNorthFile: 'wedding-invitation-north.wav',
    audioSouthFile: 'wedding-invitation-south.wav',
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

  // 10. MAKING AN APPOINTMENT
  createLesson({
    slug: 'making-an-appointment',
    title: 'Making an Appointment',
    level: 'Elementary (A2)',
    description: 'Learn how to arrange a meeting, suggest a time, reject an unsuitable option, and settle on a convenient schedule.',
    audioNorthFile: 'appointment-north.wav',
    audioSouthFile: 'appointment-south.wav',
    quizNorth: [
      ["1. Hai người đang nói về việc gì?", ["Một cuộc hẹn", "Một chuyến đi", "Một bữa tiệc"], 0, "They are talking about making an appointment based on the script: \"Em muốn bàn với anh một việc\"."],
      ["2. Cô ấy muốn gặp vào ngày nào?", ["Thứ Hai", "Thứ Ba", "Thứ Tư"], 1, "She wants to meet on Tuesday: \"Thứ Ba anh có thời gian không?\""],
      ["3. Vì sao buổi sáng không được?", ["Có cuộc họp", "Phải đi làm", "Phải đi khám"], 0, "Morning is not available because of a meeting: \"sáng anh có cuộc họp\"."],
      ["4. Cuối cùng họ hẹn lúc mấy giờ?", ["10 giờ", "2 giờ", "3 giờ"], 2, "They finally schedule it at 3 o'clock: \"Ba giờ tiện hơn\"."],
      ["5. Họ gặp nhau ở đâu?", ["Công ty", "Quán cà phê", "Nhà hàng"], 1, "They agree to meet at a coffee shop: \"gặp ở quán cà phê gần công ty\"."]
    ],
    quizSouth: [
      ["1. Hai người đang nói về việc gì?", ["Một cuộc hẹn", "Một chuyến đi", "Một bữa tiệc"], 0, "They are talking about making an appointment based on the script: \"Em muốn bàn với anh một việc\"."],
      ["2. Cô ấy muốn gặp vào ngày nào?", ["Thứ Hai", "Thứ Ba", "Thứ Tư"], 1, "She wants to meet on Tuesday: \"Thứ Ba anh có thời gian không?\""],
      ["3. Vì sao buổi sáng không được?", ["Có cuộc họp", "Phải đi làm", "Phải đi khám"], 0, "Morning is not available because of a meeting: \"sáng anh có cuộc họp\"."],
      ["4. Cuối cùng họ hẹn lúc mấy giờ?", ["10 giờ", "2 giờ", "3 giờ"], 2, "They finally schedule it at 3 o'clock: \"Ba giờ tiện hơn\"."],
      ["5. Họ gặp nhau ở đâu?", ["Công ty", "Quán cà phê", "Nhà hàng"], 1, "They agree to meet at a coffee shop: \"gặp ở quán cà phê gần công ty\"."]
    ],
    vocabNorth: [
      ['bàn', 'V', 'discuss'],
      ['(sắp) xếp', 'V', 'arrange'],
      ['lịch', 'N', 'schedule'],
      ['cuộc họp/ hẹn', 'V', 'meeting/appointment'],
      ['sớm', 'Adj', 'early'],
      ['tiện', 'Adj', 'convenient']
    ],
    vocabSouth: [
      ['bàn', 'V', 'discuss'],
      ['(sắp) xếp', 'V', 'arrange'],
      ['lịch', 'N', 'schedule'],
      ['cuộc họp/ hẹn', 'V', 'meeting/appointment'],
      ['sớm', 'Adj', 'early'],
      ['tiện', 'Adj', 'convenient']
    ],
    transcriptNorth: [
      ['Thứ Ba anh có thời gian không? Em muốn bàn với anh một việc.', 'Do you have time on Tuesday? I want to discuss something with you.'],
      ['Thứ Ba sáng anh có cuộc họp, chiều thì được.', 'I have a meeting Tuesday morning, but the afternoon works.'],
      ['Hai giờ có được không anh?', 'Does two p.m. work for you?'],
      ['Hai giờ hơi sớm. Ba giờ thì tiện hơn.', 'Two is a little early. Three would be more convenient.'],
      ['Được. Vậy mình gặp ở quán cà phê gần công ty.', 'Okay. Then let us meet at the coffee shop near the office.'],
      ['Ừ, để anh xếp lịch.', 'Sure, I will arrange my schedule.']
    ],
    transcriptSouth: [
      ['Thứ Ba anh có thời gian không? Em muốn bàn với anh một việc.', 'Do you have time on Tuesday? I want to discuss something with you.'],
      ['Thứ Ba sáng anh có cuộc họp, chiều thì được.', 'I have a meeting Tuesday morning, but the afternoon works.'],
      ['Hai giờ có được không anh?', 'Does two p.m. work for you?'],
      ['Hai giờ hơi sớm. Ba giờ tiện hơn.', 'Two is a little early. Three would be more convenient.'],
      ['Được. Vậy mình gặp ở quán cà phê gần công ty.', 'Okay. Then let us meet at the coffee shop near the office.'],
      ['Ừ, để anh xếp lịch.', 'Sure, I will arrange my schedule.']
    ]
  }),

  // 11. MEETING THE FAMILY (Trỏ đúng vào file thực tế: north - meet parents.wav và south- meeting parents.wav)
  createLesson({
    slug: 'meeting-the-family',
    title: 'Meeting the Family',
    level: 'Elementary (A2)',
    description: 'Learn how to talk about visiting someone\'s home, expressing feelings of nervousness, and asking for advice when meeting parents.',
    audioNorthFile: 'meeting-the-family-north.wav',
    audioSouthFile: 'meeting-the-family-south.wav',
    quizNorth: [
      ["1. Vì sao em mời anh đến nhà?", ["Để ăn cưới", "Để giới thiệu với bố mẹ", "Để tổ chức sinh nhật", "Để đi du lịch"], 1, "She invites him over for dinner: \"Em muốn anh ra mắt bố mẹ\"."],
      ["2. Anh cảm thấy thế nào?", ["Buồn", "Hào hứng", "Hồi hộp", "Bực mình"], 2, "He feels nervous: \"anh hơi hồi hộp\"."],
      ["3. Anh định chuẩn bị gì?", ["Quần áo", "Đồ ăn", "Bánh sinh nhật", "Hoa quả"], 3, "He plans to bring fruit: \"Anh định mua ít hoa quả\"."],
      ["4. Em nghĩ anh nên làm gì?", ["Mua quà thật đắt", "Cứ bình thường", "Ít nói chuyện", "Đến sớm"], 1, "She advises him to be natural: \"Anh cứ tự nhiên, thoải mái\"."],
      ["5. Cầu kỳ là gì?", ["Simple", "Fast", "Elaborate", "Easy"], 2, "Cầu kỳ means Elaborate."]
    ],
    quizSouth: [
      ["1. Vì sao em mời anh đến nhà?", ["Để ăn cưới", "Để tổ chức sinh nhật", "Để giới thiệu với ba mẹ", "Để đi du lịch"], 2, "She invites him over for dinner: \"Em muốn anh ra mắt ba mẹ\"."],
      ["2. Anh cảm thấy thế nào?", ["Hào hứng", "Buồn", "Hồi hộp", "Bực mình"], 2, "He feels nervous: \"anh hơi hồi hộp\"."],
      ["3. Anh định chuẩn bị gì?", ["Trái cây", "Quần áo", "Đồ ăn", "Bánh sinh nhật"], 0, "He plans to bring fruit: \"Anh tính mua chút trái cây\"."],
      ["4. Em nghĩ anh nên làm gì?", ["Mua quà thật mắc", "Ít nói chuyện", "Cứ bình thường", "Tới"], 2, "She advises him to be natural: \"Anh cứ tự nhiên, thoải mái\"."],
      ["5. Cầu kỳ là gì?", ["Simple", "Elaborate", "Fast", "Hard"], 1, "Cầu kỳ means Elaborate."]
    ],
    vocabNorth: [
      ['ra mắt', 'V', 'to meet the family'],
      ['hồi hộp', 'Adj', 'nervous'],
      ['dễ tính', 'Adj', 'easygoing'],
      ['lễ phép', 'Adj', 'polite'],
      ['tự nhiên', 'Adj', 'natural'],
      ['chu đáo', 'Adj', 'thoughtful / thorough'],
      ['cầu kỳ', 'Adj', 'elaborate / fussy']
    ],
    vocabSouth: [
      ['ra mắt', 'V', 'to meet the family'],
      ['hồi hộp', 'Adj', 'nervous'],
      ['dễ tính', 'Adj', 'easygoing'],
      ['lễ phép', 'Adj', 'polite'],
      ['tự nhiên', 'Adj', 'natural'],
      ['chu đáo', 'Adj', 'thoughtful / thorough'],
      ['cầu kỳ', 'Adj', 'elaborate / fussy']
    ],
    transcriptNorth: [
      ['Chủ nhật này anh qua nhà em ăn cơm nhé? Em muốn anh ra mắt bố mẹ.', 'Would you like to come over for dinner this Sunday? I want you to meet my parents.'],
      ['Được chứ. Nhưng anh hơi hồi hộp, vì đây là lần đầu anh gặp bố mẹ em.', 'Sure. But I am a little nervous because it is my first time meeting your parents.'],
      ['Có gì đâu mà hồi hộp. Bố mẹ em dễ tính lắm.', 'There is nothing to be nervous about. My parents are very easygoing.'],
      ['Anh có nên chuẩn bị gì không? Anh định mua ít hoa quả.', 'Should I prepare anything? I was thinking of buying some fruit.'],
      ['Thế là được rồi. Anh cứ tự nhiên, thoải mái là bố mẹ quý ấy mà.', 'That is enough. Just be natural and relaxed, my parents will like you.'],
      ['Mà bố mẹ em thích ăn gì để anh chuẩn bị thêm cho chu đáo?', 'What do your parents like to eat so I can prepare a bit more thoughtfully?'],
      ['Anh cứ đến là bố mẹ vui rồi, không cần cầu kỳ đâu nha.', 'My parents will just be happy to see you come, no need to overthink it.']
    ],
    transcriptSouth: [
      ['Chủ nhật này anh qua nhà em ăn cơm nha? Em muốn anh ra mắt ba mẹ.', 'Would you like to come over for dinner this Sunday? I want you to meet my parents.'],
      ['Được chứ. Mà anh hơi hồi hộp, lần đầu gặp ba mẹ em mà.', 'Sure. But I am a little nervous because it is my first time meeting your parents.'],
      ['Có gì đâu mà hồi hộp. Ba mẹ em dễ tính lắm.', 'There is nothing to be nervous about. My parents are very easygoing.'],
      ['Anh có cần chuẩn bị gì không? Anh tính mua chút trái cây.', 'Should I prepare anything? I was thinking of buying some flowers and fruit.'],
      ['Vầy là ổn rồi. Anh cứ tự nhiên, thoải mái là ba mẹ thương à.', 'That is enough. Just be natural and relaxed, my parents will love you.'],
      ['Mà ba mẹ em thích ăn gì để anh chuẩn bị thêm cho chu đáo?', 'What do your parents like to eat so I can prepare a bit more thoughtfully?'],
      ['Anh cứ tới là ba mẹ vui rồi, không cần cầu kỳ đâu nha.', 'My parents will just be happy to see you come, no need to overthink it.']
    ]
  }),

  // 12. FAMILY BACKGROUND
  createLesson({
    slug: 'talking-about-family-background',
    title: 'Talking About Family Background',
    level: 'Intermediate (B1)',
    description: 'Learn how to describe where family members live, explain moving away from home, and talk about how long you have lived somewhere.',
    audioNorthFile: 'family-background-north.wav',
    audioSouthFile: 'family-background-south.wav',
    quizNorth: [
      ["1. Gia đình hiện đang sống ở đâu?", ["Hà Nội", "Đà Nẵng", "Nghệ An", "Quê"], 3, "Parents still live in the hometown: \"bố mẹ vẫn ở quê\"."],
      ["2. Có mấy anh chị em?", ["Hai", "Ba", "Bốn", "Năm"], 1, "There are three siblings: \"Ba anh chị em đều đi học rồi làm việc xa nhà\"."],
      ["3. Anh hai đang làm ở đâu?", ["Miền Bắc", "Miền Trung", "Miền Nam", "Nước ngoài"], 1, "The eldest brother works in the Central: \"Anh cả đang làm ở miền Trung\"."],
      ["4. Đã ở Thành phố Hồ Chí Minh bao lâu?", ["Gần hai năm", "Gần ba năm", "Gần bốn năm", "Hơn năm năm"], 2, "Has lived in Ho Chi Minh City for nearly four years: \"gần bốn năm rồi\"."],
      ["5. Xa nhà nghĩa là gì?", ["Away from home", "Staying at home", "Moving abroad"], 0, "Away from home means xa nhà."]
    ],
    quizSouth: [
      ["1. Gia đình hiện đang sống ở đâu?", ["Sài Gòn", "Đà Nẵng", "Nghệ An", "Quê"], 3, "Parents still live in the hometown: \"ba mẹ vẫn ở quê\"."],
      ["2. Có mấy anh chị em?", ["Hai", "Ba", "Bốn", "Năm"], 1, "There are three siblings: \"Ba anh chị em đều đi học rồi đi làm xa nhà\"."],
      ["3. Anh hai đang làm ở đâu?", ["Miền Bắc", "Miền Trung", "Miền Nam", "Nước ngoài"], 1, "The eldest brother works in the Central: \"Anh hai đang làm ở miền Trung\"."],
      ["4. Đã ở Thành phố Hồ Chí Minh bao lâu?", ["Gần hai năm", "Gần ba năm", "Gần bốn năm", "Hơn năm năm"], 2, "Has lived in Ho Chi Minh City for nearly four years: \"gần bốn năm rồi\"."],
      ["5. Xa nhà nghĩa là gì?", ["Away from home", "Staying at home", "Moving abroad"], 0, "Away from home means xa nhà."]
    ],
    vocabNorth: [
      ['quê (quán)', 'N', 'hometown'],
      ['xa nhà', 'Phrase', 'away from home'],
      ['anh cả', 'N', 'eldest brother'],
      ['bố mẹ', 'N', 'parents'],
      ['sinh sống', 'V', 'to live / reside'],
      ['anh chị em', 'N', 'siblings'],
      ['thăm', 'V', 'to visit']
    ],
    vocabSouth: [
      ['quê (quán)', 'N', 'hometown'],
      ['xa nhà', 'Phrase', 'away from home'],
      ['anh hai', 'N', 'eldest brother'],
      ['ba mẹ', 'N', 'parents'],
      ['sinh sống', 'V', 'to live / reside'],
      ['anh chị em', 'N', 'siblings'],
      ['thăm', 'V', 'to visit']
    ],
    transcriptNorth: [
      ['Nhà em ở Hà Nội từ trước đến giờ à?', 'Has your family lived in the capital all this time?'],
      ['Không anh ạ. Quê em ở tỉnh khác, bố mẹ vẫn ở quê.', 'No. My hometown is elsewhere, and my parents still live there.'],
      ['Thế anh chị em của em thì sao?', 'What about your siblings?'],
      ['Ba anh chị em đều đi học rồi làm việc xa nhà anh ạ.', 'All three of us went away to study and then work.'],
      ['Anh cả đang làm ở miền Trung, còn em ra đây gần bốn năm rồi.', 'My eldest brother works in the Central region, and I have been here for nearly four years.'],
      ['Chắc em cũng nhớ nhà nhiều nhỉ?', 'You must miss home quite a bit.'],
      ['Vâng, nên cứ có thời gian là em lại về thăm bố mẹ.', 'Yeah, so whenever I have time, I go back to visit my parents.']
    ],
    transcriptSouth: [
      ['Nhà em ở Sài Gòn từ trước tới giờ hả?', 'Has your family lived in the big city all this time?'],
      ['Không anh. Quê em ở tỉnh khác, ba mẹ vẫn ở quê.', 'No. My hometown is elsewhere, and my parents still live there.'],
      ['Vậy anh chị em của em thì sao?', 'What about your siblings?'],
      ['Ba anh chị em đều đi học rồi đi làm xa nhà anh ơi.', 'All three of us went away to study and then work.'],
      ['Anh hai đang làm ở miền Trung, còn em vào đây gần bốn năm rồi.', 'My eldest brother works in the Central region, and I have been here for nearly four years.'],
      ['Chắc em cũng nhớ nhà nhiều ha?', 'You must miss home quite a bit.'],
      ['Dạ, nên có thời gian là em lại về thăm ba mẹ.', 'Yeah, so whenever I have time, I go back to visit my parents.']
    ]
  }),

  // 13. TET
  createLesson({
    slug: 'tet-holiday-and-cultural-customs',
    title: 'Tet Holiday & Cultural Customs',
    level: 'Intermediate (B1)',
    description: 'Learn how to talk about Tet preparations, returning home early, and family activities before the holiday.',
    audioNorthFile: 'tet-holiday-north.wav',
    audioSouthFile: 'tet-holiday-south.wav',
    quizNorth: [
      ["1. Em dự định đón Tết ở đâu?", ["Ở thành phố", "Ở quê", "Ở nước ngoài", "Ở nhà hàng"], 1, "Going back to the hometown: \"về quê\"."],
      ["2. Vì sao họ về sớm?", ["Để đi du lịch", "Để dọn nhà", "Để mua quà", "Để nghỉ ngơi"], 1, "To clean the house: \"dọn nhà với sắm Tết\"."],
      ["3. Gia đình thường làm gì trước Tết?", ["Dọn dẹp nhà cửa và chuẩn bị đồ ăn", "Đi làm thêm", "Đi du lịch", "Tổ chức tiệc"], 0, "Cleaning up: \"dọn dẹp\"."],
      ["4. Vì sao thích Tết ở quê?", ["Vì có gia đình", "Vì ít người", "Vì rẻ hơn", "Vì có nhiều khách sạn"], 0, "Family reunion: \"cả nhà quây quần\"."],
      ["5. Sum họp nghĩa là gì?", ["Reunite", "Separate", "Travel"], 0, "Reunite means sum họp."]
    ],
    quizSouth: [
      ["1. Gia đình dự định đón Tết ở đâu?", ["Ở thành phố", "Ở quê", "Ở nước ngoài", "Ở nhà hàng"], 1, "Going back to the hometown: \"về quê\"."],
      ["2. Vì sao họ về sớm?", ["Để đi du lịch", "Để dọn nhà", "Để mua quà", "Để nghỉ ngơi"], 1, "To clean the house: \"dọn nhà với sắm Tết\"."],
      ["3. Gia đình thường làm gì trước Tết?", ["Dọn dẹp nhà cửa và chuẩn bị đồ ăn", "Đi làm thêm", "Đi du lịch", "Tổ chức tiệc công ty"], 0, "Cleaning up: \"dọn dẹp\"."],
      ["4. Vì sao thích Tết ở quê?", ["Vì có gia đình", "Vì ít người", "Vì rẻ hơn", "Vì có nhiều khách sạn"], 0, "Family reunion: \"cả nhà quây quần\"."],
      ["5. Sum họp nghĩa là gì?", ["Reunite", "Separate", "Travel"], 0, "Reunite means sum họp."]
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
      ['Tết này em có về quê không?', 'Are you going back to your hometown this Tet?'],
      ['Có anh ạ. Năm nay nhà em về sớm hơn mọi năm.', 'Yes. This year my family is going back earlier than usual.'],
      ['Sao lại về sớm thế hả em?', 'Why are you going back so early?'],
      ['Bố mẹ em muốn về trước để dọn dẹp nhà cửa với sắm Tết.', 'My parents want to go back early to clean the house and shop for Tet.'],
      ['Về quê ăn Tết lúc nào cũng có không khí hơn nhỉ.', 'Tet in the hometown always has a special atmosphere, doesn’t it?'],
      ['Vâng, nhất là lúc cả nhà quây quần với nhau anh ạ.', 'Yeah, especially when the whole family gathers together.']
    ],
    transcriptSouth: [
      ['Tết này em có về quê không?', 'Are you going back to your hometown this Tet?'],
      ['Dạ có anh. Năm nay nhà em về sớm hơn mọi năm.', 'Yes. This year my family is going back earlier than usual.'],
      ['Sao về sớm vậy em?', 'Why are you going back so early?'],
      ['Ba mẹ em muốn về trước để dọn dẹp nhà cửa với sắm Tết.', 'My parents want to go back early to clean the house and shop for Tet.'],
      ['Về quê ăn Tết lúc nào cũng có không khí hơn ha.', 'Tet in the hometown always has a special atmosphere, doesn’t it?'],
      ['Dạ, nhất là lúc cả nhà quây quần với nhau.', 'Yeah, especially when the whole family gathers together.']
    ]
  }),

  // 14. WEDDING INVITATION
  createLesson({
    slug: 'wedding-invitation-and-etiquette',
    title: 'Wedding Invitation & Etiquette',
    level: 'Intermediate (B1)',
    description: 'Learn how to talk about wedding invitations, discuss attendance, and check event details.',
    audioNorthFile: 'wedding-invitation-north.wav',
    audioSouthFile: 'wedding-invitation-south.wav',
    quizNorth: [
      ["1. Em nhận được cái gì?", ["Thiệp cưới", "Thư mời họp", "Thư cảm ơn", "Hóa đơn"], 0, "Em nhận được thiệp cưới: \"Em nhận được thiệp cưới chưa?\""],
      ["2. Đám cưới tổ chức vào lúc nào?", ["Chủ nhật tuần này", "Thứ bảy tuần sau", "Tháng sau", "Hôm nay"], 0, "Đám cưới diễn ra vào chủ nhật tuần này: \"Đám cưới tổ chức vào chủ nhật tuần này\"."],
      ["3. Tiệc cưới được tổ chức ở đâu?", ["Ở nhà hàng", "Ở nhà cô dâu", "Ở công ty", "Ở quán cà phê"], 0, "Tiệc cưới tổ chức ở nhà hàng: \"tiệc cưới tổ chức ở nhà hàng\"."],
      ["4. Em đã biết địa chỉ nhà hàng chưa?", ["Chưa biết", "Xem trên thiệp rồi", "Quên rồi", "Phải hỏi lại"], 1, "Em đã xem địa chỉ trên thiệp: \"Em xem địa chỉ trên thiệp rồi\"."],
      ["5. Thiệp cưới nghĩa là gì?", ["Wedding invitation", "Birthday card", "New Year card"], 0, "Wedding invitation means thiệp cưới."]
    ],
    quizSouth: [
      ["1. Em nhận được cái gì?", ["Thiệp cưới", "Thư mời họp", "Thư cảm ơn", "Hóa đơn"], 0, "Em nhận được thiệp cưới: \"Em nhận được thiệp cưới chưa?\""],
      ["2. Đám cưới tổ chức vào lúc nào?", ["Chủ nhật tuần này", "Thứ bảy tuần sau", "Tháng sau", "Hôm nay"], 0, "Đám cưới diễn ra vào chủ nhật tuần này: \"Đám cưới tổ chức chủ nhật tuần này\"."],
      ["3. Tiệc cưới được tổ chức ở đâu?", ["Ở nhà hàng", "Ở nhà cô dâu", "Ở công ty", "Ở quán cà phê"], 0, "Tiệc cưới tổ chức ở nhà hàng: \"tiệc cưới tổ chức ở nhà hàng\"."],
      ["4. Em đã biết địa chỉ nhà hàng chưa?", ["Chưa biết", "Xem trên thiệp rồi", "Quên rồi", "Phải hỏi lại"], 1, "Em đã coi địa chỉ trên thiệp: \"Em coi địa chỉ trên thiệp rồi\"."],
      ["5. Thiệp cưới nghĩa là gì?", ["Wedding invitation", "Birthday card", "New Year card"], 0, "Wedding invitation means thiệp cưới."]
    ],
    vocabNorth: [
      ['thiệp cưới', 'N', 'wedding invitation'],
      ['đám cưới', 'N', 'wedding'],
      ['tiệc cưới', 'N', 'wedding reception'],
      ['nhà hàng', 'N', 'restaurant'],
      ['địa chỉ', 'N', 'address']
    ],
    vocabSouth: [
      ['thiệp cưới', 'N', 'wedding invitation'],
      ['đám cưới', 'N', 'wedding'],
      ['tiệc cưới', 'N', 'wedding reception'],
      ['nhà hàng', 'N', 'restaurant'],
      ['địa chỉ', 'N', 'address']
    ],
    transcriptNorth: [
      ['Em nhận được thiệp cưới chưa?', 'Have you received the wedding invitation yet?'],
      ['Rồi anh ạ. Đám cưới diễn ra vào chủ nhật tuần này.', 'Yes. The wedding is this Sunday.'],
      ['Thế em có đi được không?', 'Could you go to the wedding reception?'],
      ['Được ạ. Em nghe nói tiệc cưới tổ chức ở nhà hàng gần đây.', 'Yes. I heard the wedding reception is at a restaurant.'],
      ['Em có biết nhà hàng đó ở đâu không?', 'Do you know where the restaurant is?'],
      ['Để em xem lại địa chỉ trên thiệp.', 'Yes. I checked the address on the invitation.']
    ],
    transcriptSouth: [
      ['Em nhận được thiệp cưới chưa?', 'Have you received the wedding invitation yet?'],
      ['Dạ rồi anh ạ. Đám cưới diễn ra vào chủ nhật tuần này.', 'Yes. The wedding is this Sunday.'],
      ['Vậy em có đi được không?', 'Could you go to the wedding reception?'],
      ['Dạ được. Em nghe nói tiệc cưới tổ chức ở nhà hàng gần đây.', 'Yes. I heard the wedding reception is at a restaurant.'],
      ['Em có biết nhà hàng đó ở đâu không?', 'Do you know where the restaurant is?'],
      ['Để em coi lại địa chỉ trên thiệp.', 'Yes. I checked the address on the invitation.']
    ]
  }),
// 15. COMPARING CAFÉS
createLesson({
  slug: 'comparing-cafes',
  title: 'Compare Two Coffee Shops',
  level: 'Intermediate (B1)',
  description: 'Learn how to compare cafés, talk about prices, distance, and quality, and express which option is the best.',
  audioNorthFile: 'comparing-cafes-north.wav',
  audioSouthFile: 'comparing-cafes-south.wav',
quizNorth: [
    ["1. Tại sao anh muốn đi uống cà phê?", ["Vì anh mới nhận lương", "Vì anh muốn uống cà phê", "Vì anh muốn đi ra ngoài", "Vì anh không phải đi làm"], 3, "Because he has the day off tomorrow / doesn't have to work: \"Mai anh được nghỉ làm.\""],
    ["2. Quán cà phê mới so với quán cà phê cũ thì ___", ["Rộng hơn", "Nhỏ hơn", "Bằng nhau", "Không biết"], 0, "The new café is bigger: \"Quán này rộng hơn quán mình hay đi.\""],
    ["3. Giá ở quán mới như thế nào?", ["Thấp hơn", "Cao hơn", "Bằng nhau", "Rẻ hơn nhiều"], 1, "The prices are a little higher: \"Giá ở đây cũng cao hơn một chút.\""],
    ["4. Theo anh, quán nào có cà phê ngon nhất?", ["Quán gần nhà", "Quán hôm qua", "Quán trước đây", "Hai quán như nhau"], 2, "The old café has the best coffee: \"Theo anh thì ở quán cũ là ngon nhất.\""],
    ["5. Quán nào gần hơn?", ["Không đề cập", "Quán mới", "Quán hôm qua", "Hai quán bằng nhau"], 2, "The café from yesterday is closer: \"Quán hôm qua gần hơn.\""],
    ["6. \"Thoải mái\" nghĩa là gì?", ["Comfortable", "Expensive", "Crowded", "Far away"], 0, "\"Thoải mái\" means comfortable."]
  ],
  quizSouth: [
    ["1. Tại sao anh muốn đi uống cà phê?", ["Vì anh mới nhận lương", "Vì anh muốn uống cà phê", "Vì anh muốn đi ra ngoài", "Vì anh không phải đi làm"], 3, "Because he has the day off tomorrow / doesn't have to work: \"Mai anh được nghỉ làm.\""],
    ["2. Quán cà phê mới so với quán cà phê cũ thì ___", ["Rộng hơn", "Nhỏ hơn", "Bằng nhau", "Không biết"], 0, "The new café is bigger: \"Quán này rộng hơn quán mình hay đi.\""],
    ["3. Giá ở quán mới như thế nào?", ["Thấp hơn", "Cao hơn", "Bằng nhau", "Rẻ hơn nhiều"], 1, "The prices are a little higher: \"Giá ở đây cũng cao hơn chút.\""],
    ["4. Theo anh, quán nào có cà phê ngon nhất?", ["Quán gần nhà", "Quán hôm qua", "Quán trước đây", "Hai quán như nhau"], 2, "The old café has the best coffee: \"Theo anh thì quán cũ ngon nhất.\""],
    ["5. Quán nào gần hơn?", ["Không đề cập", "Quán mới", "Quán hôm qua", "Hai quán bằng nhau"], 2, "The café from yesterday is closer: \"Quán hôm qua gần hơn.\""],
    ["6. \"Thoải mái\" nghĩa là gì?", ["Comfortable", "Expensive", "Crowded", "Far away"], 0, "\"Thoải mái\" means comfortable."]
  ],
      vocabNorth: [
    ['rộng hơn', 'ADJ', 'wider / more spacious'],
    ['cao hơn', 'ADJ', 'higher / more expensive'],
    ['ngon nhất', 'ADJ', 'the best / the tastiest'],
    ['gần hơn', 'ADJ', 'closer'],
    ['như nhau', 'PHRASE', 'the same / alike'],
    ['bằng nhau', 'PHRASE', 'equal / the same in degree']
  ],
  vocabSouth: [
    ['rộng hơn', 'ADJ', 'wider / more spacious'],
    ['cao hơn', 'ADJ', 'higher / more expensive'],
    ['ngon nhất', 'ADJ', 'the best / the tastiest'],
    ['gần hơn', 'ADJ', 'closer'],
    ['như nhau', 'PHRASE', 'the same / alike'],
    ['bằng nhau', 'PHRASE', 'equal / the same in degree']
  ],
  transcriptNorth: [
    ['Mai anh được nghỉ làm. Em có muốn đi uống cà phê không?', 'I have the day off tomorrow. Do you want to go get some coffee?'],
    ['Được. Mình đi đâu vậy anh?', 'Sure. Where should we go?'],
    ['Em còn nhớ quán mình đi hôm qua không, quán 24 giờ ấy?', 'Do you remember the coffee shop we went to yesterday, the 24-hour one?'],
    ['Quán này rộng hơn quán mình hay đi.', 'This coffee shop is bigger than the one we usually go to.'],
    ['Ừ, mà giá ở đây cũng cao hơn một chút.', 'Yeah, but the prices here are also a little higher.'],
    ['Anh thấy cà phê ở quán nào ngon nhất?', 'Which coffee shop do you think has the best coffee?'],
    ['Theo anh thì ở quán cũ là ngon nhất.', 'I think the old one has the best coffee.'],
    ['Còn về đường đi thì quán hôm qua gần hơn.', 'But the coffee shop we went to yesterday is closer.'],
    ['Anh thấy mình đi quán hôm qua đi, chỗ ngồi thoải mái hơn.', 'I think we should go to the coffee shop from yesterday. The seats are more comfortable.']
  ],
  transcriptSouth: [
    ['Mai anh được nghỉ làm. Em có muốn đi uống cà phê không?', 'I have the day off tomorrow. Do you want to go get some coffee?'],
    ['Dạ được. Mình đi đâu vậy anh?', 'Sure. Where should we go?'],
    ['Em còn nhớ quán mình đi hôm qua không, quán 24 giờ ấy?', 'Do you remember the coffee shop we went to yesterday, the 24-hour one?'],
    ['Quán này rộng hơn quán mình hay đi.', 'This coffee shop is bigger than the one we usually go to.'],
    ['Ừ, mà giá ở đây cũng cao hơn chút.', 'Yeah, but the prices here are also a little higher.'],
    ['Anh thấy cà phê ở quán nào ngon nhất?', 'Which coffee shop do you think has the best coffee?'],
    ['Theo anh thì quán cũ ngon nhất.', 'I think the old one has the best coffee.'],
    ['Còn về đường đi thì quán hôm qua gần hơn.', 'But the coffee shop we went to yesterday is closer.'],
    ['Anh thấy mình đi quán hôm qua đi, chỗ ngồi thoải mái hơn.', 'I think we should go to the coffee shop from yesterday. The seats are more comfortable.']
  ]
}),
];
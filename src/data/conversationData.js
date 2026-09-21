// src/data/conversationData.js
export const conversationDatabase = {
  "FCS01": {
    topic: "SOUTHERN FOOD & RESTAURANT CONVERSATION",
    title: "Bài tập: Gọi món tại quán ăn (Miền Nam)",
    getStep: function(state) {
      if (state.step === 0) {
        return {
          npc: "Quán em có phở với cơm, anh muốn ăn gì?",
          choices: [
            { text: "Cho anh phở bò", main: "phở bò", type: "pho" },
            { text: "Cho anh phở gà", main: "phở gà", type: "pho" },
            { text: "Cho anh cơm bò", main: "cơm bò", type: "com" },
            { text: "Cho anh cơm gà", main: "cơm gà", type: "com" }
          ]
        };
      } else if (state.step === 1) {
        if (state.dishType === "pho") {
          return {
            npc: "Anh có ăn hành lá không?",
            choices: [
              { text: "Có", detail: "có hành" },
              { text: "Không", detail: "không hành" }
            ]
          };
        } else {
          return {
            npc: "Anh có ăn ớt không?",
            choices: [
              { text: "Có", detail: "có ớt" },
              { text: "Không", detail: "không ớt" }
            ]
          };
        }
      } else if (state.step === 2) {
        return {
          npc: "Anh có muốn uống gì không?",
          choices: [
            { text: "Cho anh ly coca", drink: "coca" },
            { text: "Cho anh ly trà đá", drink: "trà đá" },
            { text: "Không, anh không uống gì thêm", drink: "" }
          ]
        };
      } else if (state.step === 3) {
        let summary = `Dạ vậy mình gọi ${state.selectedMain}`;
        if (state.selectedDetail) summary += `, ${state.selectedDetail}`;
        if (state.selectedDrink) summary += ` và ${state.selectedDrink}`;
        summary += " nha.";

        return {
          npc: summary,
          isConfirm: true
        };
      } else if (state.step === 4) {
        return {
          npc: "Tổng cộng của mình là 60k.",
          isPayment: true,
          choices: [
            { text: "Đưa tờ 60k (Đúng tiền)", amount: 60 },
            { text: "Đưa tờ 100k", amount: 100 },
            { text: "Đưa tờ 200k", amount: 200 }
          ]
        };
      }
      return null;
    }
  }
};
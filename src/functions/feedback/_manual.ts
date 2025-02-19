import type { Response } from "@netlify/functions/src/function/response";
import saveFeedbackInSheet from "./_save-to-spreadsheet";
import sendFeedbackToSlack from "./_send-to-slack";

interface Feedback {
  emotion: number;
  note?: string;
  url: string;
  type: "docs" | "guides";
}

const emotionSlackEmojiMap = {
  1: ":sob:",
  2: ":confused:",
  3: ":grinning:",
  4: ":star-struck:",
};

const feedbackTypetoSheetTitle = {
  docs: "Docs - Raw Feedback",
  guides: "Guides - Raw Feedback",
  digests: "Digests - Raw Feedback",
};

const allowedEmotions = [1, 2, 3, 4];

export const submitFeedback = async (body: string): Promise<Response> => {
  const feedback: Feedback = JSON.parse(body) as Feedback;
  if (!allowedEmotions.includes(feedback.emotion)) {
    return {
      statusCode: 400,
      body: "Please provide a valid emotion",
    };
  }
  const hasURLPrefix = ["http://", "https://"].some((value) =>
    feedback.url.startsWith(value)
  );
  if (!hasURLPrefix) {
    return {
      statusCode: 400,
      body: "Please provide valid URL",
    };
  }
  const isSavedInSheet = await saveFeedbackInSheet({
    sheetTitle: feedbackTypetoSheetTitle[feedback.type],
    data: [new Date(), feedback.emotion, feedback.url, feedback.note],
  });
  const isSentToSlack = await sendFeedbackToSlack(`${
    feedback.type.charAt(0).toUpperCase() + feedback.type.slice(1)
  } feedback: ${emotionSlackEmojiMap[feedback.emotion]}
Link: ${feedback.url}
Note: ${feedback.note ? feedback.note : "N/A"}`);

  const statusCode = isSavedInSheet && isSentToSlack ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Feedback added" : "Oh no, something failed.",
  };
};

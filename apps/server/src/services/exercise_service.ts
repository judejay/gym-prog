import axios from "axios";

export async function fetchExerciseData() {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/exercises",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "USEKEY",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export function weaklyValidateRoutine(body: any) {
  return false;
}

export async function handleRoutine(routine: any) {
  if (routine.reason === "just-talk") {
    console.log(
      `🗣️ You just want to talk about ${routine.subject}. Thanks! 💜`
    );
    return {
      success: true,
      justTalked: true,
      message: "Thanks for talking to us.",
    };
  }

  console.log(`💡 routine received.`);
  return {
    success: true,
    justTalked: false,
    message: "routine received.",
  };
}

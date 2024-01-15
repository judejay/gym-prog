import axios from "axios";
import { CONFIG } from "../config";
import * as EXERCISES from "../data/exercises.json"; // Import the EXERCISES object from the appropriate module
export async function fetchExerciseData() {
  try {
    const environment = CONFIG.nodeEnv;
    if (environment === "dev") {
      console.log("📨  Fetching exercises from local file...");
      console.log("exercises", EXERCISES.exercises);
      return [EXERCISES.exercises];
    } else {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/exercises",
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": CONFIG.ApiKey,
          },
        }
      );
      console.log("📨  Fetching exercises from API...");
      return response.data;
    }
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

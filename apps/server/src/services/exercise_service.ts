import axios from "axios";
import { CONFIG } from "../config";
import * as EXERCISES from "../data/exercises.json"; // Import the EXERCISES object from the appropriate module
import youtubeSearch from "youtube-search";

export type Exercise = {
  name: string;
  type: string;
  description: string;
  difficulty: string;
  instructions: string;
  muscle: string;
  equipment: string;
  exerciseId?: string;
  videoUrl?: string;
  sets?: number;
  reps?: number;
  rest?: number;
  order?: number;
};

var opts: youtubeSearch.YouTubeSearchOptions = {
  maxResults: 1,
  key: CONFIG.YoutubeApiKey,
};

export async function fetchRawExerciseData() {
  try {
    const environment = CONFIG.nodeEnv;
    if (environment === "dev") {
      console.log("📨  Fetching exercises from local file...");
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

export async function fetchExerciseData() {
  return fetchRawExerciseData().then((data) => {
    console.log("📨  Cooking exercises Data...");
    const exercises = data[0].map((exercise: Exercise) => {
      exercise.videoUrl = "https://www.youtube.com/embed/w86EalEoFRY";
      return exercise;
    });
    return exercises;
  });
}
/* export async function fetchExerciseData() {
  const data = await fetchRawExerciseData();
  console.log("📨  Cooking exercises Data...");

  const exercises = await Promise.all(
    data[0].map(async (exercise: Exercise) => {
      return new Promise((resolve, reject) => {
        youtubeSearch(exercise.name, opts, (err: any, results: any) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            exercise.videoUrl = results[0].link;
            console.dir(results[0]);
            resolve(exercise);
          }
        });
      });
    })
  ); 

  return exercises;
}
*/

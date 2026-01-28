import { Console, Effect } from "effect";

const program = Effect.gen(function* () {
  yield* Console.log("Orchestra initialized");
});

Effect.runSync(program);

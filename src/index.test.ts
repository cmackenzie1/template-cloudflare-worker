import { describe, expect, it } from "vitest";

import worker from "./index.ts";

describe("worker", () => {
  it("responds with a greeting", async () => {
    const response = await worker.fetch(new Request("https://example.com/"));

    expect(response.status).toBe(200);
    expect(await response.text()).toBe("Hello, world!");
  });
});

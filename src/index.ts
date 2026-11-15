export default {
  async fetch(request): Promise<Response> {
    const url = new URL(request.url);
    console.log(
      JSON.stringify({ message: "incoming request", method: request.method, path: url.pathname }),
    );

    return new Response("Hello, world!");
  },
} satisfies ExportedHandler<Env>;

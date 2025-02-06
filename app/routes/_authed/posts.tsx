import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/posts")({
  component: PostsComponent,
});

function PostsComponent() {
  const posts = Route.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">Authed content</ul>
      <hr />
      <Outlet />
    </div>
  );
}

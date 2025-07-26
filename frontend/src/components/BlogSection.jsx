export function BlogSection() {
  return (
    <section id="blog" className="py-16 px-4 md:px-20 lg:px-40 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-blue-200 pb-2">
        Blogs
      </h2>
      <div>
          <p>Cooking 🍲 . . . .</p>
          <ul className="space-y-2">
            <li>
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2 mt-2"></span>
              <span>What is with those syscalls in sockets and what is even socket anyway?</span>
            </li>
<li>
              <span className="w-2 h-2 bg-blue-500 rounded-full inline-block shrink-0 mr-2 mt-2"></span>
              <span>Oauth2.0 flow: authentication and authorization</span>
            </li>
             
          </ul>
      </div>
    </section>
  );
}
export default function Desc({ image, header, opt, children, textRight }) {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {header}
          </h1>

          <h2 className="text-xl font-semibold mb-3">{opt}</h2>

          <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={`relative ${textRight ? "order-first" : ""}`}>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={image}
              alt="NASA"
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

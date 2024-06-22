export default function BoxTerminal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-full bg-black rounded-lg shadow-lg font-andale-mono whitespace-pre-wrap">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 rounded-t-lg">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mx-1"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">{children}</div>
    </div>
  );
}

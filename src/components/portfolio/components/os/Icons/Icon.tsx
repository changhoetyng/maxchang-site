export default function Icon({
  icon,
  className,
  iconSelections,
}: Readonly<{
  icon: string;
  className?: string;
  iconSelections: string;
}>) {
  return (
    <button className={className}>
      <img src={iconSelections} alt={icon} />
      <p className="text-xs font-thin">Test</p>
    </button>
  );
}

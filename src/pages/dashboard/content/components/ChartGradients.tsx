const ChartGradients = () => {
  return (
    <defs>
      {/* Gradient for the line */}
      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#4cdfe8" />
        <stop offset="100%" stopColor="#7947f7" />
      </linearGradient>

      {/* Gradient for the area under the line */}
      <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#4cdfe8" stopOpacity={0.1} />
        <stop offset="100%" stopColor="#7947f7" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  );
};

export default ChartGradients;

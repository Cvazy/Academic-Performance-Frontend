export const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  const color = payload.changeType === "positive" ? "#00C49F" : "#FF6384"; // Цвет точки в зависимости от изменения

  return (
    <g>
      {/* Кастомная точка */}
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill={color}
        stroke="#fff"
        strokeWidth={2}
      />

      {/* Текст изменения */}
      <text
        x={cx}
        y={cy - 40}
        fill={color}
        fontSize={14}
        textAnchor="middle"
        fontWeight="bold"
      >
        {payload.change}
      </text>

      {/* Процент и количество студентов */}
      <text x={cx} y={cy - 25} fill="#333" fontSize={14} textAnchor="middle">
        {`${payload.percentage}%, ${payload.count}`}
      </text>
    </g>
  );
};

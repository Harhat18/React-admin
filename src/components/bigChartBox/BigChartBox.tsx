import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Pzt",
    kitaplar: 4000,
    giyim: 2400,
    elektronik: 2400,
  },
  {
    name: "Sal",
    kitaplar: 3000,
    giyim: 1398,
    elektronik: 2210,
  },
  {
    name: "Çar",
    kitaplar: 2000,
    giyim: 9800,
    elektronik: 2290,
  },
  {
    name: "Per",
    kitaplar: 2780,
    giyim: 3908,
    elektronik: 2000,
  },
  {
    name: "Cum",
    kitaplar: 1890,
    giyim: 4800,
    elektronik: 2181,
  },
  {
    name: "Cmt",
    kitaplar: 2390,
    giyim: 3800,
    elektronik: 2500,
  },
  {
    name: "Paz",
    kitaplar: 3490,
    giyim: 4300,
    elektronik: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Gelir Analizi</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="elektronik"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="giyim"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="kitaplar"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;

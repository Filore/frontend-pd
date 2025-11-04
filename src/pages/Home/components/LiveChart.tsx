import { useEffect, useRef } from "react";
import { createChart, LineSeries, type UTCTimestamp, type ISeriesApi } from "lightweight-charts";

export default function LiveChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const seriesRef = useRef<ISeriesApi<"Line"> | null>(null);

  useEffect(() => {
    const container = chartContainerRef.current!;
    const chart = createChart(container, {
      width: container.clientWidth,
      height: container.clientHeight,
      layout: {
        background: { color: "transparent" },
        textColor: "rgba(255,255,255,0.4)",
        attributionLogo: false,
      },
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      rightPriceScale: {
        borderVisible: false,
        textColor: "rgba(255,255,255,0.6)",
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: true,
      },
      crosshair: { mode: 0 },
    });

    const lineSeries = chart.addSeries(LineSeries, {
      color: "#C6FF00",
      lineWidth: 2,
      lastValueVisible: true,
      priceLineVisible: false,
    });
    seriesRef.current = lineSeries;

    const now = Math.floor(Date.now() / 1000) as UTCTimestamp;
    let data = Array.from({ length: 30 }, (_, i) => ({
      time: (now - (30 - i)) as UTCTimestamp,
      value: 3880 + Math.random() * 10,
    }));
    lineSeries.setData(data);
    chart.timeScale().scrollToRealTime();

    const interval = setInterval(() => {
      const last = data[data.length - 1];
      const newPoint = {
        time: (last.time + 1) as UTCTimestamp,
        value: last.value + (Math.random() - 0.5) * 2,
      };
      data.push(newPoint);
      if (data.length > 200) data.shift();
      lineSeries.update(newPoint);
    }, 1000);

    // обновляем при изменении размеров
    const handleResize = () => {
      chart.applyOptions({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      style={{
        width: "100%",
        height: "clamp(180px, 25svh, 260px)",
        borderRadius: "clamp(8px, 2.5vw, 12px)",
        overflow: "hidden",
        paddingRight: "20px",
      }}
    />
  );
}

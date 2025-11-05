import { useEffect, useRef, useState } from "react";
import { createChart, AreaSeries, type UTCTimestamp, type ISeriesApi } from "lightweight-charts";

type Props = {
  entryPrice?: number;                   // цена входа (может быть undefined)
  onPriceChange?: (price: number) => void; // колбэк для передачи текущей цены
  mode?: "pump" | "dump";
};

export default function LiveChart({ entryPrice, onPriceChange, mode }: Props) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const seriesRef = useRef<ISeriesApi<"Area"> | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [entryLine, setEntryLine] = useState<ReturnType<ISeriesApi<"Area">["createPriceLine"]> | null>(null);

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

     const areaSeries = chart.addSeries(AreaSeries, {
      lineColor: "#C6FF00",
      topColor: "rgba(198,255,0,0.4)", // верхний цвет градиента
      bottomColor: "rgba(198,255,0,0.0)", // низ (прозрачный)
      lineWidth: 2,
      lastValueVisible: true,
      priceLineVisible: false,
    });
    seriesRef.current = areaSeries;

    const now = Math.floor(Date.now() / 1000) as UTCTimestamp;
    let data = Array.from({ length: 30 }, (_, i) => ({
      time: (now - (30 - i)) as UTCTimestamp,
      value: 3880 + Math.random() * 10,
    }));
    areaSeries.setData(data);
    chart.timeScale().scrollToRealTime();

    const interval = setInterval(() => {
      const last = data[data.length - 1];
      const newPoint = {
        time: (last.time + 1) as UTCTimestamp,
        value: last.value + (Math.random() - 0.5) * 2,
      };
      data.push(newPoint);
      if (data.length > 200) data.shift();

      areaSeries.update(newPoint)
      setCurrentPrice(newPoint.value)
      onPriceChange?.(newPoint.value)
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
  }, [onPriceChange]);

useEffect(() => {
  if (!seriesRef.current) return;

  if (!entryPrice) {
    seriesRef.current.applyOptions({
      lineColor: "#A1F200",
      topColor: "rgba(0,0,0,0)",
      bottomColor: "rgba(0,0,0,0)",
    });
    return;
  }

  // если entryPrice задан — раскрашиваем по направлению
  if (onPriceChange) {
    const colorUp = "#A1F200";
    const colorDown = "#F20000";
    const isProfit =
        mode === "pump"
          ? currentPrice >= entryPrice
          : currentPrice <= entryPrice;

      const color = isProfit ? colorUp : colorDown;


    seriesRef.current.applyOptions({
      lineColor: color,
      topColor: color + "93",    // полупрозрачный градиент
      bottomColor: color + "00", // прозрачный низ
    });

    if (seriesRef.current) {
        if (entryLine) {
          seriesRef.current.removePriceLine(entryLine);
        }

        const newLine = seriesRef.current.createPriceLine({
          price: entryPrice,
          color: "rgba(255,255,255,0.5)",
          lineWidth: 1,
          lineStyle: 2, // 0 - solid, 1 - dashed, 2 - dotted
          axisLabelVisible: true,
        });

        setEntryLine(newLine);
      }
  }
}, [currentPrice, entryPrice, mode]);

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
  )
}

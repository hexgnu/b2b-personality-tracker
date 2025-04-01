"use client"

import { useEffect, useRef } from "react"
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend)

export default function EnterpriseRadarChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    // Create new chart
    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    chartInstance.current = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Innovativeness", "Professional Diligence", "Confidence in Execution", "Client Centric", "Resilience"],
        datasets: [
          {
            label: "Buyer Profile",
            data: [70, 90, 85, 85, 80],
            backgroundColor: "rgba(124, 58, 237, 0.2)",
            borderColor: "rgba(124, 58, 237, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(124, 58, 237, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(124, 58, 237, 1)",
          },
        ],
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              display: false,
            },
            pointLabels: {
              font: {
                size: 12,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            titleFont: {
              size: 14,
            },
            bodyFont: {
              size: 13,
            },
            padding: 10,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}


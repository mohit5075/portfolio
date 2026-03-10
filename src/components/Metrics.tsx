"use client";

import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { Activity, Bell, Zap, DollarSign, Server, Target } from "lucide-react";

interface Metric {
  icon: typeof Activity;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  duration: number;
  description: string;
  color: string;
}

const metrics: Metric[] = [
  {
    icon: Activity,
    label: "Events Processed",
    value: 5000,
    suffix: "+ / sec",
    duration: 2000,
    description: "Real-time event processing",
    color: "#00d4ff",
  },
  {
    icon: Bell,
    label: "Notifications Sent",
    value: 100,
    suffix: "K+ / day",
    duration: 2500,
    description: "Multi-channel delivery",
    color: "#ff6b6b",
  },
  {
    icon: Zap,
    label: "Throughput",
    value: 1000,
    suffix: "+ req/min",
    duration: 2000,
    description: "High-performance APIs",
    color: "#ffd93d",
  },
  {
    icon: Target,
    label: "Latency",
    value: 75,
    suffix: "ms",
    prefix: "p99 < ",
    duration: 1500,
    description: "Sub-second response",
    color: "#6bcf7f",
  },
  {
    icon: DollarSign,
    label: "Cost Reduction",
    value: 35,
    suffix: "%",
    duration: 2000,
    description: "AWS infrastructure savings",
    color: "#a78bfa",
  },
  {
    icon: Server,
    label: "OCR Accuracy",
    value: 85,
    suffix: "%",
    duration: 2000,
    description: "Multi-tenant OCR service",
    color: "#f472b6",
  },
];

function CountUpAnimation({ 
  end, 
  duration, 
  suffix = "", 
  prefix = "",
  isVisible 
}: { 
  end: number; 
  duration: number; 
  suffix?: string; 
  prefix?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);
      
      countRef.current = current;
      setCount(current);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible]);

  return (
    <span className="font-mono">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Metrics() {
  const [visibleMetrics, setVisibleMetrics] = useState<Set<number>>(new Set());

  const handleMetricVisible = (index: number) => {
    setVisibleMetrics((prev) => new Set(prev).add(index));
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: "#00d4ff", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ backgroundColor: "#a78bfa", animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>

      <div className="section-container">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="section-title">Impact & Scale</h2>
            <div className="mt-2 h-1 w-12 rounded-full accent-bg mx-auto" />
            <p className="section-subtitle mt-4">
              Building systems that handle millions of operations at scale
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <AnimateOnScroll 
              key={idx} 
              delay={idx * 0.1}
              onVisible={() => handleMetricVisible(idx)}
            >
              <div 
                className="relative group"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = metric.color;
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${metric.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon with glow effect */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${metric.color}20 0%, ${metric.color}10 100%)`,
                  }}
                >
                  <metric.icon 
                    size={28} 
                    style={{ color: metric.color }}
                    className="relative z-10"
                  />
                  <div 
                    className="absolute inset-0 rounded-xl blur-xl opacity-50"
                    style={{ backgroundColor: metric.color }}
                  />
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-muted mb-2">
                  {metric.label}
                </div>

                {/* Animated Counter */}
                <div 
                  className="text-4xl font-bold mb-2 transition-colors"
                  style={{ color: metric.color }}
                >
                  <CountUpAnimation
                    end={metric.value}
                    duration={metric.duration}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    isVisible={visibleMetrics.has(idx)}
                  />
                </div>

                {/* Description */}
                <div className="text-sm text-body">
                  {metric.description}
                </div>

                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${metric.color}10 0%, transparent 70%)`,
                  }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

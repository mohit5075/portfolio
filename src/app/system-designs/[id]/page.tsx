"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertCircle, TrendingUp, Database, Shield, Zap } from "lucide-react";

const systemDesigns: Record<string, {
  title: string;
  description: string;
  icon: typeof Database;
  gradient: string;
  architecture: {
    title: string;
    description: string;
    diagram: string;
  };
  components: Array<{
    name: string;
    description: string;
    tech: string[];
  }>;
  scalingStrategy: Array<{
    approach: string;
    details: string;
  }>;
  tradeoffs: Array<{
    decision: string;
    pros: string[];
    cons: string[];
  }>;
}> = {
  "notification-system": {
    title: "Multi-Channel Notification System",
    description: "Event-driven notification service handling 100K+ notifications/day across email, SMS, and push channels",
    icon: Zap,
    gradient: "from-red-500 to-pink-500",
    architecture: {
      title: "Event-Driven Architecture",
      description: "Asynchronous processing with Kafka for reliable delivery",
      diagram: `
┌─────────────┐      ┌──────────┐      ┌─────────────┐
│   API       │─────▶│  Kafka   │─────▶│  Notification│
│  Gateway    │      │  Topics  │      │  Workers    │
└─────────────┘      └──────────┘      └─────────────┘
                                              │
                          ┌───────────────────┼───────────────────┐
                          │                   │                   │
                      ┌───▼───┐         ┌────▼────┐         ┌────▼────┐
                      │ Email │         │   SMS   │         │  Push   │
                      │Service│         │ Service │         │ Service │
                      └───────┘         └─────────┘         └─────────┘
      `,
    },
    components: [
      {
        name: "API Gateway",
        description: "REST API for notification requests with authentication and rate limiting",
        tech: ["Spring Boot", "JWT", "Redis"],
      },
      {
        name: "Kafka Event Bus",
        description: "Reliable message queue with topic partitioning for scalability",
        tech: ["Kafka", "Zookeeper"],
      },
      {
        name: "Notification Workers",
        description: "Horizontally scalable consumers processing notifications from Kafka",
        tech: ["Spring Boot", "Kafka Consumer"],
      },
      {
        name: "Channel Adapters",
        description: "Provider-specific integrations for Email (SendGrid), SMS (Twilio), Push (FCM)",
        tech: ["SendGrid", "Twilio", "FCM"],
      },
      {
        name: "Template Engine",
        description: "Dynamic content rendering with personalization",
        tech: ["Thymeleaf", "MongoDB"],
      },
      {
        name: "Delivery Tracking",
        description: "Status tracking and retry mechanism with exponential backoff",
        tech: ["PostgreSQL", "Redis"],
      },
    ],
    scalingStrategy: [
      {
        approach: "Horizontal Scaling",
        details: "Add more worker instances during peak loads. Kafka partitioning ensures load distribution.",
      },
      {
        approach: "Async Processing",
        details: "Decoupled architecture allows API to respond immediately while processing happens asynchronously.",
      },
      {
        approach: "Rate Limiting",
        details: "Per-tenant rate limits prevent abuse and ensure fair resource allocation.",
      },
      {
        approach: "Dead Letter Queue",
        details: "Failed messages are moved to DLQ for manual review and replay.",
      },
      {
        approach: "Circuit Breaker",
        details: "Resilience4j circuit breakers prevent cascading failures from external providers.",
      },
    ],
    tradeoffs: [
      {
        decision: "Kafka vs RabbitMQ",
        pros: ["Higher throughput", "Better scalability", "Event replay capability"],
        cons: ["More complex setup", "Higher operational overhead"],
      },
      {
        decision: "Async vs Sync Processing",
        pros: ["Better user experience", "Higher throughput", "Decoupled system"],
        cons: ["Eventual consistency", "More complex debugging"],
      },
      {
        decision: "Multi-Provider Support",
        pros: ["Redundancy", "Flexibility", "Better SLAs"],
        cons: ["Increased complexity", "More integration points"],
      },
    ],
  },
  "rate-limiter": {
    title: "Distributed Rate Limiter",
    description: "Token bucket algorithm with Redis for API gateway protection",
    icon: Shield,
    gradient: "from-yellow-500 to-orange-500",
    architecture: {
      title: "Token Bucket with Redis",
      description: "Centralized rate limiting using Redis for distributed synchronization",
      diagram: `
┌─────────────┐      ┌──────────┐      ┌─────────────┐
│   Client    │─────▶│   API    │─────▶│  Redis      │
│  Request    │      │ Gateway  │      │  (Tokens)   │
└─────────────┘      └──────────┘      └─────────────┘
                          │
                   Check & Decrement
                      Tokens
                          │
                   ┌──────▼──────┐
                   │  Proceed or │
                   │   Reject    │
                   └─────────────┘
      `,
    },
    components: [
      {
        name: "Rate Limiter Interceptor",
        description: "Spring interceptor checking rate limits before processing requests",
        tech: ["Spring Boot", "Aspect"],
      },
      {
        name: "Redis Token Store",
        description: "Distributed cache storing token buckets with TTL",
        tech: ["Redis", "Lettuce"],
      },
      {
        name: "Token Bucket Algorithm",
        description: "Configurable capacity and refill rate per user/endpoint",
        tech: ["Java", "Algorithm"],
      },
      {
        name: "Configuration Service",
        description: "Dynamic rate limit configuration per tenant",
        tech: ["MongoDB", "Spring Cloud Config"],
      },
    ],
    scalingStrategy: [
      {
        approach: "Redis Cluster",
        details: "Horizontal scaling of Redis for higher throughput and availability.",
      },
      {
        approach: "Sliding Window",
        details: "Combines fixed window and sliding window for smoother rate limiting.",
      },
      {
        approach: "Hierarchical Limits",
        details: "Per-user, per-endpoint, and global limits for fine-grained control.",
      },
    ],
    tradeoffs: [
      {
        decision: "Token Bucket vs Leaky Bucket",
        pros: ["Allows bursts", "More flexible", "Better user experience"],
        cons: ["Can be abused if not tuned properly"],
      },
      {
        decision: "Redis vs In-Memory",
        pros: ["Distributed state", "Survives restarts", "Accurate across instances"],
        cons: ["Network latency", "Single point of failure"],
      },
    ],
  },
  "analytics-pipeline": {
    title: "Real-Time Analytics Pipeline",
    description: "Stream processing with Kafka, ClickHouse processing 5K+ events/sec",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
    architecture: {
      title: "Lambda Architecture",
      description: "Combining batch and stream processing for real-time and historical analytics",
      diagram: `
┌──────────┐      ┌──────────┐      ┌────────────┐
│PostgreSQL│─────▶│ Debezium │─────▶│   Kafka    │
└──────────┘      │   CDC    │      │  Streams   │
                  └──────────┘      └────────────┘
                                          │
                          ┌───────────────┴───────────────┐
                          │                               │
                    ┌─────▼─────┐                  ┌─────▼─────┐
                    │ClickHouse │                  │    S3     │
                    │  (OLAP)   │                  │ (Archive) │
                    └─────┬─────┘                  └───────────┘
                          │
                    ┌─────▼─────┐
                    │  Superset │
                    │(Dashboard)│
                    └───────────┘
      `,
    },
    components: [
      {
        name: "Debezium CDC",
        description: "Captures changes from PostgreSQL transaction log",
        tech: ["Debezium", "Kafka Connect", "PostgreSQL"],
      },
      {
        name: "Kafka Streams",
        description: "Real-time transformations and aggregations",
        tech: ["Kafka Streams", "Java"],
      },
      {
        name: "ClickHouse",
        description: "Columnar database optimized for analytical queries",
        tech: ["ClickHouse", "MergeTree"],
      },
      {
        name: "Materialized Views",
        description: "Pre-aggregated tables for common queries",
        tech: ["ClickHouse", "SQL"],
      },
      {
        name: "Superset Dashboards",
        description: "Real-time visualization with 1-second refresh",
        tech: ["Apache Superset", "React"],
      },
    ],
    scalingStrategy: [
      {
        approach: "Kafka Partitioning",
        details: "Partition by user_id for parallelism while maintaining order.",
      },
      {
        approach: "ClickHouse Sharding",
        details: "Distributed tables across multiple nodes for horizontal scaling.",
      },
      {
        approach: "Materialized Views",
        details: "Pre-compute expensive aggregations for sub-second query latency.",
      },
      {
        approach: "Batch Inserts",
        details: "Buffer events and batch insert to ClickHouse for better throughput.",
      },
    ],
    tradeoffs: [
      {
        decision: "ClickHouse vs Elasticsearch",
        pros: ["100x faster aggregations", "Better compression", "Lower cost"],
        cons: ["No full-text search", "Steeper learning curve"],
      },
      {
        decision: "Real-time vs Near Real-time",
        pros: ["Up-to-date insights", "Better UX"],
        cons: ["Higher complexity", "More resources"],
      },
    ],
  },
  "document-processing": {
    title: "Document Processing Platform",
    description: "OCR microservice with 85% accuracy for multi-tenant document extraction",
    icon: Database,
    gradient: "from-purple-500 to-indigo-500",
    architecture: {
      title: "Async Processing Pipeline",
      description: "Queue-based architecture for scalable document processing",
      diagram: `
┌─────────┐      ┌──────────┐      ┌─────────┐
│  Upload │─────▶│    S3    │      │  Queue  │
│   API   │      │  Bucket  │      │ (SQS)   │
└─────────┘      └──────────┘      └────┬────┘
                                        │
                                  ┌─────▼─────┐
                                  │    OCR    │
                                  │  Workers  │
                                  └─────┬─────┘
                                        │
                      ┌─────────────────┼─────────────────┐
                      │                 │                 │
                ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
                │PostgreSQL │    │  S3       │    │ Webhook   │
                │(Metadata) │    │(Results)  │    │ Callback  │
                └───────────┘    └───────────┘    └───────────┘
      `,
    },
    components: [
      {
        name: "Upload API",
        description: "REST API for document upload with multi-tenant isolation",
        tech: ["Flask", "JWT", "Python"],
      },
      {
        name: "S3 Storage",
        description: "Scalable object storage for documents and results",
        tech: ["AWS S3", "Presigned URLs"],
      },
      {
        name: "OCR Engine",
        description: "Template-based extraction with ML models",
        tech: ["Tesseract", "PyTorch", "OpenCV"],
      },
      {
        name: "Processing Queue",
        description: "Async job queue with priority support",
        tech: ["Celery", "Redis"],
      },
      {
        name: "Metadata Store",
        description: "Document metadata and processing status",
        tech: ["PostgreSQL", "SQLAlchemy"],
      },
    ],
    scalingStrategy: [
      {
        approach: "Horizontal Workers",
        details: "Add more Celery workers to handle increased load.",
      },
      {
        approach: "Priority Queues",
        details: "Separate queues for different document types and tenant tiers.",
      },
      {
        approach: "Caching",
        details: "Cache OCR results for frequently processed document templates.",
      },
      {
        approach: "GPU Acceleration",
        details: "Use GPU instances for ML model inference for better throughput.",
      },
    ],
    tradeoffs: [
      {
        decision: "Sync vs Async Processing",
        pros: ["Better resource utilization", "Handles spikes", "Background processing"],
        cons: ["Delayed results", "More complex architecture"],
      },
      {
        decision: "Template-based vs ML-only",
        pros: ["Higher accuracy for known formats", "Lower latency", "Less compute"],
        cons: ["Requires manual template creation", "Less flexible"],
      },
    ],
  },
};

export default function SystemDesignPage() {
  const params = useParams();
  const id = params.id as string;
  const design = systemDesigns[id];

  if (!design) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Design Not Found</h1>
          <Link href="/" className="accent-text hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-theme sticky top-0 z-50 bg-alt backdrop-blur-lg">
        <div className="section-container py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-heading transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl">
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${design.gradient} flex items-center justify-center mb-6`}
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
            >
              <design.icon size={32} className="text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
              {design.title}
            </h1>
            <p className="text-xl text-body leading-relaxed">
              {design.description}
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding bg-alt">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-heading mb-8">Architecture</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-heading mb-4">
                {design.architecture.title}
              </h3>
              <p className="text-body mb-6">
                {design.architecture.description}
              </p>
            </div>

            <div className="code-block">
              <pre className="text-sm overflow-x-auto">
                <code>{design.architecture.diagram}</code>
              </pre>
            </div>
          </div>

          {/* Components */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-heading mb-8">Components</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {design.components.map((component, idx) => (
                <div
                  key={idx}
                  className="card p-6"
                >
                  <h4 className="text-lg font-semibold text-heading mb-2">
                    {component.name}
                  </h4>
                  <p className="text-sm text-body mb-4">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {component.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(0, 212, 255, 0.1)",
                          color: "#00d4ff",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Strategy */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-heading mb-8">Scaling Strategy</h2>
          <div className="space-y-4">
            {design.scalingStrategy.map((strategy, idx) => (
              <div
                key={idx}
                className="card p-6 flex items-start gap-4"
              >
                <CheckCircle2 size={24} className="text-green-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-heading mb-2">
                    {strategy.approach}
                  </h4>
                  <p className="text-body">
                    {strategy.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade-offs */}
      <section className="section-padding bg-alt">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-heading mb-8">Design Trade-offs</h2>
          <div className="space-y-8">
            {design.tradeoffs.map((tradeoff, idx) => (
              <div key={idx} className="card p-8">
                <h4 className="text-xl font-semibold text-heading mb-6">
                  {tradeoff.decision}
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pros */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 size={20} className="text-green-500" />
                      <h5 className="font-semibold text-heading">Advantages</h5>
                    </div>
                    <ul className="space-y-2">
                      {tradeoff.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-body">
                          <span className="text-green-500 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <AlertCircle size={20} className="text-orange-500" />
                      <h5 className="font-semibold text-heading">Challenges</h5>
                    </div>
                    <ul className="space-y-2">
                      {tradeoff.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-body">
                          <span className="text-orange-500 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="section-padding">
        <div className="section-container text-center">
          <Link 
            href="/#system-designs" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All System Designs
          </Link>
        </div>
      </div>
    </div>
  );
}

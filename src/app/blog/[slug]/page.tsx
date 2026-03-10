"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "kafka-clickhouse-analytics": {
    title: "Building Real-Time Analytics with Kafka and ClickHouse",
    date: "March 2026",
    readTime: "8 min read",
    tags: ["Kafka", "ClickHouse", "Real-Time", "Analytics"],
    content: `
# Building Real-Time Analytics with Kafka and ClickHouse

In this article, I'll share how we built a real-time analytics pipeline processing 5K+ events/sec with sub-second query latency.

## Architecture Overview

Our system consists of three main components:

1. **Kafka Streams** - For real-time event processing
2. **ClickHouse** - For OLAP queries and analytics
3. **Superset** - For data visualization

## Event Processing Pipeline

We use Kafka Connect with Debezium for Change Data Capture (CDC) from PostgreSQL. Events flow through Kafka topics and are consumed by our analytics service.

\`\`\`java
@Service
public class AnalyticsConsumer {
    @KafkaListener(topics = "transactions")
    public void processEvent(TransactionEvent event) {
        // Transform and enrich data
        AnalyticsRecord record = transformEvent(event);
        
        // Batch insert to ClickHouse
        clickHouseRepository.save(record);
    }
}
\`\`\`

## ClickHouse Optimizations

Key optimizations that enabled sub-second queries:

- **MergeTree engine** with proper partitioning
- **Materialized views** for pre-aggregated data
- **Columnar storage** for analytical workloads
- **Distributed tables** for horizontal scaling

## Results

- ✅ Processing 5,000+ events/second
- ✅ Sub-second query latency (p99 < 200ms)
- ✅ Real-time dashboards with 1-second refresh
- ✅ 10TB+ data with efficient storage compression

## Lessons Learned

1. Choose the right partitioning key based on query patterns
2. Use materialized views for frequently accessed aggregations
3. Monitor memory usage - ClickHouse can be memory-hungry
4. Implement proper error handling and dead-letter queues

---

This architecture has been running in production for over a year, handling millions of transactions daily with excellent reliability.
    `,
  },
  "cdc-debezium": {
    title: "Understanding Change Data Capture with Debezium",
    date: "February 2026",
    readTime: "10 min read",
    tags: ["Debezium", "CDC", "Kafka", "PostgreSQL"],
    content: `
# Understanding Change Data Capture with Debezium

Change Data Capture (CDC) is a critical pattern for building real-time data pipelines. Let's explore how Debezium makes CDC simple and reliable.

## What is CDC?

CDC tracks changes in your database and streams them as events. This enables:

- Real-time data synchronization
- Event-driven architectures
- Audit trails and compliance
- Cache invalidation

## Debezium Architecture

Debezium is a distributed platform built on Kafka Connect that captures row-level changes from databases.

\`\`\`yaml
# Debezium PostgreSQL Connector Configuration
{
  "name": "postgres-connector",
  "config": {
    "connector.class": "io.debezium.connector.postgresql.PostgresConnector",
    "database.hostname": "postgres",
    "database.port": "5432",
    "database.user": "debezium",
    "database.password": "dbz",
    "database.dbname": "inventory",
    "database.server.name": "dbserver1",
    "table.include.list": "public.customers,public.orders",
    "plugin.name": "pgoutput"
  }
}
\`\`\`

## Implementation Details

### Setting up PostgreSQL

First, enable logical replication:

\`\`\`sql
ALTER SYSTEM SET wal_level = logical;
ALTER SYSTEM SET max_replication_slots = 4;
\`\`\`

### Consuming CDC Events

\`\`\`java
@KafkaListener(topics = "dbserver1.public.orders")
public void handleOrderChange(ChangeEvent event) {
    switch(event.getOperation()) {
        case CREATE -> handleInsert(event);
        case UPDATE -> handleUpdate(event);
        case DELETE -> handleDelete(event);
    }
}
\`\`\`

## Production Considerations

- **Monitoring**: Track connector lag and throughput
- **Error Handling**: Implement retry logic and DLQs
- **Schema Evolution**: Use Avro or Protobuf for schema registry
- **Performance**: Tune batch sizes and flush intervals

## Use Cases We've Implemented

1. **Audit Trail** - Track all changes with Javers integration
2. **Search Index Sync** - Keep Elasticsearch in sync with PostgreSQL
3. **Cache Invalidation** - Invalidate Redis cache on data changes
4. **Analytics Pipeline** - Stream changes to ClickHouse

---

Debezium has proven to be a reliable foundation for our event-driven architecture.
    `,
  },
  "multi-tenant-saas": {
    title: "Designing Multi-Tenant SaaS APIs",
    date: "January 2026",
    readTime: "12 min read",
    tags: ["Architecture", "Multi-Tenancy", "API Design", "Security"],
    content: `
# Designing Multi-Tenant SaaS APIs

Building secure, scalable multi-tenant systems requires careful architectural decisions. Here's what I learned building a BFSI Decision-as-a-Service platform.

## Tenancy Models

### 1. Database per Tenant
- Complete isolation
- Higher operational overhead
- Used for enterprise customers

### 2. Schema per Tenant
- Good isolation with shared resources
- Moderate complexity
- Our primary model

### 3. Shared Schema
- Maximum density
- Requires row-level security
- Used for small tenants

## Tenant Context

Every request must carry tenant context:

\`\`\`java
@Component
public class TenantInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, 
                            HttpServletResponse response, 
                            Object handler) {
        String tenantId = extractTenantId(request);
        TenantContext.setCurrentTenant(tenantId);
        return true;
    }
}
\`\`\`

## Data Isolation

### Database Level

\`\`\`java
@Entity
@Table(name = "configurations")
@FilterDef(name = "tenantFilter", 
          parameters = @ParamDef(name = "tenantId", type = "string"))
@Filter(name = "tenantFilter", 
        condition = "tenant_id = :tenantId")
public class Configuration {
    @Column(name = "tenant_id", nullable = false)
    private String tenantId;
    // other fields
}
\`\`\`

### API Level

\`\`\`java
@PreAuthorize("hasPermission(#tenantId, 'TENANT_ACCESS')")
@GetMapping("/api/v1/tenants/{tenantId}/configs")
public List<Configuration> getConfigs(@PathVariable String tenantId) {
    return configService.findByTenant(tenantId);
}
\`\`\`

## Dynamic Configuration

Each tenant has custom configuration:

\`\`\`java
public class TenantConfig {
    private String tenantId;
    private Map<String, Object> features;
    private RateLimitConfig rateLimits;
    private WorkflowConfig workflows;
}
\`\`\`

## Performance Optimization

- **Connection Pooling**: Separate pools per tenant tier
- **Caching**: Tenant-aware cache keys
- **Rate Limiting**: Per-tenant quotas
- **Circuit Breaking**: Tenant isolation for failures

## Monitoring & Observability

Track per-tenant metrics:

\`\`\`java
@Timed(value = "api.request", 
       extraTags = {"tenant", "#tenantId"})
public Response processRequest(String tenantId, Request req) {
    // process
}
\`\`\`

## Key Takeaways

1. **Security First**: Always validate tenant context
2. **Isolation**: Prevent tenant data leakage
3. **Scalability**: Design for horizontal scaling
4. **Monitoring**: Per-tenant observability is crucial

---

This architecture has successfully served 100+ tenants with 1000+ req/min throughput.
    `,
  },
  "aws-cost-optimization": {
    title: "Reducing AWS Costs Using Infrastructure Metrics",
    date: "December 2025",
    readTime: "7 min read",
    tags: ["AWS", "Cost Optimization", "DevOps", "Monitoring"],
    content: `
# Reducing AWS Costs Using Infrastructure Metrics

How we achieved 35% AWS cost reduction through data-driven infrastructure optimization.

## The Problem

Our AWS bill was growing faster than usage. We needed to:
- Identify over-provisioned resources
- Right-size instances
- Optimize reserved capacity

## Metrics Collection

### Using Nomad Metrics

\`\`\`hcl
telemetry {
  prometheus_metrics = true
  disable_hostname = false
}
\`\`\`

### Kibana Dashboards

Created dashboards tracking:
- CPU utilization per service
- Memory usage patterns
- Network I/O
- Request rates

## Analysis Process

### 1. Identify Low Utilization

\`\`\`sql
SELECT 
  service_name,
  AVG(cpu_usage) as avg_cpu,
  AVG(memory_usage) as avg_memory
FROM metrics
WHERE timestamp > NOW() - INTERVAL '30 days'
GROUP BY service_name
HAVING avg_cpu < 30;
\`\`\`

### 2. Right-Sizing Recommendations

| Service | Current | Average CPU | Recommended | Savings |
|---------|---------|-------------|-------------|---------|
| API Gateway | t3.xlarge | 25% | t3.large | 50% |
| Worker | t3.2xlarge | 35% | t3.xlarge | 50% |
| Cache | r6g.large | 40% | r6g.medium | 50% |

## Implementation

### EC2 Right-Sizing

\`\`\`terraform
resource "aws_instance" "api" {
  instance_type = "t3.large"  # was t3.xlarge
  
  tags = {
    Optimized = "yes"
    Savings = "50%"
  }
}
\`\`\`

### Auto Scaling Tuning

\`\`\`hcl
resource "aws_autoscaling_policy" "scale_up" {
  scaling_adjustment = 1
  adjustment_type = "ChangeInCapacity"
  cooldown = 300
  
  # More aggressive scaling thresholds
  metric_aggregation_type = "Average"
}
\`\`\`

### Reserved Instance Strategy

- 1-year RIs for baseline capacity
- Spot instances for batch jobs
- On-demand for spiky workloads

## Results

### Cost Breakdown

**Before Optimization:**
- EC2: $12,000/month
- RDS: $3,500/month
- Data Transfer: $1,200/month
- **Total: $16,700/month**

**After Optimization:**
- EC2: $7,200/month (-40%)
- RDS: $2,800/month (-20%)
- Data Transfer: $900/month (-25%)
- **Total: $10,900/month**

### 35% Overall Reduction!

## Continuous Monitoring

Set up alerts for:

\`\`\`yaml
alerts:
  - name: HighCostAnomaly
    query: cost_daily > average(cost_daily, 7d) * 1.5
    action: notify_team
    
  - name: UnderutilizedInstance
    query: cpu_usage_avg < 20% for 7d
    action: recommend_downsize
\`\`\`

## Key Lessons

1. **Measure Everything**: You can't optimize what you don't measure
2. **Right-Size Continuously**: Resource needs change over time
3. **Use Spot Instances**: For non-critical workloads
4. **Reserve Wisely**: Only for predictable baseline loads
5. **Tag Everything**: For cost attribution and optimization

---

This approach saved us $70,000+ annually while maintaining performance SLAs.
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
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

      {/* Article */}
      <article className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(0, 212, 255, 0.1)",
                  border: "1px solid rgba(0, 212, 255, 0.3)",
                  color: "#00d4ff",
                }}
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none"
            style={{
              color: "var(--text-body)",
            }}
          >
            <div className="space-y-6 leading-relaxed">
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s/, '');
                  const fontSize = level === 1 ? '2rem' : level === 2 ? '1.5rem' : '1.25rem';
                  
                  if (level === 1) {
                    return <h1 key={idx} className="text-heading font-bold mt-8 mb-4" style={{ fontSize }}>{text}</h1>;
                  } else if (level === 2) {
                    return <h2 key={idx} className="text-heading font-bold mt-8 mb-4" style={{ fontSize }}>{text}</h2>;
                  } else {
                    return <h3 key={idx} className="text-heading font-bold mt-8 mb-4" style={{ fontSize }}>{text}</h3>;
                  }
                }
                
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```\w*\n?/g, '').trim();
                  return (
                    <pre 
                      key={idx}
                      className="code-block overflow-x-auto"
                    >
                      <code>{code}</code>
                    </pre>
                  );
                }

                if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('*')) {
                  const items = paragraph.split('\n').filter(l => l.trim());
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^[-*]\s/, '')}</li>
                      ))}
                    </ul>
                  );
                }

                if (paragraph.trim().match(/^\d+\./)) {
                  const items = paragraph.split('\n').filter(l => l.trim());
                  return (
                    <ol key={idx} className="list-decimal list-inside space-y-2 ml-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                      ))}
                    </ol>
                  );
                }

                if (paragraph.trim() === '---') {
                  return <hr key={idx} className="my-8 border-theme" />;
                }

                return paragraph.trim() && (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Back to top */}
          <div className="mt-16 pt-8 border-t border-theme text-center">
            <Link 
              href="/#blog" 
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

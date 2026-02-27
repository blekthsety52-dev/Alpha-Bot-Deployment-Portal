export const packageData = {
  manifest: {
    name: "The Alpha-Bot",
    version: "1.0.4-PROD",
    buildDate: "2026-02-27T00:00:00Z",
    author: "Alpha-Bot Engineering",
    signature: "RSA-4096-SIGNATURE-PLACEHOLDER",
    checksums: {
      "bin/alphabot-linux-x64": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      "bin/alphabot-linux-arm64": "f4c8996fb92427ae41e4649b934ca495991b7852b855e3b0c44298fc1c149abf",
      "bin/alphabot-win-x64.exe": "9b934ca495991b7852b855e3b0c44298fc1c149afbf4c8996fb92427ae41e464",
      "bin/alphabot-macos-x64": "27ae41e4649b934ca495991b7852b855e3b0c44298fc1c149afbf4c8996fb924",
      "scripts/install.sh": "8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4",
      "scripts/install.ps1": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2",
      "scripts/preflight.sh": "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1",
      "scripts/network_config.sh": "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2",
      "scripts/security_harden.sh": "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3",
      "scripts/test_suite.sh": "e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4",
      "scripts/load_test.js": "f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5",
      "scripts/rollback.sh": "g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6",
      "config/prod.env.template": "h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7",
      "config/logrotate.conf": "i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8",
      "docs/deployment_guide.md": "j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9",
      "docs/openapi.yaml": "k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0",
      "docs/grafana_dashboard.json": "l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0k1"
    }
  },
  files: [
    {
      path: "manifest.json",
      type: "json",
      content: `{
  "name": "The Alpha-Bot",
  "version": "1.0.4-PROD",
  "buildDate": "2026-02-27T00:00:00Z",
  "author": "Alpha-Bot Engineering",
  "signature": "RSA-4096-SIGNATURE-PLACEHOLDER",
  "components": [
    "bin/alphabot-linux-x64",
    "bin/alphabot-linux-arm64",
    "bin/alphabot-win-x64.exe",
    "bin/alphabot-macos-x64",
    "scripts/install.sh",
    "scripts/install.ps1",
    "scripts/preflight.sh",
    "scripts/network_config.sh",
    "scripts/security_harden.sh",
    "scripts/test_suite.sh",
    "scripts/load_test.js",
    "scripts/rollback.sh",
    "config/prod.env.template",
    "config/logrotate.conf",
    "docs/deployment_guide.md",
    "docs/openapi.yaml",
    "docs/grafana_dashboard.json"
  ]
}`
    },
    {
      path: "checksums.txt",
      type: "text",
      content: `# SHA-256 Checksums for The Alpha-Bot V1.0.4-PROD
e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  bin/alphabot-linux-x64
f4c8996fb92427ae41e4649b934ca495991b7852b855e3b0c44298fc1c149abf  bin/alphabot-linux-arm64
9b934ca495991b7852b855e3b0c44298fc1c149afbf4c8996fb92427ae41e464  bin/alphabot-win-x64.exe
27ae41e4649b934ca495991b7852b855e3b0c44298fc1c149afbf4c8996fb924  bin/alphabot-macos-x64
8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4  scripts/install.sh
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2  scripts/install.ps1
b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1  scripts/preflight.sh
c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2  scripts/network_config.sh
d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3  scripts/security_harden.sh
e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4  scripts/test_suite.sh
f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5  scripts/load_test.js
g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6  scripts/rollback.sh
h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7  config/prod.env.template
i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8  config/logrotate.conf
j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9  docs/deployment_guide.md
k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0  docs/openapi.yaml
l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a1b2c3d4e5f6g7h8i9j0k1  docs/grafana_dashboard.json`
    },
    {
      path: "scripts/install.sh",
      type: "shell",
      content: `#!/bin/bash
# Alpha-Bot V1.0.4-PROD Installation Script
# Target: Linux/macOS
set -e

LOG_FILE="/var/log/alphabot_install.log"
exec > >(tee -a \${LOG_FILE} )
exec 2> >(tee -a \${LOG_FILE} >&2)

echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] Starting Alpha-Bot installation..."

# 1. Pre-flight checks
echo "-> Running pre-flight checks..."
./preflight.sh

# 2. Verify signatures and checksums
echo "-> Verifying package integrity..."
sha256sum -c ../checksums.txt --ignore-missing

# 3. Extract binaries
echo "-> Extracting binaries..."
mkdir -p /opt/alphabot/bin
cp ../bin/alphabot-linux-x64 /opt/alphabot/bin/alphabot
chmod +x /opt/alphabot/bin/alphabot

# 4. Setup Configuration
echo "-> Setting up configuration..."
mkdir -p /etc/alphabot
if [ ! -f /etc/alphabot/.env ]; then
    cp ../config/prod.env.template /etc/alphabot/.env
    echo "   Created new .env file from template. Please update credentials."
else
    echo "   Existing .env found. Backing up and keeping current."
    cp /etc/alphabot/.env /etc/alphabot/.env.bak
fi

# 5. Network & Security
echo "-> Configuring network and security..."
./network_config.sh
./security_harden.sh

# 6. Systemd Service Setup
echo "-> Installing systemd service..."
cat <<EOF > /etc/systemd/system/alphabot.service
[Unit]
Description=Alpha-Bot Trading Engine
After=network.target

[Service]
Type=simple
User=alphabot
Group=alphabot
EnvironmentFile=/etc/alphabot/.env
ExecStart=/opt/alphabot/bin/alphabot
Restart=on-failure
RestartSec=5
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable alphabot

echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] Installation complete. Run 'systemctl start alphabot' to begin."`
    },
    {
      path: "scripts/install.ps1",
      type: "powershell",
      content: `# Alpha-Bot V1.0.4-PROD Installation Script
# Target: Windows Server 2019/2022
$ErrorActionPreference = "Stop"

$LogFile = "C:\\ProgramData\\AlphaBot\\Logs\\install.log"
New-Item -ItemType Directory -Force -Path "C:\\ProgramData\\AlphaBot\\Logs" | Out-Null
Start-Transcript -Path $LogFile -Append

Write-Host "[$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')] Starting Alpha-Bot installation..."

# 1. Pre-flight checks
Write-Host "-> Running pre-flight checks..."
& .\\preflight.ps1

# 2. Extract binaries
Write-Host "-> Extracting binaries..."
$InstallDir = "C:\\Program Files\\AlphaBot"
New-Item -ItemType Directory -Force -Path "$InstallDir\\bin" | Out-Null
Copy-Item "..\\bin\\alphabot-win-x64.exe" -Destination "$InstallDir\\bin\\alphabot.exe"

# 3. Setup Configuration
Write-Host "-> Setting up configuration..."
$ConfigDir = "C:\\ProgramData\\AlphaBot\\Config"
New-Item -ItemType Directory -Force -Path $ConfigDir | Out-Null
if (-not (Test-Path "$ConfigDir\\.env")) {
    Copy-Item "..\\config\\prod.env.template" -Destination "$ConfigDir\\.env"
    Write-Host "   Created new .env file from template. Please update credentials."
}

# 4. Windows Service Setup
Write-Host "-> Installing Windows Service..."
$ServiceName = "AlphaBot"
if (Get-Service $ServiceName -ErrorAction SilentlyContinue) {
    Stop-Service $ServiceName
    sc.exe delete $ServiceName
}
New-Service -Name $ServiceName -BinaryPathName "$InstallDir\\bin\\alphabot.exe" -DisplayName "Alpha-Bot Trading Engine" -StartupType Automatic

Write-Host "[$(Get-Date -Format 'yyyy-MM-ddTHH:mm:ssZ')] Installation complete. Start the service via Services.msc."
Stop-Transcript`
    },
    {
      path: "scripts/preflight.sh",
      type: "shell",
      content: `#!/bin/bash
# Pre-flight checks for Alpha-Bot
set -e

echo "Running pre-flight checks..."

# 1. Check OS
OS=$(grep -E '^(VERSION_ID|ID)=' /etc/os-release | tr -d '"')
echo "Detected OS: $OS"

# 2. Check CPU
CORES=$(nproc)
echo "CPU Cores: $CORES"
if [ "$CORES" -lt 4 ]; then
    echo "ERROR: Minimum 4 CPU cores required."
    exit 1
fi

# 3. Check RAM
RAM=$(free -m | awk '/^Mem:/{print $2}')
echo "Available RAM: \${RAM}MB"
if [ "$RAM" -lt 8192 ]; then
    echo "ERROR: Minimum 8GB RAM required."
    exit 1
fi

# 4. Check Disk Space
DISK=$(df -m /opt | awk 'NR==2 {print $4}')
echo "Available Disk Space on /opt: \${DISK}MB"
if [ "$DISK" -lt 51200 ]; then
    echo "ERROR: Minimum 50GB disk space required on /opt."
    exit 1
fi

# 5. Check Required Ports
for PORT in 8080 8443 9090; do
    if ss -tuln | grep -q ":$PORT "; then
        echo "ERROR: Port $PORT is already in use."
        exit 1
    fi
done

echo "SUCCESS: All pre-flight checks passed."`
    },
    {
      path: "scripts/network_config.sh",
      type: "shell",
      content: `#!/bin/bash
# Network Configuration & Firewall Rules
set -e

echo "Configuring network settings..."

# Setup UFW if available
if command -v ufw >/dev/null 2>&1; then
    echo "Configuring UFW rules..."
    ufw allow 8080/tcp comment 'Alpha-Bot HTTP API'
    ufw allow 8443/tcp comment 'Alpha-Bot HTTPS API'
    ufw allow 9090/tcp comment 'Alpha-Bot Prometheus Metrics'
    ufw reload
elif command -v firewalld >/dev/null 2>&1; then
    echo "Configuring firewalld rules..."
    firewall-cmd --permanent --add-port=8080/tcp
    firewall-cmd --permanent --add-port=8443/tcp
    firewall-cmd --permanent --add-port=9090/tcp
    firewall-cmd --reload
else
    echo "WARNING: No supported firewall (ufw/firewalld) found. Please configure ports manually."
fi

# Optimize network stack for high-frequency trading
echo "Applying sysctl network optimizations..."
cat <<EOF > /etc/sysctl.d/99-alphabot-net.conf
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 15
EOF
sysctl -p /etc/sysctl.d/99-alphabot-net.conf

echo "Network configuration complete."`
    },
    {
      path: "scripts/security_harden.sh",
      type: "shell",
      content: `#!/bin/bash
# Security Hardening (CIS Benchmarks & TLS)
set -e

echo "Applying security baselines..."

# 1. Disable ICMP Redirects
sysctl -w net.ipv4.conf.all.accept_redirects=0
sysctl -w net.ipv4.conf.all.send_redirects=0
sysctl -w net.ipv4.conf.default.accept_redirects=0
sysctl -w net.ipv4.conf.default.send_redirects=0

# 2. Create dedicated service user
if ! id -u alphabot > /dev/null 2>&1; then
    useradd -r -s /bin/false alphabot
    echo "Created 'alphabot' service user."
fi

# 3. Restrict permissions
chown -R alphabot:alphabot /opt/alphabot
chmod 750 /opt/alphabot/bin
chmod 700 /etc/alphabot
chmod 600 /etc/alphabot/.env

# 4. Generate self-signed cert for internal TLS 1.3 if none exists
CERT_DIR="/etc/alphabot/certs"
mkdir -p $CERT_DIR
if [ ! -f "$CERT_DIR/server.crt" ]; then
    echo "Generating internal TLS certificates..."
    openssl req -x509 -newkey rsa:4096 -keyout "$CERT_DIR/server.key" -out "$CERT_DIR/server.crt" -days 365 -nodes -subj "/CN=alphabot.local"
    chown -R alphabot:alphabot $CERT_DIR
    chmod 600 "$CERT_DIR/server.key"
fi

echo "Security hardening complete."`
    },
    {
      path: "scripts/test_suite.sh",
      type: "shell",
      content: `#!/bin/bash
# Automated Test Suite for Post-Deployment Validation
set -e

echo "Running post-deployment test suite..."

# 1. Service Health
echo "Checking service status..."
if ! systemctl is-active --quiet alphabot; then
    echo "ERROR: alphabot service is not running."
    exit 1
fi

# 2. API Health Endpoint
echo "Testing health endpoint..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/health)
if [ "$HTTP_STATUS" -ne 200 ]; then
    echo "ERROR: Health endpoint returned $HTTP_STATUS"
    exit 1
fi

# 3. Database Connectivity
echo "Testing database connection..."
# Assuming a health check endpoint that verifies DB
DB_STATUS=$(curl -s http://localhost:8080/health/db | grep -o '"status":"up"')
if [ -z "$DB_STATUS" ]; then
    echo "ERROR: Database connection failed."
    exit 1
fi

echo "SUCCESS: All integration tests passed."`
    },
    {
      path: "scripts/load_test.js",
      type: "javascript",
      content: `import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Ramp up to 50 users
    { duration: '1m', target: 50 },   // Stay at 50 users
    { duration: '30s', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% of requests must complete below 200ms
    http_req_failed: ['rate<0.01'],   // Error rate must be less than 1%
  },
};

export default function () {
  const res = http.get('http://localhost:8080/api/v1/market-data');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
  
  sleep(1);
}`
    },
    {
      path: "scripts/rollback.sh",
      type: "shell",
      content: `#!/bin/bash
# Rollback Procedure
set -e

echo "Initiating rollback to previous version..."

BACKUP_DIR="/opt/alphabot/backup/latest"

if [ ! -d "$BACKUP_DIR" ]; then
    echo "ERROR: No backup found at $BACKUP_DIR"
    exit 1
fi

# 1. Stop service
echo "Stopping service..."
systemctl stop alphabot

# 2. Restore binaries
echo "Restoring binaries..."
cp -r $BACKUP_DIR/bin/* /opt/alphabot/bin/

# 3. Restore config
echo "Restoring configuration..."
cp $BACKUP_DIR/config/.env /etc/alphabot/.env

# 4. Start service
echo "Starting service..."
systemctl start alphabot

# 5. Verify
echo "Verifying rollback..."
sleep 5
if ! systemctl is-active --quiet alphabot; then
    echo "CRITICAL ERROR: Service failed to start after rollback."
    exit 1
fi

echo "Rollback completed successfully."`
    },
    {
      path: "config/prod.env.template",
      type: "env",
      content: `# Alpha-Bot Production Environment Configuration
# Replace placeholders with actual values

NODE_ENV=production
PORT=8080
HTTPS_PORT=8443

# Database Configuration
DB_HOST=\${DB_HOST}
DB_PORT=5432
DB_USER=\${DB_USER}
DB_PASS=\${DB_PASS}
DB_NAME=alphabot_prod
DB_POOL_SIZE=50

# Redis Cache
REDIS_URL=redis://\${REDIS_HOST}:6379/0

# Trading Engine Parameters
ENABLE_CIRCUIT_BREAKER=true
MAX_DRAWDOWN_PCT=5.0
KELLY_FRACTION_MULTIPLIER=0.5
EXECUTION_MODE=live

# Logging
LOG_LEVEL=info
LOG_FORMAT=json

# Security
JWT_SECRET=\${JWT_SECRET}
TLS_CERT_PATH=/etc/alphabot/certs/server.crt
TLS_KEY_PATH=/etc/alphabot/certs/server.key`
    },
    {
      path: "config/logrotate.conf",
      type: "conf",
      content: `/var/log/alphabot/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 alphabot alphabot
    sharedscripts
    postrotate
        systemctl reload alphabot > /dev/null 2>/dev/null || true
    endscript
}`
    },
    {
      path: "docs/deployment_guide.md",
      type: "markdown",
      content: `# Alpha-Bot V1.0.4-PROD Deployment Guide

## 1. Overview
This document outlines the deployment procedure for The Alpha-Bot V1.0.4-PROD. The package includes binaries, configurations, and automation scripts for a secure, enterprise-grade installation.

## 2. Prerequisites
### Hardware
- **CPU**: Minimum 4 Cores (8+ recommended for high-frequency processing)
- **RAM**: Minimum 8GB (16GB+ recommended)
- **Disk**: 50GB SSD (NVMe preferred for low latency)

### Software
- **OS**: Ubuntu 22.04 LTS / Debian 11 / Windows Server 2022
- **Dependencies**: PostgreSQL 14+, Redis 6+

## 3. Installation Procedure (Linux)
1. Transfer the release archive to the target server.
2. Extract the archive: \`tar -xzf alphabot-v1.0.4-prod.tar.gz\`
3. Navigate to the scripts directory: \`cd alphabot-v1.0.4-prod/scripts\`
4. Execute the installation script with root privileges: \`sudo ./install.sh\`
5. Edit the configuration file: \`sudo nano /etc/alphabot/.env\`
6. Start the service: \`sudo systemctl start alphabot\`

## 4. Network & Security
The installation script automatically configures UFW/firewalld to open required ports:
- **8080/tcp**: HTTP API
- **8443/tcp**: HTTPS API
- **9090/tcp**: Prometheus Metrics

TLS 1.3 is enforced. Self-signed certificates are generated by default; replace them with CA-signed certificates in \`/etc/alphabot/certs/\`.

## 5. Validation
Run the automated test suite to verify the deployment:
\`\`\`bash
cd scripts
./test_suite.sh
\`\`\`

## 6. Rollback Procedure
If the deployment fails or exhibits instability, execute the rollback script:
\`\`\`bash
sudo ./rollback.sh
\`\`\`
This will restore the binaries and configuration from the pre-upgrade backup.`
    },
    {
      path: "docs/openapi.yaml",
      type: "yaml",
      content: `openapi: 3.1.0
info:
  title: Alpha-Bot Trading API
  version: 1.0.4-PROD
  description: Enterprise API for the Alpha-Bot Quant Trading System.
servers:
  - url: https://api.alphabot.internal/v1
paths:
  /health:
    get:
      summary: System health check
      responses:
        '200':
          description: System is healthy
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    example: "up"
                  version:
                    type: string
                    example: "1.0.4-PROD"
  /trade/execute:
    post:
      summary: Execute a manual trade override
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                asset:
                  type: string
                action:
                  type: string
                  enum: [BUY, SELL]
                amount:
                  type: number
      responses:
        '200':
          description: Trade executed successfully
        '401':
          description: Unauthorized
        '403':
          description: Forbidden (Risk limits exceeded)
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT`
    },
    {
      path: "docs/grafana_dashboard.json",
      type: "json",
      content: `{
  "title": "Alpha-Bot Performance & Risk Dashboard",
  "uid": "alphabot-prod-01",
  "refresh": "5s",
  "panels": [
    {
      "type": "timeseries",
      "title": "System Latency (ms)",
      "gridPos": { "h": 8, "w": 12, "x": 0, "y": 0 },
      "targets": [
        {
          "expr": "rate(http_request_duration_seconds_sum{job='alphabot'}[1m]) / rate(http_request_duration_seconds_count{job='alphabot'}[1m]) * 1000",
          "legendFormat": "Avg Latency"
        }
      ]
    },
    {
      "type": "stat",
      "title": "Active Positions",
      "gridPos": { "h": 8, "w": 6, "x": 12, "y": 0 },
      "targets": [
        {
          "expr": "alphabot_active_positions_total",
          "legendFormat": "Positions"
        }
      ]
    },
    {
      "type": "gauge",
      "title": "Risk Utilization (Kelly %)",
      "gridPos": { "h": 8, "w": 6, "x": 18, "y": 0 },
      "targets": [
        {
          "expr": "alphabot_risk_utilization_percent",
          "legendFormat": "Utilization"
        }
      ],
      "fieldConfig": {
        "defaults": {
          "min": 0,
          "max": 100,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              { "color": "green", "value": null },
              { "color": "orange", "value": 70 },
              { "color": "red", "value": 90 }
            ]
          }
        }
      }
    }
  ]
}`
    }
  ]
};
